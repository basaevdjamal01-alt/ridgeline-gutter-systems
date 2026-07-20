import { NextResponse } from 'next/server';
import {
  EMPTY_GOOGLE_REVIEWS_RESPONSE,
  type GoogleReviewItem,
  type GoogleReviewsResponse,
} from '@/types/google-reviews';

/**
 * Google Places API (New) — Place Details reviews endpoint.
 *
 * Server-only. Reads GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID from env.
 * Never expose the API key to the browser (no NEXT_PUBLIC_ prefix).
 */

export const runtime = 'nodejs';

const REVALIDATE_SECONDS = 3600;
const LEAVE_REVIEW_FALLBACK = 'https://g.page/r/CcPsn34tVv6TEBM/review';

type GoogleText = { text?: string; languageCode?: string };

type GoogleAuthorAttribution = {
  displayName?: string;
  uri?: string;
  photoUri?: string;
};

type GooglePlaceReview = {
  name?: string;
  relativePublishTimeDescription?: string;
  rating?: number;
  text?: GoogleText;
  originalText?: GoogleText;
  authorAttribution?: GoogleAuthorAttribution;
  publishTime?: string;
  googleMapsUri?: string;
};

type GooglePlaceDetails = {
  displayName?: GoogleText;
  rating?: number;
  userRatingCount?: number;
  reviews?: GooglePlaceReview[];
  googleMapsUri?: string;
};

function emptyResponse(status = 200) {
  return NextResponse.json(EMPTY_GOOGLE_REVIEWS_RESPONSE, {
    status,
    headers: {
      'Cache-Control': `public, s-maxage=${REVALIDATE_SECONDS}, stale-while-revalidate=${REVALIDATE_SECONDS}`,
    },
  });
}

function isValidRating(value: unknown): value is number {
  return (
    typeof value === 'number' &&
    Number.isFinite(value) &&
    value >= 1 &&
    value <= 5
  );
}

function normalizeReview(
  review: GooglePlaceReview,
  index: number,
): GoogleReviewItem | null {
  const authorName = review.authorAttribution?.displayName?.trim() ?? '';
  const text =
    review.text?.text?.trim() ||
    review.originalText?.text?.trim() ||
    '';
  const rating = review.rating;

  if (!authorName || !text || !isValidRating(rating)) {
    return null;
  }

  const item: GoogleReviewItem = {
    id: review.name?.trim() || `google-review-${index}`,
    authorName,
    rating,
    text,
  };

  const photo = review.authorAttribution?.photoUri?.trim();
  if (photo) item.authorPhotoUrl = photo;

  const relativeTime = review.relativePublishTimeDescription?.trim();
  if (relativeTime) item.relativeTime = relativeTime;

  const publishTime = review.publishTime?.trim();
  if (publishTime) item.publishTime = publishTime;

  const mapsUrl = review.googleMapsUri?.trim();
  if (mapsUrl) item.googleMapsUrl = mapsUrl;

  return item;
}

function normalizePlaceDetails(
  data: GooglePlaceDetails,
): GoogleReviewsResponse {
  const reviews = (data.reviews ?? [])
    .map((review, index) => normalizeReview(review, index))
    .filter((review): review is GoogleReviewItem => review !== null);

  const totalFromGoogle =
    typeof data.userRatingCount === 'number' &&
    Number.isFinite(data.userRatingCount) &&
    data.userRatingCount > 0
      ? Math.floor(data.userRatingCount)
      : 0;

  const rating =
    typeof data.rating === 'number' && Number.isFinite(data.rating)
      ? data.rating
      : null;

  return {
    businessName: data.displayName?.text?.trim() ?? '',
    rating: totalFromGoogle > 0 ? rating : null,
    totalReviews: totalFromGoogle,
    googleMapsUrl: data.googleMapsUri?.trim() || LEAVE_REVIEW_FALLBACK,
    reviews,
  };
}

export async function GET() {
  try {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY?.trim();
    const placeId = process.env.GOOGLE_PLACE_ID?.trim();

    if (!apiKey || !placeId) {
      return emptyResponse(200);
    }

    const url = `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`;

    const googleResponse = await fetch(url, {
      method: 'GET',
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask':
          'displayName,rating,userRatingCount,reviews,googleMapsUri',
      },
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!googleResponse.ok) {
      return emptyResponse(200);
    }

    const data = (await googleResponse.json()) as GooglePlaceDetails;

    if (!data || typeof data !== 'object') {
      return emptyResponse(200);
    }

    const normalized = normalizePlaceDetails(data);

    return NextResponse.json(normalized, {
      status: 200,
      headers: {
        'Cache-Control': `public, s-maxage=${REVALIDATE_SECONDS}, stale-while-revalidate=${REVALIDATE_SECONDS}`,
      },
    });
  } catch {
    return emptyResponse(200);
  }
}

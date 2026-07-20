/**
 * Normalized Google Places reviews payload returned by /api/google-reviews.
 * Safe for client consumption — never includes API keys or raw Google errors.
 */

export interface GoogleReviewItem {
  id: string;
  authorName: string;
  authorPhotoUrl?: string;
  rating: number;
  text: string;
  relativeTime?: string;
  publishTime?: string;
  googleMapsUrl?: string;
}

export interface GoogleReviewsResponse {
  businessName: string;
  rating: number | null;
  totalReviews: number;
  googleMapsUrl: string;
  reviews: GoogleReviewItem[];
}

export const EMPTY_GOOGLE_REVIEWS_RESPONSE: GoogleReviewsResponse = {
  businessName: '',
  rating: null,
  totalReviews: 0,
  googleMapsUrl: '',
  reviews: [],
};

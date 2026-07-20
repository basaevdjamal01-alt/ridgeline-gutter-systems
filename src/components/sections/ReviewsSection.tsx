'use client';

import { useEffect, useState } from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/icons';
import { Reveal } from '@/components/motion/Reveal';
import {
  ReviewsCarousel,
  type Review,
} from '@/components/sections/ReviewsCarousel';
import {
  EMPTY_GOOGLE_REVIEWS_RESPONSE,
  type GoogleReviewItem,
  type GoogleReviewsResponse,
} from '@/types/google-reviews';

const LEAVE_GOOGLE_REVIEW_URL = 'https://g.page/r/CcPsn34tVv6TEBM/review';

function mapGoogleReviewToCard(item: GoogleReviewItem): Review {
  return {
    name: item.authorName,
    city: '',
    rating: Math.round(item.rating),
    review: item.text,
    service: '',
    relativeDate: item.relativeTime,
    date: item.publishTime
      ? new Date(item.publishTime).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        })
      : undefined,
    source: 'google',
    avatarUrl: item.authorPhotoUrl,
  };
}

function DecorativeStars() {
  return (
    <div className="flex justify-center gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, index) => (
        <Icon key={index} name="star" className="h-3.5 w-3.5 text-copper-400" />
      ))}
    </div>
  );
}

function ReviewsTrustPanel() {
  return (
    <Reveal>
      <div className="relative mx-auto w-full max-w-[35rem] overflow-hidden rounded-2xl border border-copper-500/25 bg-bone/[0.04] px-6 py-5 text-center shadow-soft sm:px-8 sm:py-6">
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl bg-copper-500/[0.03]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -top-6 left-1/2 h-14 w-28 -translate-x-1/2 rounded-full bg-copper-400/10 blur-2xl"
          aria-hidden
        />

        <div className="relative">
          <DecorativeStars />

          <p className="mt-3 text-base font-medium leading-snug text-bone/90">
            We&rsquo;re earning the trust of homeowners across Minnesota,
            Wisconsin, and North Dakota.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-bone/65">
            Real customer reviews will appear here as new projects are
            completed.
          </p>
        </div>
      </div>
    </Reveal>
  );
}

function ReviewsLoadingState() {
  return (
    <div className="mt-8" aria-busy="true" aria-live="polite">
      <div className="mx-auto max-w-md animate-pulse space-y-3 text-center">
        <div className="mx-auto h-4 w-40 rounded bg-bone/10" />
        <div className="mx-auto h-3 w-56 rounded bg-bone/10" />
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="hidden h-56 animate-pulse rounded-2xl border border-bone/10 bg-bone/[0.04] first:block md:block lg:block"
          />
        ))}
      </div>
      <span className="sr-only">Loading Google reviews</span>
    </div>
  );
}

function GoogleRatingSummary({
  rating,
  totalReviews,
}: {
  rating: number;
  totalReviews: number;
}) {
  const rounded = Math.round(rating);
  const reviewLabel = totalReviews === 1 ? 'review' : 'reviews';

  return (
    <Reveal>
      <div className="mt-8 flex flex-col items-center text-center">
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, index) => (
              <Icon
                key={index}
                name="star"
                className={
                  index < rounded
                    ? 'h-4 w-4 text-copper-400'
                    : 'h-4 w-4 text-bone/20'
                }
              />
            ))}
          </div>
          <span className="text-sm font-semibold tabular-nums text-bone">
            {rating.toFixed(1)}
          </span>
        </div>
        <p className="mt-2 text-sm text-bone/65">
          Based on {totalReviews} Google {reviewLabel}
        </p>
        <p className="mt-1.5 text-[0.6875rem] font-medium text-bone/45">
          Reviews from Google
        </p>
      </div>
    </Reveal>
  );
}

function GoogleReviewActions({ googleMapsUrl }: { googleMapsUrl: string }) {
  const darkOutline =
    'border border-copper-500/35 bg-transparent text-bone ring-0 hover:border-copper-400/55 hover:bg-bone/[0.06] hover:text-bone';

  return (
    <Reveal>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button
          href={LEAVE_GOOGLE_REVIEW_URL}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          size="md"
          className="w-full uppercase tracking-wide sm:w-auto"
        >
          Leave a Google Review
        </Button>
        {googleMapsUrl ? (
          <Button
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            size="md"
            className={`w-full uppercase tracking-wide sm:w-auto ${darkOutline}`}
          >
            View on Google
          </Button>
        ) : null}
      </div>
    </Reveal>
  );
}

export function ReviewsSection() {
  const [data, setData] = useState<GoogleReviewsResponse>(
    EMPTY_GOOGLE_REVIEWS_RESPONSE,
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function loadReviews() {
      try {
        const response = await fetch('/api/google-reviews');
        if (!response.ok) {
          if (!cancelled) {
            setData(EMPTY_GOOGLE_REVIEWS_RESPONSE);
          }
          return;
        }

        const payload = (await response.json()) as GoogleReviewsResponse;
        if (!cancelled) {
          setData({
            businessName: payload.businessName ?? '',
            rating:
              typeof payload.rating === 'number' ? payload.rating : null,
            totalReviews:
              typeof payload.totalReviews === 'number'
                ? payload.totalReviews
                : 0,
            googleMapsUrl: payload.googleMapsUrl ?? '',
            reviews: Array.isArray(payload.reviews) ? payload.reviews : [],
          });
        }
      } catch {
        if (!cancelled) {
          setData(EMPTY_GOOGLE_REVIEWS_RESPONSE);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    void loadReviews();

    return () => {
      cancelled = true;
    };
  }, []);

  const carouselReviews = data.reviews.map(mapGoogleReviewToCard);
  const hasReviews = carouselReviews.length > 0;
  const showRatingSummary =
    data.totalReviews > 0 &&
    typeof data.rating === 'number' &&
    Number.isFinite(data.rating);

  return (
    <Section id="reviews" tone="graphite" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-copper-500/10 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-copper-600/10 blur-[100px]"
        aria-hidden
      />

      <Container className="relative">
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <span className="eyebrow flex items-center gap-3">
              <span className="channel-rule" aria-hidden />
              Customer reviews
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="mt-5 max-w-3xl font-display text-[clamp(2.375rem,1.35rem+2.4vw,2.625rem)] leading-[1.1] tracking-tight text-bone md:text-h1 lg:text-display">
              Trusted by Homeowners Across the Upper Midwest
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-prose text-body-lg text-bone/80">
              See what local homeowners say about working with GUTTER FLOW
              MASTER.
            </p>
          </Reveal>
        </div>

        {loading ? (
          <ReviewsLoadingState />
        ) : hasReviews ? (
          <>
            {showRatingSummary ? (
              <GoogleRatingSummary
                rating={data.rating as number}
                totalReviews={data.totalReviews}
              />
            ) : (
              <div className="mt-6 text-center">
                <p className="text-[0.6875rem] font-medium text-bone/45">
                  Reviews from Google
                </p>
              </div>
            )}

            <ReviewsCarousel reviews={carouselReviews} />

            <GoogleReviewActions googleMapsUrl={data.googleMapsUrl} />
          </>
        ) : (
          <div className="mt-8">
            <ReviewsTrustPanel />
          </div>
        )}

        <Reveal>
          <div className="mx-auto mt-16 max-w-2xl text-center">
            <h3 className="text-h2 text-bone">Ready to Upgrade Your Gutters?</h3>
            <p className="mt-4 text-body-lg text-bone/70">
              Request your free estimate and let our team help protect your
              home.
            </p>
            <div className="mt-8">
              <Button
                href="#estimate-form"
                size="lg"
                className="w-full uppercase tracking-wide sm:w-auto"
              >
                GET A FREE ESTIMATE
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

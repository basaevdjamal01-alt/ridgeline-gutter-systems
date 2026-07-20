'use client';

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Icon } from '@/components/icons';
import { Reveal } from '@/components/motion/Reveal';
import { cn } from '@/lib/utils';

export interface Review {
  name: string;
  city: string;
  rating: number;
  review: string;
  service: string;
  date?: string;
  relativeDate?: string;
  source?: string;
  avatarUrl?: string;
}

const AUTO_PLAY_MS = 4000;
const RESUME_DELAY_MS = 5000;

function useVisibleCount() {
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const update = () => {
      if (window.matchMedia('(min-width: 1024px)').matches) {
        setVisibleCount(3);
      } else if (window.matchMedia('(min-width: 768px)').matches) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return visibleCount;
}

function getInitials(name: string): string {
  const parts = name.split(/\s+/).filter(Boolean);
  return parts
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Icon
          key={index}
          name="star"
          className={cn(
            'h-4 w-4',
            index < rating ? 'text-copper-400' : 'text-bone/20',
          )}
        />
      ))}
    </div>
  );
}

const reviewCardHover =
  'motion-safe:transition-all motion-safe:duration-[280ms] motion-safe:ease-out-expo [@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-1.5 [@media(hover:hover)_and_(pointer:fine)]:hover:border-copper-400/45 [@media(hover:hover)_and_(pointer:fine)]:hover:bg-bone/[0.06] [@media(hover:hover)_and_(pointer:fine)]:hover:shadow-[0_4px_8px_rgba(22,24,29,0.08),0_20px_44px_-12px_rgba(176,112,60,0.28)]';

function ReviewCard({ review }: { review: Review }) {
  const isGoogle = review.source?.toLowerCase() === 'google';
  const displayDate = review.relativeDate ?? review.date;

  return (
    <article
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-2xl border border-bone/10 bg-bone/[0.04] p-7 shadow-soft',
        reviewCardHover,
      )}
    >
      <Icon
        name="quote"
        className="pointer-events-none absolute -right-2 -top-1 h-16 w-16 text-bone/[0.06] motion-safe:transition-colors motion-safe:duration-[280ms] [@media(hover:hover)_and_(pointer:fine)]:group-hover:text-copper-500/10"
        aria-hidden
      />

      <StarRating rating={review.rating} />

      <blockquote className="mt-5 flex-1 text-body leading-relaxed text-bone/85">
        &ldquo;{review.review}&rdquo;
      </blockquote>

      <footer className="mt-6 flex items-center gap-4 border-t border-bone/10 pt-5">
        {review.avatarUrl ? (
          <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-copper-500/25">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={review.avatarUrl}
              alt=""
              width={44}
              height={44}
              className="h-full w-full object-cover"
            />
          </span>
        ) : (
          <span
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-copper-500/25 bg-copper-500/10 text-sm font-semibold text-copper-300"
            aria-hidden
          >
            {getInitials(review.name)}
          </span>
        )}
        <div className="min-w-0 flex-1">
          <p className="truncate font-semibold text-bone">{review.name}</p>
          {review.city ? (
            <p className="mt-0.5 text-sm text-bone/60">{review.city}</p>
          ) : null}
          <p className="mt-1 text-xs font-medium uppercase tracking-wide text-copper-300/90">
            {review.service}
          </p>
          {displayDate && (
            <p className="mt-1 text-xs text-bone/45">{displayDate}</p>
          )}
          {isGoogle && (
            <p className="mt-1.5 text-[0.6875rem] font-medium text-bone/50">
              Review from Google
            </p>
          )}
        </div>
      </footer>
    </article>
  );
}

export function ReviewsCarousel({ reviews }: { reviews: Review[] }) {
  const reduceMotion = useReducedMotion();
  const visibleCount = useVisibleCount();
  const [page, setPage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const swipeStart = useRef<{ x: number; y: number } | null>(null);

  const pageCount = useMemo(() => {
    if (reviews.length <= visibleCount) return 1;
    return reviews.length - visibleCount + 1;
  }, [reviews.length, visibleCount]);

  const visibleReviews = useMemo(() => {
    if (reviews.length <= visibleCount) return reviews;
    return reviews.slice(page, page + visibleCount);
  }, [reviews, page, visibleCount]);

  const shouldCenter = reviews.length < visibleCount;
  const canNavigate = pageCount > 1;

  const cardWidthClass =
    visibleCount === 3
      ? 'w-full max-w-[calc((100%-2.5rem)/3)]'
      : visibleCount === 2
        ? 'w-full max-w-[calc((100%-1.25rem)/2)]'
        : 'w-full max-w-md';

  const goTo = useCallback(
    (next: number) => {
      if (!canNavigate) return;
      setPage(((next % pageCount) + pageCount) % pageCount);
    },
    [canNavigate, pageCount],
  );

  const goNext = useCallback(() => goTo(page + 1), [goTo, page]);
  const goPrev = useCallback(() => goTo(page - 1), [goTo, page]);

  const pauseInteraction = useCallback(() => {
    setIsInteracting(true);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      setIsInteracting(false);
    }, RESUME_DELAY_MS);
  }, []);

  useEffect(() => {
    if (page >= pageCount) setPage(0);
  }, [page, pageCount]);

  useEffect(() => {
    return () => {
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
  }, []);

  useEffect(() => {
    if (reduceMotion || !canNavigate || isHovered || isInteracting) return;

    const timer = setInterval(goNext, AUTO_PLAY_MS);
    return () => clearInterval(timer);
  }, [reduceMotion, canNavigate, isHovered, isInteracting, goNext]);

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!canNavigate) return;
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      pauseInteraction();
      goNext();
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      pauseInteraction();
      goPrev();
    }
  };

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest('button')) {
      swipeStart.current = null;
      return;
    }
    swipeStart.current = { x: event.clientX, y: event.clientY };
  };

  const onPointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!swipeStart.current || !canNavigate) return;

    const deltaX = event.clientX - swipeStart.current.x;
    const deltaY = event.clientY - swipeStart.current.y;
    swipeStart.current = null;

    if (Math.abs(deltaX) < 40 || Math.abs(deltaX) < Math.abs(deltaY)) return;

    pauseInteraction();
    if (deltaX < 0) goNext();
    else goPrev();
  };

  const slideTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const };

  if (shouldCenter) {
    return (
      <Reveal>
        <div
          className="mt-8 flex flex-wrap justify-center gap-5"
          role="region"
          aria-label="Customer reviews"
        >
          {reviews.map((review, index) => (
            <div
              key={`${review.name}-${review.city}-${index}`}
              className={cn('h-full min-w-0', cardWidthClass)}
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal>
      <div
        className="relative mt-8 touch-pan-y"
        role="region"
        aria-roledescription="carousel"
        aria-label="Customer reviews"
        tabIndex={canNavigate ? 0 : -1}
        onKeyDown={onKeyDown}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => {
          swipeStart.current = null;
        }}
      >
        {canNavigate && (
          <>
            <button
              type="button"
              className="absolute left-0 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-copper-500/30 bg-graphite-800/90 text-bone/90 shadow-soft transition-colors hover:border-copper-400/50 hover:bg-graphite-700 hover:text-bone sm:h-10 sm:w-10 md:-left-1 lg:-left-3"
              aria-label="Show previous reviews"
              onClick={() => {
                pauseInteraction();
                goPrev();
              }}
            >
              <Icon name="arrowRight" className="h-4 w-4 -scale-x-100" />
            </button>
            <button
              type="button"
              className="absolute right-0 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-copper-500/30 bg-graphite-800/90 text-bone/90 shadow-soft transition-colors hover:border-copper-400/50 hover:bg-graphite-700 hover:text-bone sm:h-10 sm:w-10 md:-right-1 lg:-right-3"
              aria-label="Show next reviews"
              onClick={() => {
                pauseInteraction();
                goNext();
              }}
            >
              <Icon name="arrowRight" className="h-4 w-4" />
            </button>
          </>
        )}

        <div className="overflow-hidden px-11 sm:px-12 md:px-10 lg:px-12">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`${page}-${visibleCount}`}
              initial={
                reduceMotion ? false : { opacity: 0.82, x: 28 }
              }
              animate={{ opacity: 1, x: 0 }}
              exit={
                reduceMotion ? undefined : { opacity: 0.82, x: -28 }
              }
              transition={slideTransition}
              className={cn(
                'grid w-full gap-5',
                visibleCount === 1 && 'grid-cols-1',
                visibleCount === 2 && 'grid-cols-2',
                visibleCount === 3 && 'grid-cols-3',
              )}
            >
              {visibleReviews.map((review, index) => (
                <div
                  key={`${review.name}-${review.city}-${page}-${index}`}
                  className="h-full min-w-0"
                >
                  <ReviewCard review={review} />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {canNavigate && (
          <div
            className="mt-6 flex items-center justify-center gap-2"
            role="tablist"
            aria-label="Review carousel pagination"
          >
            {Array.from({ length: pageCount }).map((_, index) => (
              <button
                key={index}
                type="button"
                role="tab"
                aria-label={`Go to review slide ${index + 1} of ${pageCount}`}
                aria-selected={page === index}
                className={cn(
                  'h-2 rounded-full transition-all duration-300',
                  page === index
                    ? 'w-6 bg-copper-400'
                    : 'w-2 bg-bone/25 hover:bg-bone/40',
                )}
                onClick={() => {
                  pauseInteraction();
                  setPage(index);
                }}
              />
            ))}
          </div>
        )}
      </div>
    </Reveal>
  );
}

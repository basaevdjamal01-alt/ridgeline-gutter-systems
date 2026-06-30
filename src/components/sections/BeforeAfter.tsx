'use client';

import { useCallback, useRef, useState } from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Icon } from '@/components/icons';

/**
 * Draggable before/after comparison.
 * Uses styled panels by default — drop real <Image> elements into the
 * `Before`/`After` slots to ship client photography.
 */
export function BeforeAfter() {
  const [pos, setPos] = useState(55);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(98, Math.max(2, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    update(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (dragging.current) update(e.clientX);
  };
  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <Section tone="limestone">
      <Container>
        <SectionHeading
          eyebrow="See the difference"
          title="Real results you can drag to compare"
          lead="Drag the handle to reveal the before-and-after of a recent cleaning and re-pitch. We document every job with photos like these."
        />

        <div className="mt-12 overflow-hidden rounded-2xl border border-sand shadow-lift">
          <div
            ref={ref}
            className="relative aspect-[16/9] w-full cursor-ew-resize select-none touch-none"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
            role="slider"
            aria-label="Before and after comparison slider"
            aria-valuenow={Math.round(pos)}
            aria-valuemin={0}
            aria-valuemax={100}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'ArrowLeft') setPos((p) => Math.max(2, p - 4));
              if (e.key === 'ArrowRight') setPos((p) => Math.min(98, p + 4));
            }}
          >
            {/* AFTER (clean) — base layer */}
            <Panel variant="after" />

            {/* BEFORE (clogged) — clipped overlay */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            >
              <Panel variant="before" />
            </div>

            {/* Labels */}
            <Label className="left-4" text="Before" />
            <Label className="right-4" text="After" tone="copper" />

            {/* Handle */}
            <div
              className="absolute inset-y-0 z-10 w-0.5 bg-bone shadow-[0_0_0_1px_rgba(22,24,29,0.15)]"
              style={{ left: `${pos}%` }}
            >
              <div className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-sand bg-bone text-graphite-700 shadow-lift">
                <Icon name="arrowRight" className="h-4 w-4 -scale-x-100" />
                <Icon name="arrowRight" className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function Panel({ variant }: { variant: 'before' | 'after' }) {
  const isBefore = variant === 'before';
  return (
    <div
      className={
        isBefore
          ? 'absolute inset-0 bg-gradient-to-b from-[#322b22] to-[#1c1812]'
          : 'absolute inset-0 bg-gradient-to-b from-[#2d3640] to-[#191c22]'
      }
    >
      <div className="absolute inset-0 bg-grid opacity-[0.07]" />

      {/* Roof / fascia strip */}
      <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-graphite-700 to-graphite-800" />
      <div className="absolute inset-x-0 top-1/3 h-1.5 bg-graphite-900" />

      {/* Gutter channel */}
      <div className="absolute inset-x-0 top-1/3 mt-1.5">
        <div
          className={`mx-[6%] h-12 rounded-b-lg shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] ${
            isBefore ? 'metal-copper opacity-70 saturate-50' : 'metal-copper'
          }`}
        >
          {/* top lip highlight */}
          <div className="h-1.5 w-full rounded-t-sm bg-bone/25" />

          {isBefore ? (
            // Debris pile
            <div className="flex h-[calc(100%-0.375rem)] items-end gap-0.5 overflow-hidden px-2 pb-1">
              {Array.from({ length: 40 }).map((_, i) => (
                <span
                  key={i}
                  className="rounded-[1px]"
                  style={{
                    height: `${30 + (i % 6) * 10}%`,
                    width: '6px',
                    background: ['#6b5a32', '#4a3d22', '#7c6a3f', '#3a2f1c'][
                      i % 4
                    ],
                    transform: `rotate(${(i % 7) * 8 - 24}deg)`,
                  }}
                />
              ))}
            </div>
          ) : (
            // Clean water glint
            <div className="flex h-[calc(100%-0.375rem)] items-center px-3">
              <span className="h-1 w-full rounded-full bg-gradient-to-r from-[#9bb7ce]/0 via-[#9bb7ce]/60 to-[#9bb7ce]/20" />
            </div>
          )}
        </div>
      </div>

      {/* Overflow drip (before) / clean downspout flow (after) */}
      {isBefore ? (
        <div className="absolute left-[18%] top-[calc(33%+3.5rem)] h-16 w-1 rounded-full bg-gradient-to-b from-[#6b5a32]/70 to-transparent" />
      ) : (
        <div className="absolute right-[10%] top-[calc(33%+0.375rem)] h-1/2 w-2.5 rounded-b-sm metal-copper" />
      )}

      <div className="absolute bottom-4 left-4 flex items-center gap-2 text-xs text-bone/60">
        <Icon name={isBefore ? 'leaf' : 'droplet'} className="h-4 w-4" />
        {isBefore ? 'Clogged & overflowing' : 'Clean & free-flowing'}
      </div>
    </div>
  );
}

function Label({
  text,
  className,
  tone = 'dark',
}: {
  text: string;
  className?: string;
  tone?: 'dark' | 'copper';
}) {
  return (
    <span
      className={`absolute top-4 z-10 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide backdrop-blur-sm ${
        tone === 'copper'
          ? 'bg-copper-gradient text-bone'
          : 'bg-graphite-900/70 text-bone'
      } ${className ?? ''}`}
    >
      {text}
    </span>
  );
}

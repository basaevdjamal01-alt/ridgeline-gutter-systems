'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

/**
 * Premium animated hero backdrop — a calm "living sky", no weather effects.
 *
 * Effects and the class/keyframes that drive each:
 *  - Image zoom (Ken Burns) ..... `.hero-kenburns`       (keyframes: hero-kenburns, 35s)
 *  - Drifting clouds ............ `.hero-cloud`          (keyframes: hero-clouds-drift)
 *  - Sunlight sweep (25s) ....... `.hero-sunlight`       (keyframes: hero-sunlight-sweep)
 *  - Gutter/roof reflection (10s) `.hero-gutter__sweep`  (keyframes: hero-gutter-sweep)
 *  - Parallax (mouse, ≤8px) ..... `.hero-parallax`       (JS sets --parallax-x)
 *
 * Text reveal is handled by the <Reveal> wrapper. CTA glow + pulse lives on
 * the button (`.hero-cta-glow`). Clouds + sunlight are masked to the top-right
 * sky so they never cover the headline/buttons. All motion is transform/opacity
 * only, and reduced-motion freezes everything to a static frame.
 */
export function HeroBackdrop() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = parallaxRef.current;
    if (!el) return;

    const canAnimate =
      window.matchMedia('(min-width: 1024px)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!canAnimate) return;

    const MAX = 8; // px — very subtle horizontal parallax
    let raf = 0;
    let target = 0;

    const apply = () => {
      raf = 0;
      el.style.setProperty('--parallax-x', `${target.toFixed(2)}px`);
    };
    const onMove = (e: PointerEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1; // -1 .. 1
      target = Math.max(-MAX, Math.min(MAX, nx * MAX));
      if (!raf) raf = requestAnimationFrame(apply);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      {/* Parallax + slow Ken Burns photograph */}
      <div ref={parallaxRef} className="hero-parallax">
        <div className="hero-kenburns">
          <Image
            src="/images/hero-house.png"
            alt="Home protected by professionally installed seamless gutters"
            fill
            priority
            quality={95}
            sizes="100vw"
            className="hero-photo object-cover object-center"
          />
        </div>
      </div>

      {/* Living sky — soft clouds drifting right→left, masked to the sky area */}
      <div className="hero-sky">
        <div className="hero-cloud hero-cloud--1" />
        <div className="hero-cloud hero-cloud--2" />
        <div className="hero-cloud hero-cloud--3" />
      </div>

      {/* Soft warm sunlight sweep from the top-right sky every 25s */}
      <div className="hero-sunlight" />

      {/* Soft sunlight shimmer along the black gutter / roof edge */}
      <div className="hero-gutter">
        <div className="hero-gutter__sweep" />
      </div>

      {/* Premium dark overlay (readability + slowly drifting vignette) */}
      <div className="hero-overlay-readability" />
      <div className="hero-overlay-vignette" />
      <div className="hero-copper-glow" />
    </div>
  );
}

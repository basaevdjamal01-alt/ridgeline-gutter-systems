import Image from 'next/image';
import { cn } from '@/lib/utils';
import { site } from '@/lib/site';

const LOGO_SRC = '/images/gfm-logo.png';

type LogoProps = {
  className?: string;
  variant?: 'default' | 'header';
};

/**
 * Approved GUTTER FLOW MASTER LLC logo, used as-is (never edited).
 * The source PNG has a solid black background; on the dark header and
 * footer bars it is composited with `mix-blend-mode: screen` (see
 * globals.css) so the black drops out and only the artwork shows.
 */
export function Logo({ className, variant = 'default' }: LogoProps) {
  const isHeader = variant === 'header';

  return (
    <span
      className={cn(
        'brand-logo',
        isHeader ? 'brand-logo--header' : 'brand-logo--footer',
        className,
      )}
    >
      <Image
        src={LOGO_SRC}
        alt={`${site.name} logo`}
        width={1536}
        height={1024}
        priority={isHeader}
        quality={90}
        sizes={
          isHeader
            ? '(min-width: 1280px) 444px, (min-width: 1024px) 231px, 296px'
            : '160px'
        }
        className="brand-logo__img"
      />
    </span>
  );
}

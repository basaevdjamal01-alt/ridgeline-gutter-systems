import Image from 'next/image';
import { cn } from '@/lib/utils';
import { site } from '@/lib/site';

const LOGO_SRC = '/images/ridgeline-logo.png';

type LogoProps = {
  className?: string;
  variant?: 'default' | 'header';
};

/**
 * Header: a simplified, readable lockup — the gold R / roof icon cropped from
 * the transparent ridgeline-logo.png, paired with crisp HTML text for
 * "RIDGELINE" (ivory + copper-gold) and a "GUTTER SYSTEMS" tagline.
 * Footer: the full PNG via next/image at a small size.
 */
export function Logo({ className, variant = 'default' }: LogoProps) {
  if (variant === 'header') {
    return (
      <span
        className={cn('brand-logo brand-logo--header', className)}
        role="img"
        aria-label={`${site.name} logo`}
      >
        <span className="brand-logo__icon" aria-hidden="true" />
        <span className="brand-logo__wordmark">
          <span className="brand-logo__name">
            <span className="brand-logo__ridge">RIDGE</span>
            <span className="brand-logo__line">LINE</span>
          </span>
          <span className="brand-logo__tag">Gutter Systems</span>
        </span>
      </span>
    );
  }

  return (
    <span
      className={cn('brand-logo brand-logo--footer', className)}
      aria-label={`${site.name} logo`}
    >
      <Image
        src={LOGO_SRC}
        alt=""
        width={1069}
        height={301}
        className="brand-logo__img"
        priority
      />
    </span>
  );
}

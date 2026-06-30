import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Reveal } from '@/components/motion/Reveal';

/** Signature stack: overline eyebrow + display-serif heading + optional lead. */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'left',
  tone = 'dark',
  as: Tag = 'h2',
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: 'left' | 'center';
  tone?: 'dark' | 'light';
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
}) {
  return (
    <div
      className={cn(
        'flex flex-col',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <span className="eyebrow flex items-center gap-3">
            <span className="channel-rule" aria-hidden />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <Tag
          className={cn(
            'mt-5 max-w-3xl text-h2 sm:text-h1',
            Tag === 'h1' && 'text-display sm:text-display-lg',
            tone === 'light' ? 'text-bone' : 'text-graphite-900',
          )}
        >
          {title}
        </Tag>
      </Reveal>
      {lead && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              'mt-5 max-w-prose text-body-lg',
              align === 'center' && 'mx-auto',
              tone === 'light' ? 'text-bone/70' : 'text-graphite-600',
            )}
          >
            {lead}
          </p>
        </Reveal>
      )}
    </div>
  );
}

import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Tone = 'bone' | 'limestone' | 'graphite';

const tones: Record<Tone, string> = {
  bone: 'bg-bone text-graphite-900',
  limestone: 'bg-limestone text-graphite-900',
  graphite: 'relative overflow-hidden bg-graphite-gradient text-bone texture-grain',
};

export function Section({
  tone = 'bone',
  size = 'default',
  id,
  className,
  children,
}: {
  tone?: Tone;
  size?: 'default' | 'sm';
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        tones[tone],
        size === 'default' ? 'py-section' : 'py-section-sm',
        className,
      )}
    >
      {children}
    </section>
  );
}

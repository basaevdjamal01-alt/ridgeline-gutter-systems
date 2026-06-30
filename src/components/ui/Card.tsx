import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function Card({
  className,
  children,
  interactive = false,
}: {
  className?: string;
  children: ReactNode;
  interactive?: boolean;
}) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-sand bg-bone p-7 shadow-soft',
        interactive &&
          'transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:shadow-lift hover:border-copper-300',
        className,
      )}
    >
      {children}
    </div>
  );
}

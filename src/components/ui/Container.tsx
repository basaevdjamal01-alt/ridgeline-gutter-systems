import type { ElementType, ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function Container({
  as: Tag = 'div',
  size = 'default',
  className,
  children,
}: {
  as?: ElementType;
  size?: 'default' | 'prose' | 'wide';
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag
      className={cn(
        'mx-auto w-full px-6 lg:px-8',
        size === 'default' && 'max-w-content',
        size === 'wide' && 'max-w-[88rem]',
        size === 'prose' && 'max-w-prose',
        className,
      )}
    >
      {children}
    </Tag>
  );
}

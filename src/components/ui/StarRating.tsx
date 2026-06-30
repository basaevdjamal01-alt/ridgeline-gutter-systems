import { Icon } from '@/components/icons';
import { cn } from '@/lib/utils';

export function StarRating({
  rating = 5,
  className,
  starClassName,
}: {
  rating?: number;
  className?: string;
  starClassName?: string;
}) {
  return (
    <div
      className={cn('inline-flex items-center gap-0.5 text-copper-500', className)}
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon
          key={i}
          name="star"
          className={cn(
            'h-4 w-4',
            i < Math.round(rating) ? 'opacity-100' : 'opacity-25',
            starClassName,
          )}
        />
      ))}
    </div>
  );
}

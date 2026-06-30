import Link from 'next/link';
import type { ComponentProps, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Icon, type IconName } from '@/components/icons';

type Variant = 'primary' | 'secondary' | 'ghost' | 'inverse';
type Size = 'sm' | 'md' | 'lg';

const variants: Record<Variant, string> = {
  primary:
    'bg-copper-gradient text-bone shadow-copper hover:-translate-y-0.5 hover:shadow-lift active:translate-y-0',
  secondary:
    'bg-transparent text-graphite-900 ring-1 ring-inset ring-graphite-900/20 hover:ring-graphite-900/40 hover:bg-graphite-900/[0.03]',
  ghost:
    'bg-transparent text-graphite-700 hover:text-copper-600',
  inverse:
    'bg-bone text-graphite-900 hover:-translate-y-0.5 hover:shadow-lift',
};

const sizes: Record<Size, string> = {
  sm: 'h-10 px-4 text-sm gap-1.5',
  md: 'h-12 px-6 text-[0.95rem] gap-2',
  lg: 'h-14 px-8 text-base gap-2.5',
};

type BaseProps = {
  variant?: Variant;
  size?: Size;
  icon?: IconName;
  iconPosition?: 'left' | 'right';
  children: ReactNode;
  className?: string;
};

const baseClasses =
  'inline-flex items-center justify-center rounded-lg font-sans font-semibold tracking-tight transition-all duration-200 ease-out-expo whitespace-nowrap disabled:opacity-60 disabled:pointer-events-none';

function content(
  icon: IconName | undefined,
  iconPosition: 'left' | 'right',
  children: ReactNode,
) {
  const glyph = icon ? (
    <Icon
      name={icon}
      className={cn(
        'h-[1.1em] w-[1.1em] transition-transform duration-200',
        iconPosition === 'right' && 'group-hover:translate-x-0.5',
      )}
    />
  ) : null;
  return (
    <>
      {iconPosition === 'left' && glyph}
      {children}
      {iconPosition === 'right' && glyph}
    </>
  );
}

type ButtonAsButton = BaseProps &
  Omit<ComponentProps<'button'>, keyof BaseProps> & { href?: undefined };
type ButtonAsLink = BaseProps &
  Omit<ComponentProps<typeof Link>, keyof BaseProps> & { href: string };

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const {
    variant = 'primary',
    size = 'md',
    icon,
    iconPosition = 'right',
    className,
    children,
    ...rest
  } = props;

  const classes = cn('group', baseClasses, variants[variant], sizes[size], className);

  if ('href' in props && props.href !== undefined) {
    const { href, ...linkRest } = rest as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...linkRest}>
        {content(icon, iconPosition, children)}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ComponentProps<'button'>)}>
      {content(icon, iconPosition, children)}
    </button>
  );
}

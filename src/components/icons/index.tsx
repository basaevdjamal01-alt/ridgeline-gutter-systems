import type { SVGProps } from 'react';

/**
 * Custom 24px line icon set — 1.5px stroke, rounded joints.
 * Matches the brand's bespoke iconography (no third-party icon dependency).
 */

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export const icons = {
  channel: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M3 7h18" />
      <path d="M4 7v8a3 3 0 0 0 3 3h6" />
      <path d="M20 7v4" />
      <path d="M16 14v6" />
      <path d="M14 20h4" />
    </svg>
  ),
  droplet: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M12 3s6 5.5 6 10a6 6 0 0 1-12 0c0-4.5 6-10 6-10Z" />
      <path d="M9.5 14a2.5 2.5 0 0 0 2.5 2.5" />
    </svg>
  ),
  shield: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M12 3 5 6v5c0 4.4 3 7.6 7 9 4-1.4 7-4.6 7-9V6l-7-3Z" />
      <path d="m9 11.5 2 2 4-4" />
    </svg>
  ),
  ruler: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="m4 15 11-11 5 5L9 20l-5-5Z" />
      <path d="m8 8 1.5 1.5" />
      <path d="m11 5 1.5 1.5" />
      <path d="m5 11 1.5 1.5" />
    </svg>
  ),
  wrench: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M15.5 4.5a4 4 0 0 0-5 5L4 16v4h4l6.5-6.5a4 4 0 0 0 5-5l-2.7 2.7-2.3-.7-.7-2.3 2.4-2.4Z" />
    </svg>
  ),
  clipboard: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M9 4h6v3H9z" />
      <path d="M9 5.5H6.5A1.5 1.5 0 0 0 5 7v12a1.5 1.5 0 0 0 1.5 1.5h11A1.5 1.5 0 0 0 19 19V7a1.5 1.5 0 0 0-1.5-1.5H15" />
      <path d="M8.5 12h7M8.5 15.5h5" />
    </svg>
  ),
  users: (p: IconProps) => (
    <svg {...base} {...p}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <path d="M16 5.5a3 3 0 0 1 0 5.8" />
      <path d="M17 14.2A5.5 5.5 0 0 1 20.5 19" />
    </svg>
  ),
  phone: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M6.5 4h3l1.5 4-2 1.5a11 11 0 0 0 4.5 4.5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A15 15 0 0 1 4.5 6.2 2 2 0 0 1 6.5 4Z" />
    </svg>
  ),
  star: (p: IconProps) => (
    <svg {...base} fill="currentColor" stroke="none" {...p}>
      <path d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19.2l1-5.8-4.3-4.1 5.9-.9L12 3Z" />
    </svg>
  ),
  check: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="m5 12.5 4 4 10-10" />
    </svg>
  ),
  checkCircle: (p: IconProps) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 2.5 2.5L16 9" />
    </svg>
  ),
  arrowRight: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  ),
  chevronDown: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  ),
  menu: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  ),
  close: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  ),
  mapPin: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
  leaf: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M20 4S9 3 6 9s2 11 2 11 9-1 11-7c1.6-4.6 1-9 1-9Z" />
      <path d="M8 16C12 12 16 10 19 5" />
    </svg>
  ),
  home: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M4 11 12 4l8 7" />
      <path d="M6 10v9h12v-9" />
      <path d="M10 19v-5h4v5" />
    </svg>
  ),
  quote: (p: IconProps) => (
    <svg {...base} fill="currentColor" stroke="none" {...p}>
      <path d="M7 7H4v6h3l-1.5 4H8l1.5-4V7H7Zm9 0h-3v6h3l-1.5 4H17l1.5-4V7H16Z" />
    </svg>
  ),
  clock: (p: IconProps) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  ),
  mail: (p: IconProps) => (
    <svg {...base} {...p}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  ),
};

export type IconName = keyof typeof icons;

export function Icon({
  name,
  ...props
}: { name: IconName } & IconProps) {
  const Cmp = icons[name];
  return <Cmp aria-hidden="true" focusable="false" {...props} />;
}

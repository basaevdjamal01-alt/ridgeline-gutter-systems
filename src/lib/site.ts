/**
 * SITE CONFIG — single source of truth for the template.
 * Re-brand the entire website by editing this one file:
 * company name, contact details, service region, trust signals, nav, social.
 */

export const site = {
  name: 'Ridgeline Gutter Systems',
  legalName: 'Ridgeline Gutter Systems LLC',
  tagline: 'Seamless gutters that protect your biggest investment.',
  description:
    'Premium gutter installation, seamless gutters, leaf-guard protection, and professional gutter cleaning. Licensed, insured, and built to protect your home for decades.',
  url: 'https://www.example.com',
  // Default OG/twitter image (place a real file in /public)
  ogImage: '/og.jpg',

  contact: {
    phone: '(651) 382-6898',
    phoneRaw: '+16513826898',
    email: 'gutter.usa.pro@gmail.com',
    addressLine: 'Minnesota, USA',
    city: 'Minnesota',
    state: 'MN',
    zip: '',
  },

  hours: [
    { day: 'Mon–Fri', value: '7:00 AM – 6:00 PM' },
    { day: 'Saturday', value: '8:00 AM – 2:00 PM' },
    { day: 'Sunday', value: 'Closed' },
  ],

  // Regional scope (multi-location SEO)
  region: {
    label: 'Minnesota',
    primaryState: 'Minnesota',
  },

  trust: {
    rating: 4.9,
    reviewCount: 487,
    yearsInBusiness: 18,
    warrantyYears: 25,
    jobsCompleted: '6,500+',
  },

  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    google: 'https://google.com',
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
};

export const mainNav: NavItem[] = [
  {
    label: 'Services',
    href: '/services',
    children: [
      {
        label: 'Gutter Installation',
        href: '/services/gutter-installation',
        description: 'Custom-engineered systems sized to your roof.',
      },
      {
        label: 'Seamless Gutters',
        href: '/services/seamless-gutters',
        description: 'Formed on-site for a leak-free fit.',
      },
      {
        label: 'Gutter Guards',
        href: '/services/gutter-guards',
        description: 'Leaf protection that ends the ladder.',
      },
      {
        label: 'Gutter Cleaning',
        href: '/services/gutter-cleaning',
        description: 'Thorough, photo-documented cleanouts.',
      },
      {
        label: 'Repairs & Drainage',
        href: '/services/repairs',
        description: 'Realignment, resealing, downspout fixes.',
      },
    ],
  },
  { label: 'Why Us', href: '/why-us' },
  { label: 'Projects', href: '/projects' },
  { label: 'Service Areas', href: '/service-areas' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'About', href: '/about' },
];

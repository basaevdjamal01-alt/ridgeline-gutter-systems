/**
 * CONTENT LAYER — all marketing copy & structured data.
 * Editable without touching components. Swap these arrays per client.
 */

import type { IconName } from '@/components/icons';

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  icon: IconName;
  tagline: string;
  excerpt: string;
  features: string[];
  // Longer-form content for the detail page
  intro: string;
  benefits: { title: string; body: string }[];
};

export const services: Service[] = [
  {
    slug: 'gutter-installation',
    title: 'Gutter Installation',
    shortTitle: 'Installation',
    icon: 'channel',
    tagline: 'Custom-engineered for your roofline',
    excerpt:
      'New gutter systems sized to your roof’s exact pitch and square footage — so water goes where it should, every storm.',
    features: [
      'Free on-site engineering assessment',
      'K-style & half-round profiles',
      'Hidden hangers every 24"',
      'Written workmanship warranty',
    ],
    intro:
      'A gutter system is only as good as the math behind it. We measure your roof’s pitch, surface area, and rainfall load to spec the right capacity, slope, and downspout placement — then install it to last decades.',
    benefits: [
      {
        title: 'Properly sized capacity',
        body: 'We calculate flow load so heavy storms drain fast instead of overflowing onto your siding and foundation.',
      },
      {
        title: 'Concealed, heavy-duty hangers',
        body: 'Hidden hangers anchored every 24 inches keep runs rigid and clean-looking — no sagging, no visible spikes.',
      },
      {
        title: 'Color-matched, baked-on finish',
        body: 'Dozens of finishes that resist fade and chalking, chosen to complement your trim and roof.',
      },
    ],
  },
  {
    slug: 'seamless-gutters',
    title: 'Seamless Gutters',
    shortTitle: 'Seamless',
    icon: 'ruler',
    tagline: 'Formed on-site, leak-free by design',
    excerpt:
      'Continuous gutters rolled to length right at your home — eliminating the seams where ordinary gutters fail and leak.',
    features: [
      'Custom-formed at your property',
      'Aluminum, steel & copper options',
      'Fewer joints, fewer leaks',
      'Clean, architectural appearance',
    ],
    intro:
      'Sectional gutters fail at their seams. We bring a professional forming machine to your home and roll each run as one continuous piece — dramatically reducing leak points and giving a crisp, custom look.',
    benefits: [
      {
        title: 'Virtually no seams',
        body: 'Joints only occur at corners and downspouts, so there are far fewer places for leaks to start.',
      },
      {
        title: 'Premium material choices',
        body: 'From durable aluminum to architectural copper that develops a beautiful living patina.',
      },
      {
        title: 'Tailored to the inch',
        body: 'Because we form on-site, every run matches your home exactly — no awkward factory lengths.',
      },
    ],
  },
  {
    slug: 'gutter-guards',
    title: 'Gutter Guards',
    shortTitle: 'Guards',
    icon: 'shield',
    tagline: 'End the ladder for good',
    excerpt:
      'Micro-mesh and surface-tension guards that keep leaves and debris out while letting water flow freely.',
    features: [
      'Stainless micro-mesh systems',
      'Keeps pests & nests out',
      'Reduces ice-dam buildup',
      'Backed by manufacturer warranty',
    ],
    intro:
      'The best gutters still clog if they’re open to the sky. Our guard systems keep debris out and water in — so you can stop climbing ladders twice a year and trust your gutters to just work.',
    benefits: [
      {
        title: 'Clog-free flow',
        body: 'Micro-mesh blocks leaves, shingle grit, and seeds while channeling water in at high volume.',
      },
      {
        title: 'Critter-proof',
        body: 'Sealed tops stop birds, rodents, and insects from nesting in your gutters.',
      },
      {
        title: 'Less maintenance, longer life',
        body: 'Dry, debris-free gutters resist rust and last significantly longer.',
      },
    ],
  },
  {
    slug: 'gutter-cleaning',
    title: 'Gutter Cleaning',
    shortTitle: 'Cleaning',
    icon: 'droplet',
    tagline: 'Thorough, documented, mess-free',
    excerpt:
      'Complete hand-cleaning and flush of every run and downspout — with before-and-after photos sent to your phone.',
    features: [
      'Full debris removal & flush',
      'Downspout flow test',
      'Before/after photo report',
      'Tarp-protected, tidy cleanup',
    ],
    intro:
      'A real cleaning isn’t a quick scoop. We clear every run by hand, flush each downspout, test the flow, and document the work with photos — so you know exactly what we did and that water is moving freely.',
    benefits: [
      {
        title: 'Hand-cleaned, then flushed',
        body: 'We remove debris by hand and water-test every downspout to confirm clear flow.',
      },
      {
        title: 'Photo-documented',
        body: 'You receive before-and-after photos and notes on any developing issues we spot.',
      },
      {
        title: 'We leave it spotless',
        body: 'We tarp landscaping and haul away all debris — your property looks untouched.',
      },
    ],
  },
  {
    slug: 'repairs',
    title: 'Repairs & Drainage',
    shortTitle: 'Repairs',
    icon: 'wrench',
    tagline: 'Fix the leak, fix the slope',
    excerpt:
      'Resealing, realignment, hanger replacement, and downspout/drainage corrections that solve the root cause.',
    features: [
      'Leak sealing & joint repair',
      'Slope & pitch correction',
      'Downspout & extension fixes',
      'Fascia & soffit assessment',
    ],
    intro:
      'Overflowing or leaking gutters usually point to a fixable root cause: wrong slope, failed seals, or undersized downspouts. We diagnose and correct the actual problem instead of patching symptoms.',
    benefits: [
      {
        title: 'Correct the slope',
        body: 'We re-pitch runs so water actually travels to the downspouts instead of pooling.',
      },
      {
        title: 'Stop the leaks',
        body: 'Professional resealing and joint repair end the drips that rot fascia and siding.',
      },
      {
        title: 'Move water away',
        body: 'Downspout extensions and drainage tie-ins keep water away from your foundation.',
      },
    ],
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  body: string;
  icon: IconName;
};

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Free On-Site Assessment',
    body: 'We inspect your roofline, measure load and pitch, and listen to the problems you’re seeing — then give a clear, written estimate.',
    icon: 'clipboard',
  },
  {
    number: '02',
    title: 'Custom Engineering',
    body: 'We spec capacity, slope, downspout count, and finish — a system designed for your home, not a one-size-fits-all kit.',
    icon: 'ruler',
  },
  {
    number: '03',
    title: 'Precision Installation',
    body: 'Our trained installation crews form and install on-site, protecting your landscaping and leaving the site spotless.',
    icon: 'channel',
  },
  {
    number: '04',
    title: 'Final Walk & Warranty',
    body: 'We water-test the system, walk it with you, and back the workmanship with a clear written warranty.',
    icon: 'shield',
  },
];

export type Stat = { value: string; label: string };

export const differentiators: { title: string; body: string; icon: IconName }[] =
  [
    {
      title: 'Trained installation crews',
      body: 'Every job is handled by trained installers who take pride in the details and respect your property.',
      icon: 'users',
    },
    {
      title: 'Written workmanship warranty',
      body: 'We stand behind our installs with a clear written workmanship warranty.',
      icon: 'shield',
    },
    {
      title: 'On-site seamless forming',
      body: 'We roll gutters to length at your home for a leak-resistant, custom fit.',
      icon: 'ruler',
    },
    {
      title: 'Upfront, written pricing',
      body: 'Detailed estimates with no pressure and no surprise charges on the invoice.',
      icon: 'clipboard',
    },
  ];

export type CustomerExpectation = {
  title: string;
  body: string;
  icon: IconName;
};

export const customerExpectations: CustomerExpectation[] = [
  {
    title: 'Clear written estimates',
    body: 'Upfront pricing with no pressure — you know what is included before work begins.',
    icon: 'clipboard',
  },
  {
    title: 'Clean, respectful job sites',
    body: 'We protect landscaping, work neatly, and leave your property tidy when we finish.',
    icon: 'home',
  },
  {
    title: 'Photo-documented work',
    body: 'Important steps are documented so you can see what was done and why it matters.',
    icon: 'checkCircle',
  },
  {
    title: 'Proper water-flow solutions',
    body: 'Systems are engineered for pitch, capacity, and drainage — not just a quick install.',
    icon: 'droplet',
  },
  {
    title: 'Fast communication',
    body: 'Questions get answered promptly, with clear next steps from estimate through completion.',
    icon: 'phone',
  },
  {
    title: 'Professional finish',
    body: 'Seamless lines, secure hangers, and a polished look that complements your home.',
    icon: 'shield',
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  location: string;
  rating: number;
  service: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'After two storms with overflowing gutters, they re-engineered the whole system. Heavy rain last week and not a single drip. Crew was on time, tidy, and genuinely kind.',
    name: 'Marcus T.',
    location: 'Maple Grove',
    rating: 5,
    service: 'Gutter Installation',
  },
  {
    quote:
      'The seamless copper gutters look incredible on our 1920s home. They color-matched everything and you can’t even see the hangers. Worth every penny.',
    name: 'Diane & Robert P.',
    location: 'Minneapolis',
    rating: 5,
    service: 'Seamless Gutters',
  },
  {
    quote:
      'I’ll never clean gutters again. The mesh guards have been flawless through a full autumn of oak leaves. Quote was clear and they didn’t upsell me.',
    name: 'Priya K.',
    location: 'Eagan',
    rating: 5,
    service: 'Gutter Guards',
  },
  {
    quote:
      'They sent photos of every downspout before and after. Found a separated joint I never would have noticed and fixed it on the spot. This is how a service company should run.',
    name: 'Greg H.',
    location: 'Woodbury',
    rating: 5,
    service: 'Gutter Cleaning',
  },
  {
    quote:
      'Foundation guy told me my gutters were dumping water at the corner of the house. GUTTER FLOW MASTER re-sloped and added extensions — basement’s been bone dry since.',
    name: 'Allison W.',
    location: 'Bloomington',
    rating: 5,
    service: 'Repairs & Drainage',
  },
  {
    quote:
      'From the estimate to the final walk-through, everything was professional. The written warranty gave us real peace of mind. Highly recommend.',
    name: 'The Nguyen Family',
    location: 'Plymouth',
    rating: 5,
    service: 'Gutter Installation',
  },
];

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: 'How much do new gutters cost?',
    answer:
      'Most residential gutter installations fall within a range based on linear footage, material (aluminum, steel, or copper), the number of stories, and downspout count. Because we form seamless gutters on-site, we provide a precise, written quote after a free assessment — no guesswork and no obligation.',
  },
  {
    question: 'Do gutter guards really work?',
    answer:
      'Quality micro-mesh guards dramatically reduce clogs from leaves, seeds, and shingle grit while letting water flow through at high volume. They’re not “zero maintenance,” but they eliminate the twice-a-year ladder routine for most homes and extend the life of your gutters.',
  },
  {
    question: 'How often should gutters be cleaned?',
    answer:
      'For most homes, twice a year — late spring and late fall. Homes surrounded by mature trees may need quarterly cleanings. If you have guards installed, an annual inspection is usually enough.',
  },
  {
    question: 'Are you licensed and insured?',
    answer:
      'Yes. We are fully licensed and carry both liability and workers’ compensation insurance. We’re happy to provide certificates on request, and our installers are trained installation crews focused on quality workmanship.',
  },
  {
    question: 'What kind of warranty do you offer?',
    answer:
      'We back our installations with a written workmanship warranty, in addition to manufacturer warranties on materials and guard systems. We’ll walk you through exactly what’s covered before any work begins.',
  },
  {
    question: 'How long does an installation take?',
    answer:
      'Most single-family homes are completed in a single day. Larger homes, copper systems, or jobs that include guards and drainage work may take a bit longer. We’ll give you a clear timeline in your estimate.',
  },
];

export type ServiceArea = { city: string; note: string };

export const serviceAreas: ServiceArea[] = [
  { city: 'Minneapolis', note: 'Headquarters & primary service area' },
  { city: 'Saint Paul', note: 'Same-week scheduling' },
  { city: 'Bloomington', note: 'Same-week scheduling' },
  { city: 'Brooklyn Park', note: 'Full service' },
  { city: 'Plymouth', note: 'Full service' },
  { city: 'Maple Grove', note: 'Full service' },
  { city: 'Woodbury', note: 'Full service' },
  { city: 'Eagan', note: 'Full service' },
  { city: 'Eden Prairie', note: 'Full service' },
  { city: 'Coon Rapids', note: 'Full service' },
  { city: 'Burnsville', note: 'Full service' },
  { city: 'Blaine', note: 'Full service' },
];

export type Project = {
  title: string;
  location: string;
  service: string;
  summary: string;
  stat: string;
  accent: 'copper' | 'steel';
  sky: 'dawn' | 'day' | 'dusk';
};

export const projects: Project[] = [
  {
    title: 'Example: Seamless Copper Profile',
    location: 'Minnesota residential',
    service: 'Seamless Copper',
    summary:
      'Example of a custom half-round copper gutter run formed on-site to match period-style architecture.',
    stat: 'Example project type',
    accent: 'copper',
    sky: 'dusk',
  },
  {
    title: 'Example: K-Style + Guards',
    location: 'Minnesota residential',
    service: 'Installation + Guards',
    summary:
      'Example of a full K-style aluminum system with micro-mesh guards on a multi-plane roofline.',
    stat: 'Example project type',
    accent: 'steel',
    sky: 'day',
  },
  {
    title: 'Example: Drainage Correction',
    location: 'Minnesota residential',
    service: 'Repairs & Drainage',
    summary:
      'Example of re-pitched runs and downspout routing to move water away from the foundation.',
    stat: 'Example project type',
    accent: 'copper',
    sky: 'dawn',
  },
  {
    title: 'Example: Seamless Aluminum Upgrade',
    location: 'Minnesota residential',
    service: 'Seamless Gutters',
    summary:
      'Example of replacing sectional gutters with seamless aluminum and matched downspouts.',
    stat: 'Example project type',
    accent: 'steel',
    sky: 'day',
  },
  {
    title: 'Example: Guard Retrofit',
    location: 'Minnesota residential',
    service: 'Gutter Guards',
    summary:
      'Example of a micro-mesh guard retrofit for homes with heavy leaf coverage.',
    stat: 'Example project type',
    accent: 'copper',
    sky: 'day',
  },
  {
    title: 'Example: Concealed Hanger Install',
    location: 'Minnesota residential',
    service: 'Seamless Gutters',
    summary:
      'Example of a tight-tolerance seamless install with concealed hangers on masonry or trim.',
    stat: 'Example project type',
    accent: 'steel',
    sky: 'dusk',
  },
];

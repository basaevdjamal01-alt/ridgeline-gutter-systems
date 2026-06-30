import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/sections/PageHero';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { WhyUs } from '@/components/sections/WhyUs';
import { CtaBand } from '@/components/sections/CtaBand';
import { ContactBanner } from '@/components/sections/ContactBanner';
import { Icon, type IconName } from '@/components/icons';
import { RevealGroup, RevealItem } from '@/components/motion/Reveal';

export const metadata: Metadata = {
  title: 'Gutter Services',
  description:
    'Custom 5" and 6" seamless K-Style gutters, professional installation, gutter guards, cleaning, and repairs — all handled by our own trained crews across Minnesota.',
  alternates: { canonical: '/services' },
};

type ServiceCard = {
  href: string;
  icon: IconName;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

const cards: ServiceCard[] = [
  {
    href: '/services/seamless-gutters',
    icon: 'channel',
    title: 'Seamless K-Style Gutters',
    subtitle: 'Custom 5" & 6" Aluminum Systems',
    description:
      'Continuous aluminum gutters custom-formed at your home in 5" and 6" K-style profiles — engineered for a flawless, leak-free fit.',
    features: [
      'Custom formed on-site',
      'Seamless construction',
      'Precision fit every home',
    ],
    cta: 'Explore Seamless',
    featured: true,
  },
  {
    href: '/services/gutter-installation',
    icon: 'home',
    title: 'Gutter Installation',
    subtitle: 'Professional New System Installation',
    description:
      'Complete new gutter systems engineered to your roofline and fastened to move water exactly where it should go.',
    features: ['New gutter systems', 'Correct pitch', 'Premium fasteners'],
    cta: 'Explore Installation',
  },
  {
    href: '/services/gutter-guards',
    icon: 'shield',
    title: 'Gutter Guards',
    subtitle: 'Keep Leaves Out',
    description:
      'Micro-mesh protection that blocks leaves and debris while letting water flow freely — so you can leave the ladder behind.',
    features: ['Leaf protection', 'Better water flow', 'Less maintenance'],
    cta: 'Explore Guards',
  },
  {
    href: '/services/gutter-cleaning',
    icon: 'droplet',
    title: 'Gutter Cleaning',
    subtitle: 'Professional Seasonal Cleaning',
    description:
      'Thorough seasonal hand-cleaning and downspout flushing, documented with a before-and-after inspection.',
    features: [
      'Complete debris removal',
      'Downspout flushing',
      'Before & after inspection',
    ],
    cta: 'Explore Cleaning',
  },
  {
    href: '/services/repairs',
    icon: 'wrench',
    title: 'Repairs & Drainage',
    subtitle: 'Leak & Water Flow Solutions',
    description:
      'Targeted leak repairs, re-pitching, and downspout corrections that solve the root cause of poor drainage.',
    features: ['Leak repairs', 'Drainage correction', 'Downspout replacement'],
    cta: 'Explore Repairs',
  },
  {
    href: '/contact',
    icon: 'clipboard',
    title: 'Free Inspection & Estimate',
    subtitle: 'No-Obligation On-Site Assessment',
    description:
      'Not sure what you need? We inspect your roofline, measure pitch and load, then give you a clear, written quote.',
    features: ['Roofline & pitch check', 'Written estimate', 'Same-week scheduling'],
    cta: 'Book Inspection',
  },
];

const cardHover =
  'transition-all duration-300 ease-out-expo hover:-translate-y-2 ' +
  'ring-1 ring-transparent hover:ring-copper-300/50 ' +
  'hover:shadow-[0_2px_4px_rgba(22,24,29,0.05),0_24px_50px_-16px_rgba(176,112,60,0.40)]';

export default function ServicesPage() {
  return (
    <>
      {/* 1. Services hero */}
      <PageHero
        eyebrow="Our Services"
        title="Premium gutter solutions built to last"
        lead='We specialize in custom 5" and 6" seamless K-Style gutter systems, professional installation, gutter protection, cleaning and repairs throughout Minnesota.'
        crumbs={[{ label: 'Services' }]}
      />

      {/* 2. Six premium service cards */}
      <Section tone="bone">
        <Container>
          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
              <RevealItem key={card.href} className="h-full">
                <Link
                  href={card.href}
                  className={
                    'group relative flex h-full flex-col overflow-hidden rounded-2xl bg-bone p-7 shadow-soft ' +
                    (card.featured
                      ? 'border border-copper-300 '
                      : 'border border-sand ') +
                    cardHover
                  }
                >
                  {card.featured && (
                    <span className="absolute right-5 top-5 z-10 inline-flex items-center gap-1 rounded-full bg-copper-gradient px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-bone shadow-copper">
                      <Icon name="star" className="h-3 w-3" />
                      Main
                    </span>
                  )}

                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-6 -top-6 text-copper-500/[0.07] transition-transform duration-500 ease-out-expo group-hover:scale-110"
                  >
                    <Icon name={card.icon} className="h-40 w-40" />
                  </div>

                  <span className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-limestone text-copper-600 transition-all duration-300 ease-out-expo group-hover:rotate-6 group-hover:bg-copper-gradient group-hover:text-bone">
                    <Icon name={card.icon} className="h-7 w-7" />
                  </span>

                  <h2 className="relative mt-5 text-h3">{card.title}</h2>
                  <p className="relative mt-1 text-sm font-semibold uppercase tracking-wide text-copper-600">
                    {card.subtitle}
                  </p>
                  <p className="relative mt-3 text-graphite-600">
                    {card.description}
                  </p>

                  <ul className="relative mt-5 space-y-2.5">
                    {card.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm text-graphite-700"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-copper-gradient text-bone">
                          <Icon name="check" className="h-3.5 w-3.5" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="relative mt-auto pt-7">
                    <span className="inline-flex items-center gap-2 rounded-full border border-sand px-4 py-2 text-sm font-semibold text-graphite-900 transition-colors duration-300 group-hover:border-copper-300 group-hover:bg-limestone">
                      {card.cta}
                      <Icon
                        name="arrowRight"
                        className="h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* 3. Why homeowners choose Ridgeline */}
      <WhyUs />

      {/* 4. CTA section */}
      <CtaBand />

      {/* 5. Contact banner (6. Footer is global, rendered by the layout) */}
      <ContactBanner />
    </>
  );
}

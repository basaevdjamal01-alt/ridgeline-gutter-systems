import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Icon, type IconName } from '@/components/icons';
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/Reveal';
import { site } from '@/lib/site';
import { telHref } from '@/lib/utils';

type ServiceCard = {
  slug: string;
  icon: IconName;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
};

/** Shared hover treatment: 8px lift, stronger shadow, soft gold border glow. */
const cardHover =
  'transition-all duration-300 ease-out-expo hover:-translate-y-2 ' +
  'ring-1 ring-transparent hover:ring-copper-300/50 ' +
  'hover:shadow-[0_2px_4px_rgba(22,24,29,0.05),0_24px_50px_-16px_rgba(176,112,60,0.40)]';

const featured: ServiceCard = {
  slug: 'seamless-gutters',
  icon: 'channel',
  title: 'Seamless K-Style Gutters',
  subtitle: 'Custom 5" & 6" Aluminum Systems',
  description:
    'Continuous aluminum gutters custom-formed at your home in 5" and 6" K-style profiles — engineered for a flawless, leak-free fit on every roofline.',
  features: [
    'Custom formed on-site',
    'Seamless construction',
    'Precision fit every home',
  ],
};

const cards: ServiceCard[] = [
  {
    slug: 'gutter-installation',
    icon: 'home',
    title: 'Gutter Installation',
    subtitle: 'Professional New System Installation',
    description:
      'Complete new gutter systems engineered to your roofline and fastened to move water exactly where it should go.',
    features: ['New gutter systems', 'Correct pitch', 'Premium fasteners'],
  },
  {
    slug: 'gutter-guards',
    icon: 'shield',
    title: 'Gutter Guards',
    subtitle: 'Keep Leaves Out',
    description:
      'Micro-mesh protection that blocks leaves and debris while letting water flow freely — so you can leave the ladder behind.',
    features: ['Leaf protection', 'Better water flow', 'Less maintenance'],
  },
  {
    slug: 'gutter-cleaning',
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
  },
  {
    slug: 'repairs',
    icon: 'wrench',
    title: 'Repairs & Drainage',
    subtitle: 'Leak & Water Flow Solutions',
    description:
      'Targeted leak repairs, re-pitching, and downspout corrections that solve the root cause of poor drainage.',
    features: ['Leak repairs', 'Drainage correction', 'Downspout replacement'],
  },
];

function FeatureList({
  items,
  tone = 'dark',
}: {
  items: string[];
  tone?: 'dark' | 'light';
}) {
  return (
    <ul className="space-y-2.5">
      {items.map((feature) => (
        <li
          key={feature}
          className={
            tone === 'light'
              ? 'flex items-start gap-2.5 text-sm text-bone/80'
              : 'flex items-start gap-2.5 text-sm text-graphite-700'
          }
        >
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-copper-gradient text-bone">
            <Icon name="check" className="h-3.5 w-3.5" />
          </span>
          {feature}
        </li>
      ))}
    </ul>
  );
}

function LearnMore({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  return (
    <span
      className={
        'inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors duration-300 ' +
        (tone === 'light'
          ? 'border-bone/20 text-bone group-hover:border-copper-300 group-hover:bg-bone/5'
          : 'border-sand text-graphite-900 group-hover:border-copper-300 group-hover:bg-limestone')
      }
    >
      Learn More
      <Icon
        name="arrowRight"
        className="h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
      />
    </span>
  );
}

export function ServicesGrid() {
  return (
    <Section tone="bone" id="services">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Our Services"
          title="Premium Gutter Solutions Built To Last"
          lead='We specialize in custom 5" and 6" seamless K-Style gutter systems, professional installation, gutter protection, cleaning and repairs throughout Minnesota, Wisconsin, and North Dakota.'
        />

        <div className="mt-14 space-y-6">
          {/* Featured — main service */}
          <Reveal>
            <Link
              href={`/services/${featured.slug}`}
              className={
                'group relative block overflow-hidden rounded-2xl border border-copper-300 ' +
                'bg-gradient-to-br from-bone via-bone to-limestone p-8 shadow-soft lg:p-10 ' +
                cardHover
              }
            >
              <div className="grid gap-8 lg:grid-cols-[1.25fr_1fr] lg:items-center">
                {/* Left — copy */}
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-copper-gradient px-3 py-1 text-xs font-semibold uppercase tracking-wider text-bone shadow-copper">
                    <Icon name="star" className="h-3.5 w-3.5" />
                    Main Service
                  </span>

                  <div className="mt-5 flex items-center gap-4">
                    <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-copper-gradient text-bone shadow-copper transition-transform duration-300 ease-out-expo group-hover:rotate-6">
                      <Icon name={featured.icon} className="h-8 w-8" />
                    </span>
                    <div>
                      <h3 className="text-h2">{featured.title}</h3>
                      <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-copper-600">
                        {featured.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 max-w-xl text-graphite-600">
                    {featured.description}
                  </p>

                  <div className="mt-6">
                    <FeatureList items={featured.features} />
                  </div>

                  <div className="mt-7">
                    <LearnMore />
                  </div>
                </div>

                {/* Right — showcase panel (zooms on hover) */}
                <div className="relative flex min-h-[240px] flex-col justify-between overflow-hidden rounded-xl bg-graphite-gradient texture-grain p-6 text-bone">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-10 -top-12 text-copper-500/20 transition-transform duration-500 ease-out-expo group-hover:scale-110"
                  >
                    <Icon name="channel" className="h-56 w-56" />
                  </div>

                  <span className="relative flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-copper-300">
                    <span className="channel-rule" aria-hidden />
                    K-Style Profile
                  </span>

                  <div className="relative mt-auto flex gap-3">
                    {['5', '6'].map((size) => (
                      <span
                        key={size}
                        className="flex flex-1 flex-col items-center rounded-lg border border-bone/15 bg-bone/[0.06] py-4 backdrop-blur-sm"
                      >
                        <span className="font-display text-3xl font-semibold leading-none">
                          {size}&quot;
                        </span>
                        <span className="mt-1 text-[0.7rem] uppercase tracking-widest text-bone/55">
                          Profile
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>

          {/* Remaining four services */}
          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((card) => (
              <RevealItem key={card.slug} className="h-full">
                <Link
                  href={`/services/${card.slug}`}
                  className={
                    'group relative flex h-full flex-col overflow-hidden rounded-2xl ' +
                    'border border-sand bg-bone p-7 shadow-soft ' +
                    cardHover
                  }
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-6 -top-6 text-copper-500/[0.07] transition-transform duration-500 ease-out-expo group-hover:scale-110"
                  >
                    <Icon name={card.icon} className="h-40 w-40" />
                  </div>

                  <span className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-limestone text-copper-600 transition-all duration-300 ease-out-expo group-hover:rotate-6 group-hover:bg-copper-gradient group-hover:text-bone">
                    <Icon name={card.icon} className="h-7 w-7" />
                  </span>

                  <h3 className="relative mt-5 text-h3">{card.title}</h3>
                  <p className="relative mt-1 text-sm font-semibold uppercase tracking-wide text-copper-600">
                    {card.subtitle}
                  </p>
                  <p className="relative mt-3 text-graphite-600">
                    {card.description}
                  </p>

                  <div className="relative mt-5">
                    <FeatureList items={card.features} />
                  </div>

                  <div className="relative mt-auto pt-7">
                    <LearnMore />
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        {/* Luxury CTA block */}
        <Reveal>
          <div className="mt-12 overflow-hidden rounded-2xl bg-graphite-gradient texture-grain p-8 text-center text-bone shadow-lift lg:mt-16 lg:p-14">
            <div className="relative mx-auto max-w-2xl">
              <h3 className="text-h2 text-bone">
                Need Help Choosing The Right System?
              </h3>
              <p className="mt-4 text-body-lg text-bone/75">
                Our specialists will recommend the perfect 5&quot; or 6&quot;
                seamless gutter system for your home.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button href="/contact" size="lg">
                  Get Free Estimate
                </Button>
                <Button
                  href={telHref(site.contact.phoneRaw)}
                  variant="inverse"
                  size="lg"
                  icon="phone"
                  iconPosition="left"
                >
                  Call {site.contact.phone}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

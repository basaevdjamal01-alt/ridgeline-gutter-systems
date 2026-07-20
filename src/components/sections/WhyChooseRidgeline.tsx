import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Icon, type IconName } from '@/components/icons';
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/Reveal';
import { site } from '@/lib/site';
import { telHref } from '@/lib/utils';

type Feature = {
  icon: IconName;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: 'channel',
    title: 'Seamless On-Site Manufacturing',
    description:
      'Custom 5" and 6" gutters formed at your home for a perfect fit.',
  },
  {
    icon: 'shield',
    title: 'Premium Materials',
    description:
      'High-quality aluminum systems built for Upper Midwest weather.',
  },
  {
    icon: 'users',
    title: 'Experienced Installation',
    description: 'Precision installation focused on long-term performance.',
  },
  {
    icon: 'mapPin',
    title: 'Honest Local Service',
    description: 'Clear communication, fair pricing, and reliable workmanship.',
  },
];

const badges = [
  'Fully Licensed',
  'Free Estimates',
  'MN · WI · ND',
  'Fast Response',
];

export function WhyChooseRidgeline() {
  return (
    <Section tone="bone">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Why GUTTER FLOW MASTER"
          title="Why Homeowners Choose GUTTER FLOW MASTER"
          lead="Professional seamless gutter systems installed with craftsmanship, honest pricing, and dependable service throughout Minnesota, Wisconsin, and North Dakota."
        />

        {/* Feature cards */}
        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <RevealItem key={feature.title} className="h-full">
              <div className="group flex h-full flex-col rounded-2xl border border-sand bg-bone p-7 shadow-soft transition-all duration-300 ease-out-expo hover:-translate-y-1.5 hover:border-copper-300 hover:shadow-lift">
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-limestone text-copper-600 transition-all duration-300 ease-out-expo group-hover:rotate-6 group-hover:bg-copper-gradient group-hover:text-bone">
                  <Icon name={feature.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-h3">{feature.title}</h3>
                <p className="mt-3 text-graphite-600">{feature.description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* Trust badges */}
        <Reveal>
          <ul className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-x-9 gap-y-4">
            {badges.map((badge) => (
              <li
                key={badge}
                className="flex items-center gap-2 text-sm font-semibold text-graphite-800"
              >
                <Icon name="checkCircle" className="h-5 w-5 text-copper-500" />
                {badge}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Closing CTA */}
        <Reveal>
          <div className="mt-16 flex flex-col items-center text-center">
            <h3 className="text-h2">Ready to Protect Your Home?</h3>
            <div className="mt-7 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
              <Button href="/contact" size="lg" className="w-full sm:w-auto">
                Get Free Estimate
              </Button>
              <Button
                href={telHref(site.contact.phoneRaw)}
                variant="secondary"
                size="lg"
                icon="phone"
                iconPosition="left"
                className="w-full sm:w-auto"
              >
                Call {site.contact.phone}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

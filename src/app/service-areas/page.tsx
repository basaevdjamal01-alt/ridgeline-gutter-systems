import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CtaBand } from '@/components/sections/CtaBand';
import { Icon } from '@/components/icons';
import { RevealGroup, RevealItem } from '@/components/motion/Reveal';
import { serviceAreas } from '@/content';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Minnesota Gutter Service Areas',
  description:
    'Ridgeline Gutter Systems serves homeowners across Minnesota with seamless gutter installation, guards, cleaning, and repairs. Call to confirm coverage in your city.',
  alternates: { canonical: '/service-areas' },
};

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Where we work"
        title={`Serving ${site.region.label}`}
        lead="Locally owned and operated. If you don’t see your town listed, call us — chances are we cover it."
        crumbs={[{ label: 'Service Areas' }]}
      />

      <Section tone="bone">
        <Container>
          <SectionHeading
            eyebrow="Communities"
            title={`Proudly local to ${site.contact.city}`}
            lead="Real, established service across the surrounding region — not a faceless call center."
          />
          <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((area) => (
              <RevealItem key={area.city}>
                <div className="flex items-start gap-3 rounded-2xl border border-sand bg-bone p-5 shadow-soft">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-limestone text-copper-600">
                    <Icon name="mapPin" className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-graphite-900">
                      {area.city}, {site.contact.state}
                    </h3>
                    <p className="mt-0.5 text-sm text-graphite-500">
                      {area.note}
                    </p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <CtaBand title="Serving your neighborhood — let’s talk" />
    </>
  );
}

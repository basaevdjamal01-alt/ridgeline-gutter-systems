import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Icon } from '@/components/icons';
import { Button } from '@/components/ui/Button';
import { RevealGroup, RevealItem } from '@/components/motion/Reveal';
import { serviceAreas } from '@/content';
import { site } from '@/lib/site';

export function ServiceAreasSection() {
  return (
    <Section tone="graphite">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Service areas"
              tone="light"
              title={`Proudly protecting homes across ${site.region.primaryState}`}
              lead="Based in our home city and serving the surrounding communities with same-week scheduling."
            />
            <div className="mt-8">
              <Button href="/service-areas">View all service areas</Button>
            </div>
          </div>

          <RevealGroup className="grid grid-cols-2 gap-3 sm:grid-cols-2">
            {serviceAreas.slice(0, 8).map((area) => (
              <RevealItem key={area.city}>
                <Link
                  href="/service-areas"
                  className="group flex items-center gap-3 rounded-xl border border-bone/10 bg-bone/[0.04] px-4 py-3.5 transition-colors hover:border-copper-400/40 hover:bg-bone/[0.07]"
                >
                  <Icon
                    name="mapPin"
                    className="h-5 w-5 shrink-0 text-copper-400"
                  />
                  <span className="text-sm font-medium text-bone/90">
                    {area.city}
                  </span>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </Section>
  );
}

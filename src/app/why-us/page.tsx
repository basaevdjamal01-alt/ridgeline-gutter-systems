import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Process } from '@/components/sections/Process';
import { CtaBand } from '@/components/sections/CtaBand';
import { Icon } from '@/components/icons';
import { RevealGroup, RevealItem } from '@/components/motion/Reveal';
import { differentiators } from '@/content';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Why Choose Us',
  description:
    'In-house crews, honest written pricing, on-site seamless forming, and one of the longest workmanship warranties in the region.',
  alternates: { canonical: '/why-us' },
};

const stats = [
  { value: `${site.trust.yearsInBusiness}`, label: 'Years in business' },
  { value: site.trust.jobsCompleted, label: 'Homes protected' },
  { value: `${site.trust.warrantyYears}-yr`, label: 'Workmanship warranty' },
  { value: `${site.trust.rating}★`, label: `${site.trust.reviewCount} reviews` },
];

export default function WhyUsPage() {
  return (
    <>
      <PageHero
        eyebrow="The difference"
        title="A gutter company that actually sweats the details"
        lead={`For ${site.trust.yearsInBusiness} years we’ve done it the same honest way — our own crews, transparent pricing, and a warranty we stand behind.`}
        crumbs={[{ label: 'Why Us' }]}
      />

      {/* Stats band */}
      <Section tone="bone" size="sm">
        <Container>
          <RevealGroup className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((s) => (
              <RevealItem key={s.label}>
                <div className="text-center">
                  <div className="font-display text-5xl font-semibold text-copper-600">
                    {s.value}
                  </div>
                  <div className="mt-2 text-sm uppercase tracking-wide text-graphite-500">
                    {s.label}
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <Section tone="limestone">
        <Container>
          <SectionHeading
            align="center"
            className="items-center"
            eyebrow="What sets us apart"
            title="Built on craftsmanship and trust"
          />
          <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2">
            {differentiators.map((d) => (
              <RevealItem key={d.title}>
                <div className="flex h-full gap-4 rounded-2xl border border-sand bg-bone p-7 shadow-soft">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-copper-gradient text-bone shadow-copper">
                    <Icon name={d.icon} className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-h3">{d.title}</h3>
                    <p className="mt-2 text-graphite-600">{d.body}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <Process />
      <CtaBand />
    </>
  );
}

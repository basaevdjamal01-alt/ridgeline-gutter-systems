import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CtaBand } from '@/components/sections/CtaBand';
import { Icon } from '@/components/icons';
import { Reveal } from '@/components/motion/Reveal';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About GUTTER FLOW MASTER',
  description:
    'Locally focused Minnesota gutter company specializing in seamless K-style gutters, guards, cleaning, and repairs with trained crews and honest pricing.',
  alternates: { canonical: '/about' },
};

const values = [
  {
    icon: 'users' as const,
    title: 'People first',
    body: 'Our crews are trained to do careful, respectful work — and we treat every property like it’s our own.',
  },
  {
    icon: 'clipboard' as const,
    title: 'Honest by default',
    body: 'Clear written quotes, no high-pressure tactics, and no surprise line items on the invoice.',
  },
  {
    icon: 'shield' as const,
    title: 'Built to last',
    body: 'We use quality materials and proven methods so your system performs in Minnesota weather.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Local craftsmen protecting local homes"
        lead="GUTTER FLOW MASTER is a Minnesota-focused gutter company built on careful installation, clear communication, and systems engineered to move water where it should go."
        crumbs={[{ label: 'About' }]}
      />

      <Section tone="bone">
        <Container size="prose">
          <Reveal>
            <div className="space-y-5 text-body-lg text-graphite-700">
              <p>
                {site.name} helps homeowners across {site.region.label} solve
                the same quiet, expensive problem: water going where it
                shouldn&rsquo;t.
              </p>
              <p>
                We&rsquo;re not a national franchise or a lead-generation brand.
                We&rsquo;re a local team that forms seamless gutters at your
                home, stands behind our work with a written warranty, and
                answer the phone when you call.
              </p>
              <p>
                Our promise is simple: do the job right the first time, leave
                your property cleaner than we found it, and treat your home like
                the investment it is.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section tone="limestone">
        <Container>
          <SectionHeading
            align="center"
            className="items-center"
            eyebrow="What we stand for"
            title="Our values"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05}>
                <div className="flex h-full flex-col rounded-2xl border border-sand bg-bone p-7 shadow-soft">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-copper-gradient text-bone shadow-copper">
                    <Icon name={v.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-h3">{v.title}</h3>
                  <p className="mt-2 text-graphite-600">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}

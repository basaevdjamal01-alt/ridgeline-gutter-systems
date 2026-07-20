import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CtaBand } from '@/components/sections/CtaBand';
import { Icon } from '@/components/icons';
import { RevealGroup, RevealItem } from '@/components/motion/Reveal';
import { customerExpectations } from '@/content';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'What Homeowners Can Expect',
  description:
    'Learn what to expect from GUTTER FLOW MASTER — clear estimates, respectful crews, photo-documented work, and professional gutter service across Minnesota, Wisconsin, and North Dakota.',
  alternates: { canonical: '/reviews' },
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="What to expect"
        title="What homeowners can expect from GUTTER FLOW MASTER"
        lead="We focus on honest communication, quality installation, and a professional experience from your first estimate through project completion."
        crumbs={[{ label: 'Reviews' }]}
      />

      <Section tone="bone">
        <Container>
          <SectionHeading
            align="center"
            className="items-center"
            eyebrow="Our standard"
            title="Professional service you can count on"
            lead="These are the standards we hold ourselves to on every gutter project across Minnesota, Wisconsin, and North Dakota — not fabricated customer reviews."
          />

          <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {customerExpectations.map((item) => (
              <RevealItem key={item.title} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-sand bg-bone p-7 shadow-soft">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-copper-gradient text-bone shadow-copper">
                    <Icon name={item.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-h3">{item.title}</h3>
                  <p className="mt-3 text-graphite-600">{item.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-graphite-500">
            When real Google reviews are available, we&rsquo;ll share them here.
            Until then, we&rsquo;d rather be upfront about what we deliver than
            publish placeholder testimonials.
          </p>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}

import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Icon } from '@/components/icons';
import { Button } from '@/components/ui/Button';
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/Reveal';
import { differentiators } from '@/content';
import { site } from '@/lib/site';

export function WhyUs() {
  return (
    <Section tone="limestone">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Editorial column */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <span className="eyebrow flex items-center gap-3">
                <span className="channel-rule" aria-hidden />
                The difference
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-h1">
                Craftsmanship you can see — and a warranty you can hold.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-body-lg text-graphite-600">
                {site.name} helps homeowners across {site.region.label} solve
                the same quiet, expensive problem: water going where it
                shouldn&rsquo;t.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8">
                <Button href="/why-us" variant="secondary">
                  Why homeowners choose us
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Differentiators */}
          <RevealGroup className="grid gap-5 sm:grid-cols-2">
            {differentiators.map((d) => (
              <RevealItem key={d.title}>
                <div className="flex h-full flex-col rounded-2xl border border-sand bg-bone p-7 shadow-soft">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-copper-gradient text-bone shadow-copper">
                    <Icon name={d.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-h3">{d.title}</h3>
                  <p className="mt-2 text-graphite-600">{d.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </Section>
  );
}

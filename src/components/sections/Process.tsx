import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Icon } from '@/components/icons';
import { RevealGroup, RevealItem } from '@/components/motion/Reveal';
import { processSteps } from '@/content';

export function Process() {
  return (
    <Section tone="bone">
      <Container>
        <SectionHeading
          eyebrow="Our process"
          title="Calm, predictable, and done right"
          lead="No surprises and no pressure — just a clear path from first call to a system you can forget about."
        />

        <RevealGroup className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <RevealItem key={step.number}>
              <div className="relative">
                <div className="flex items-center gap-4">
                  <span className="font-display text-5xl font-semibold text-sand">
                    {step.number}
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-limestone text-copper-600">
                    <Icon name={step.icon} className="h-5 w-5" />
                  </span>
                </div>
                <h3 className="mt-5 text-h3">{step.title}</h3>
                <p className="mt-2 text-graphite-600">{step.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}

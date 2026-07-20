import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Icon } from '@/components/icons';
import { RevealGroup, RevealItem } from '@/components/motion/Reveal';
import { customerExpectations } from '@/content';

export function Testimonials() {
  return (
    <Section tone="bone">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="What to expect"
          title="What homeowners can expect from GUTTER FLOW MASTER"
          lead="Every visit is focused on clear communication, respectful work, and a gutter system that performs in Upper Midwest weather across Minnesota, Wisconsin, and North Dakota."
        />

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {customerExpectations.map((item) => (
            <RevealItem key={item.title} className="h-full">
              <div className="group flex h-full flex-col rounded-2xl border border-sand bg-bone p-7 shadow-soft transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:border-copper-300 hover:shadow-lift">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-limestone text-copper-600 transition-all duration-300 ease-out-expo group-hover:rotate-6 group-hover:bg-copper-gradient group-hover:text-bone">
                  <Icon name={item.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-h3">{item.title}</h3>
                <p className="mt-3 text-graphite-600">{item.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}

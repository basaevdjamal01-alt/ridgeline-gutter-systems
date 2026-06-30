import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Icon, type IconName } from '@/components/icons';
import { RevealGroup, RevealItem } from '@/components/motion/Reveal';

const risks: { icon: IconName; title: string; body: string; cost: string }[] = [
  {
    icon: 'home',
    title: 'Foundation damage',
    body: 'Overflowing water pools at the base of your home, eroding soil and cracking the foundation.',
    cost: '$5k–$40k to repair',
  },
  {
    icon: 'droplet',
    title: 'Basement flooding',
    body: 'Water that should drain away instead seeps into basements and crawlspaces, inviting mold.',
    cost: '$10k+ in restoration',
  },
  {
    icon: 'channel',
    title: 'Roof & fascia rot',
    body: 'Backed-up gutters wick moisture into your roofline, rotting fascia, soffit, and sheathing.',
    cost: '$3k–$15k in trim work',
  },
];

export function CostOfFailure() {
  return (
    <Section tone="graphite">
      <Container className="relative">
        <SectionHeading
          eyebrow="Why it matters"
          tone="light"
          title="Bad gutters don’t fail loudly. They fail expensively."
          lead="Your gutters are the drainage system for a six-figure asset. When they underperform, the damage shows up where it costs the most."
        />

        <RevealGroup className="mt-14 grid gap-5 md:grid-cols-3">
          {risks.map((risk) => (
            <RevealItem key={risk.title}>
              <div className="flex h-full flex-col rounded-2xl border border-bone/10 bg-bone/[0.04] p-7 backdrop-blur-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-danger/15 text-copper-300">
                  <Icon name={risk.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-h3 text-bone">{risk.title}</h3>
                <p className="mt-3 flex-1 text-bone/65">{risk.body}</p>
                <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-copper-300">
                  {risk.cost}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <RevealItem>
          <p className="mx-auto mt-12 max-w-2xl text-center text-body-lg text-bone/80">
            A properly engineered gutter system is one of the{' '}
            <span className="text-copper-300">cheapest forms of insurance</span>{' '}
            you can buy for your home.
          </p>
        </RevealItem>
      </Container>
    </Section>
  );
}

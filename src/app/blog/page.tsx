import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { CtaBand } from '@/components/sections/CtaBand';
import { Icon } from '@/components/icons';
import { RevealGroup, RevealItem } from '@/components/motion/Reveal';

export const metadata: Metadata = {
  title: 'Gutter Guides & Tips',
  description:
    'Practical, no-nonsense guides on gutter maintenance, guards, costs, and protecting your home from water damage.',
  alternates: { canonical: '/blog' },
};

const posts = [
  {
    title: 'How often should you really clean your gutters?',
    category: 'Maintenance',
    readTime: '5 min read',
    excerpt:
      'The honest answer depends on your trees, your roof, and your climate. Here’s a simple way to decide.',
  },
  {
    title: 'Are gutter guards worth the money?',
    category: 'Guards',
    readTime: '6 min read',
    excerpt:
      'We break down the real pros, cons, and costs so you can decide if guards make sense for your home.',
  },
  {
    title: '7 warning signs your gutters are failing',
    category: 'Repairs',
    readTime: '4 min read',
    excerpt:
      'From peeling paint to pooling water, these are the red flags worth acting on before they get expensive.',
  },
  {
    title: 'Seamless vs. sectional gutters: which is better?',
    category: 'Installation',
    readTime: '7 min read',
    excerpt:
      'A clear comparison of cost, durability, appearance, and where each option actually makes sense.',
  },
  {
    title: 'How gutters protect your foundation',
    category: 'Home Protection',
    readTime: '5 min read',
    excerpt:
      'The surprising connection between your gutters and the most expensive part of your home.',
  },
  {
    title: 'Copper gutters: are they worth the investment?',
    category: 'Materials',
    readTime: '6 min read',
    excerpt:
      'They’re beautiful and long-lasting — but right for every home? Here’s what to weigh.',
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Guides & tips"
        title="Smart, simple gutter advice"
        lead="Straight answers to the questions homeowners actually ask — written by the crews who do the work."
        crumbs={[{ label: 'Blog' }]}
      />

      <Section tone="bone">
        <Container>
          <RevealGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <RevealItem key={post.title}>
                <article className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-sand bg-bone shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <div className="relative aspect-[16/10] overflow-hidden bg-graphite-gradient">
                    <div className="absolute inset-0 bg-grid opacity-10" />
                    <span className="absolute left-4 top-4 rounded-full bg-copper-gradient px-3 py-1 text-xs font-semibold uppercase tracking-wide text-bone">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-1.5 text-xs text-graphite-500">
                      <Icon name="clock" className="h-3.5 w-3.5" />
                      {post.readTime}
                    </div>
                    <h2 className="mt-3 text-h3 leading-snug group-hover:text-copper-700">
                      {post.title}
                    </h2>
                    <p className="mt-3 flex-1 text-graphite-600">
                      {post.excerpt}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-graphite-900">
                      Read article
                      <Icon
                        name="arrowRight"
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <CtaBand title="Have a question we didn’t cover?" />
    </>
  );
}

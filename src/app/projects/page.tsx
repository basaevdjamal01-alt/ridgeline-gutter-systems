import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/sections/PageHero';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { CtaBand } from '@/components/sections/CtaBand';
import { Icon } from '@/components/icons';
import { HouseVisual } from '@/components/visuals/HouseVisual';
import { RevealGroup, RevealItem } from '@/components/motion/Reveal';
import { projects } from '@/content';
import { site } from '@/lib/site';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Projects & Gallery',
  description:
    'A look at recent gutter installations, seamless copper work, guard systems, and drainage corrections across the region.',
  alternates: { canonical: '/projects' },
};

const tags = [
  'All projects',
  'Seamless',
  'Copper',
  'Guards',
  'Repairs & Drainage',
];

export default function ProjectsPage() {
  const [featured, ...rest] = projects;

  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Craftsmanship, home by home"
        lead="Every roofline is different. Here’s a sample of the systems we’ve engineered — and the water problems we’ve put an end to."
        crumbs={[{ label: 'Projects' }]}
      >
        <div className="flex flex-wrap gap-6">
          {[
            { value: site.trust.jobsCompleted, label: 'Homes protected' },
            { value: `${site.trust.yearsInBusiness} yrs`, label: 'In business' },
            { value: `${site.trust.rating}★`, label: 'Avg. rating' },
          ].map((s) => (
            <div key={s.label} className="border-l border-bone/15 pl-4">
              <div className="font-display text-2xl font-semibold text-bone">
                {s.value}
              </div>
              <div className="text-xs uppercase tracking-wide text-bone/55">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </PageHero>

      <Section tone="bone">
        <Container>
          {/* Filter chips (visual) */}
          <div className="mb-10 flex flex-wrap gap-2">
            {tags.map((t, i) => (
              <span
                key={t}
                className={cn(
                  'rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                  i === 0
                    ? 'border-transparent bg-graphite-900 text-bone'
                    : 'border-sand text-graphite-600 hover:border-copper-300 hover:text-copper-600',
                )}
              >
                {t}
              </span>
            ))}
          </div>

          <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* Featured */}
            {featured && (
              <RevealItem className="sm:col-span-2 lg:row-span-2">
                <ProjectCard project={featured} index={0} featured />
              </RevealItem>
            )}
            {rest.map((p, i) => (
              <RevealItem key={p.title}>
                <ProjectCard project={p} index={i + 1} />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <CtaBand title="Want results like these on your home?" />
    </>
  );
}

function ProjectCard({
  project,
  index,
  featured = false,
}: {
  project: (typeof projects)[number];
  index: number;
  featured?: boolean;
}) {
  return (
    <article
      className={cn(
        'group relative h-full overflow-hidden rounded-2xl border border-sand bg-graphite-900 shadow-soft transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:shadow-lift',
        featured ? 'min-h-[420px] lg:min-h-full' : 'min-h-[300px]',
      )}
    >
      {/* Visual */}
      <div className="absolute inset-0 transition-transform duration-700 ease-out-expo group-hover:scale-105">
        <HouseVisual
          seed={`proj-${index}`}
          accent={project.accent}
          sky={project.sky}
          variant={index}
          className="h-full w-full"
        />
      </div>

      {/* Legibility gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-graphite-900 via-graphite-900/40 to-transparent" />

      {/* Service tag */}
      <span className="absolute left-5 top-5 z-10 rounded-full bg-bone/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-bone backdrop-blur-md">
        {project.service}
      </span>

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-6">
        <h2
          className={cn(
            'font-display font-semibold text-bone',
            featured ? 'text-3xl' : 'text-xl',
          )}
        >
          {project.title}
        </h2>
        <p className="mt-1.5 flex items-center gap-1.5 text-sm text-bone/70">
          <Icon name="mapPin" className="h-4 w-4 text-copper-400" />
          {project.location}
        </p>

        {featured && (
          <p className="mt-3 max-w-md text-bone/75">{project.summary}</p>
        )}

        <div className="mt-4 flex items-center justify-between border-t border-bone/10 pt-4">
          <span className="text-sm font-medium text-copper-300">
            {project.stat}
          </span>
          <span className="flex items-center gap-1.5 text-sm font-semibold text-bone opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            View details
            <Icon name="arrowRight" className="h-4 w-4" />
          </span>
        </div>
      </div>

      <Link href="/contact" className="absolute inset-0 z-20" aria-label={project.title} />
    </article>
  );
}

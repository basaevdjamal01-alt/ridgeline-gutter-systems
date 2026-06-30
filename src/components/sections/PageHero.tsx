import type { ReactNode } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/motion/Reveal';
import { Icon } from '@/components/icons';

export type Crumb = { label: string; href?: string };

/** Standard inner-page header: graphite band, breadcrumb, eyebrow, title, lead. */
export function PageHero({
  eyebrow,
  title,
  lead,
  crumbs = [],
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  crumbs?: Crumb[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-graphite-gradient text-bone texture-grain">
      <div className="absolute inset-0 bg-grid opacity-[0.05]" aria-hidden />
      <div
        className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-copper-500/15 blur-[120px]"
        aria-hidden
      />
      <Container className="relative pb-16 pt-36 sm:pb-20 sm:pt-40">
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-bone/55">
              <li>
                <Link href="/" className="hover:text-copper-300">
                  Home
                </Link>
              </li>
              {crumbs.map((c) => (
                <li key={c.label} className="flex items-center gap-1.5">
                  <Icon name="chevronDown" className="h-3.5 w-3.5 -rotate-90" />
                  {c.href ? (
                    <Link href={c.href} className="hover:text-copper-300">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-bone/80">{c.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {eyebrow && (
          <Reveal>
            <span className="eyebrow flex items-center gap-3 text-copper-300">
              <span className="channel-rule" aria-hidden />
              {eyebrow}
            </span>
          </Reveal>
        )}
        <Reveal delay={0.05}>
          <h1 className="mt-5 max-w-3xl text-display font-medium">{title}</h1>
        </Reveal>
        {lead && (
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-2xl text-body-lg text-bone/70">{lead}</p>
          </Reveal>
        )}
        {children && <div className="mt-8">{children}</div>}
      </Container>
    </section>
  );
}

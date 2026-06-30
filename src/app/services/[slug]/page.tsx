import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PageHero } from '@/components/sections/PageHero';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CtaBand } from '@/components/sections/CtaBand';
import { Faq } from '@/components/sections/Faq';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/icons';
import { RevealGroup, RevealItem } from '@/components/motion/Reveal';
import { services } from '@/content';
import { site } from '@/lib/site';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.excerpt,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHero
        eyebrow={service.tagline}
        title={service.title}
        lead={service.intro}
        crumbs={[
          { label: 'Services', href: '/services' },
          { label: service.title },
        ]}
      >
        <Button href="/contact">Get a free estimate</Button>
      </PageHero>

      <Section tone="bone">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="The benefits"
                title={`Why our ${service.shortTitle.toLowerCase()} work is different`}
              />
              <RevealGroup className="mt-10 space-y-5">
                {service.benefits.map((b) => (
                  <RevealItem key={b.title}>
                    <div className="flex gap-4 rounded-2xl border border-sand bg-bone p-6 shadow-soft">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-copper-gradient text-bone shadow-copper">
                        <Icon name="checkCircle" className="h-6 w-6" />
                      </span>
                      <div>
                        <h3 className="text-h3">{b.title}</h3>
                        <p className="mt-2 text-graphite-600">{b.body}</p>
                      </div>
                    </div>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-2xl border border-sand bg-limestone p-7">
                <h3 className="text-h3">What’s included</h3>
                <ul className="mt-5 space-y-3">
                  {service.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-graphite-700"
                    >
                      <Icon
                        name="check"
                        className="mt-1 h-4 w-4 shrink-0 text-copper-500"
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 border-t border-sand pt-6">
                  <p className="text-sm text-graphite-600">
                    Free, no-obligation assessment with a written quote.
                  </p>
                  <Button href="/contact" className="mt-4 w-full">
                    Book Your Estimate
                  </Button>
                  <a
                    href={`tel:${site.contact.phoneRaw}`}
                    className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold text-graphite-700 hover:text-copper-600"
                  >
                    <Icon name="phone" className="h-4 w-4" />
                    {site.contact.phone}
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      {/* Cross-sell */}
      <Section tone="limestone" size="sm">
        <Container>
          <SectionHeading eyebrow="Explore more" title="Other services" />
          <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((o) => (
              <RevealItem key={o.slug}>
                <Link
                  href={`/services/${o.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-sand bg-bone p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-copper-300 hover:shadow-lift"
                >
                  <Icon
                    name={o.icon}
                    className="h-7 w-7 text-copper-600"
                  />
                  <h3 className="mt-4 text-lg font-semibold">{o.title}</h3>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-graphite-900">
                    View
                    <Icon
                      name="arrowRight"
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <Faq />
      <CtaBand />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: service.title,
            description: service.excerpt,
            provider: { '@type': 'HomeAndConstructionBusiness', name: site.legalName },
            areaServed: site.region.label,
          }),
        }}
      />
    </>
  );
}

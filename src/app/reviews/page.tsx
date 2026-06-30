import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { StarRating } from '@/components/ui/StarRating';
import { CtaBand } from '@/components/sections/CtaBand';
import { Icon } from '@/components/icons';
import { RevealGroup, RevealItem } from '@/components/motion/Reveal';
import { testimonials } from '@/content';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Reviews',
  description: `Read why ${site.region.label} homeowners rate us ${site.trust.rating} stars across ${site.trust.reviewCount} reviews.`,
  alternates: { canonical: '/reviews' },
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="Trusted by thousands of homeowners"
        crumbs={[{ label: 'Reviews' }]}
      >
        <div className="flex items-center gap-4 rounded-full border border-bone/10 bg-bone/[0.06] px-6 py-3 backdrop-blur-sm">
          <span className="font-display text-3xl font-semibold text-bone">
            {site.trust.rating}
          </span>
          <div>
            <StarRating rating={site.trust.rating} />
            <p className="text-sm text-bone/60">
              {site.trust.reviewCount} verified reviews
            </p>
          </div>
        </div>
      </PageHero>

      <Section tone="bone">
        <Container>
          <RevealGroup className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
            {[...testimonials, ...testimonials].map((t, i) => (
              <RevealItem key={`${t.name}-${i}`} className="break-inside-avoid">
                <figure className="rounded-2xl border border-sand bg-bone p-7 shadow-soft">
                  <div className="flex items-center justify-between">
                    <StarRating rating={t.rating} />
                    <Icon name="quote" className="h-6 w-6 text-copper-300" />
                  </div>
                  <blockquote className="mt-4 text-graphite-700">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-6 border-t border-sand pt-4">
                    <div className="font-semibold text-graphite-900">
                      {t.name}
                    </div>
                    <div className="text-sm text-graphite-500">
                      {t.location} · {t.service}
                    </div>
                  </figcaption>
                </figure>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}

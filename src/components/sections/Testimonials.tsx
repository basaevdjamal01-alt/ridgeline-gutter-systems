import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StarRating } from '@/components/ui/StarRating';
import { Icon } from '@/components/icons';
import { RevealGroup, RevealItem } from '@/components/motion/Reveal';
import { testimonials } from '@/content';
import { site } from '@/lib/site';

export function Testimonials() {
  return (
    <Section tone="bone">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Reviews"
            title="Homeowners who stopped worrying about water"
            className="max-w-2xl"
          />
          <div className="flex items-center gap-3 rounded-full border border-sand bg-limestone px-5 py-3">
            <StarRating rating={site.trust.rating} />
            <span className="text-sm font-semibold text-graphite-900">
              {site.trust.rating} · {site.trust.reviewCount} reviews
            </span>
          </div>
        </div>

        <RevealGroup className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {testimonials.map((t) => (
            <RevealItem key={t.name} className="break-inside-avoid">
              <figure className="rounded-2xl border border-sand bg-bone p-7 shadow-soft">
                <Icon name="quote" className="h-7 w-7 text-copper-300" />
                <blockquote className="mt-4 text-graphite-700">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-between border-t border-sand pt-5">
                  <div>
                    <div className="font-semibold text-graphite-900">
                      {t.name}
                    </div>
                    <div className="text-sm text-graphite-500">
                      {t.location} · {t.service}
                    </div>
                  </div>
                  <StarRating rating={t.rating} />
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}

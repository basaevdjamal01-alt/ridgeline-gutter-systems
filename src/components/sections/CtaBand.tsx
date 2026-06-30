import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Icon, type IconName } from '@/components/icons';
import { StarRating } from '@/components/ui/StarRating';
import { Reveal } from '@/components/motion/Reveal';
import { site } from '@/lib/site';
import { telHref } from '@/lib/utils';

const reassurances: { icon: IconName; label: string }[] = [
  { icon: 'checkCircle', label: 'Free & no-obligation' },
  { icon: 'clock', label: '24-hour response time' },
  { icon: 'shield', label: 'Licensed & insured' },
];

export function CtaBand({
  title = 'Ready to protect your home the right way?',
  subtitle = 'Book a free, no-obligation on-site estimate. Tell us what’s going on and we’ll respond within 24 hours with a clear, written plan.',
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-copper-gradient text-bone">
      <div className="absolute inset-0 bg-grid opacity-[0.08]" aria-hidden />
      <div
        className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-bone/10 blur-3xl"
        aria-hidden
      />
      <Container className="relative py-section-sm">
        <Reveal>
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <div className="mb-5 flex items-center gap-2 rounded-full bg-bone/15 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
              <StarRating rating={site.trust.rating} starClassName="h-3.5 w-3.5 text-bone" />
              <span>
                {site.trust.rating}/5 from {site.trust.reviewCount}+ homeowners
              </span>
            </div>

            <h2 className="text-h1 text-bone">{title}</h2>
            <p className="mt-5 max-w-2xl text-body-lg text-bone/85">{subtitle}</p>

            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button
                href="/contact"
                variant="inverse"
                size="lg"
                className="w-full sm:w-auto"
              >
                Get My Free Estimate
              </Button>
              <a
                href={telHref(site.contact.phoneRaw)}
                className="inline-flex h-14 w-full items-center justify-center gap-2.5 rounded-lg px-8 text-base font-semibold text-bone ring-1 ring-inset ring-bone/40 transition-colors hover:bg-bone/10 sm:w-auto"
              >
                <Icon name="phone" className="h-5 w-5" />
                {site.contact.phone}
              </a>
            </div>

            <ul className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 border-t border-bone/20 pt-7">
              {reassurances.map((r) => (
                <li
                  key={r.label}
                  className="flex items-center gap-2 text-sm font-medium text-bone/90"
                >
                  <Icon name={r.icon} className="h-5 w-5" />
                  {r.label}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

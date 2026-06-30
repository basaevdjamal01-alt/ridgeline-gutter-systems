import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { EstimateForm } from '@/components/forms/EstimateForm';
import { Icon } from '@/components/icons';
import { site } from '@/lib/site';
import { telHref } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Free Estimate & Contact',
  description:
    'Request a free gutter estimate in Minnesota. Seamless gutters, guards, cleaning, and repairs — call (651) 382-6898 or send your project details online.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Free estimate"
        title="Let’s protect your home"
        lead="Tell us a little about your property and we’ll get back to you within 24 hours with next steps — no pressure, no obligation."
        crumbs={[{ label: 'Contact' }]}
      />

      <Section tone="bone">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            {/* Info column */}
            <div>
              <h2 className="text-h2">Talk to a real person</h2>
              <p className="mt-4 text-body-lg text-graphite-600">
                Prefer to call? We’re happy to answer questions and schedule
                your visit over the phone.
              </p>

              <ul className="mt-8 space-y-5">
                <ContactRow icon="phone" label="Call us">
                  <a
                    href={telHref(site.contact.phoneRaw)}
                    className="text-lg font-semibold text-graphite-900 hover:text-copper-600"
                  >
                    {site.contact.phone}
                  </a>
                </ContactRow>
                <ContactRow icon="mail" label="Email">
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="text-graphite-900 hover:text-copper-600"
                  >
                    {site.contact.email}
                  </a>
                </ContactRow>
                <ContactRow icon="mapPin" label="Visit">
                  <span className="text-graphite-700">
                    {site.contact.addressLine}
                  </span>
                </ContactRow>
                <ContactRow icon="clock" label="Hours">
                  <span className="text-graphite-700">
                    {site.hours.map((h) => (
                      <span key={h.day} className="block">
                        {h.day}: {h.value}
                      </span>
                    ))}
                  </span>
                </ContactRow>
              </ul>

              <div className="mt-8 flex items-center gap-3 rounded-2xl border border-sand bg-limestone p-5">
                <Icon name="shield" className="h-8 w-8 shrink-0 text-copper-600" />
                <p className="text-sm text-graphite-700">
                  {site.trust.licensedInsured} · {site.trust.warranty} ·{' '}
                  {site.trust.customerFocus}.
                </p>
              </div>
            </div>

            {/* Form */}
            <div>
              <EstimateForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: 'phone' | 'mail' | 'mapPin' | 'clock';
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-limestone text-copper-600">
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wide text-stone">
          {label}
        </div>
        <div className="mt-0.5">{children}</div>
      </div>
    </li>
  );
}

import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `Terms for using the ${site.name} website and requesting gutter services in Minnesota, Wisconsin, and North Dakota.`,
  alternates: { canonical: '/terms' },
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        crumbs={[{ label: 'Terms of Service' }]}
      />
      <Section tone="bone">
        <Container size="prose">
          <div className="space-y-6 text-graphite-700">
            <p className="text-sm text-graphite-500">
              Last updated: {new Date().getFullYear()}
            </p>
            <p>
              These terms apply to your use of the {site.name} website and to
              requests for estimates or services from {site.legalName}. By using
              this site, you agree to these terms.
            </p>

            <h2 className="text-h3 text-graphite-900">Website use</h2>
            <p>
              This website is provided for general information about our gutter
              services in Minnesota, Wisconsin, and North Dakota. You agree to
              use the site lawfully and not
              to attempt to disrupt its operation or access systems without
              authorization.
            </p>

            <h2 className="text-h3 text-graphite-900">Estimates and pricing</h2>
            <p>
              Online estimate requests and website content are not binding
              quotes. Final pricing, scope, materials, and scheduling are
              confirmed only after an on-site assessment and written agreement.
              We reserve the right to adjust pricing if site conditions differ
              from the information provided.
            </p>

            <h2 className="text-h3 text-graphite-900">Service appointments</h2>
            <p>
              Appointment times are subject to weather, crew availability, and
              project scope. We will communicate scheduling changes as promptly
              as possible. Access to the work area and accurate property
              information help us complete work safely and efficiently.
            </p>

            <h2 className="text-h3 text-graphite-900">Warranties</h2>
            <p>
              Workmanship and product warranties, if offered, are described in
              your written estimate or service agreement. Website content does
              not replace those documents.
            </p>

            <h2 className="text-h3 text-graphite-900">Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, {site.legalName} is not
              liable for indirect or consequential damages arising from use of
              this website. Our liability for services performed is governed by
              your signed service agreement.
            </p>

            <h2 className="text-h3 text-graphite-900">Changes</h2>
            <p>
              We may update these terms from time to time. Continued use of the
              website after changes are posted constitutes acceptance of the
              updated terms.
            </p>

            <h2 className="text-h3 text-graphite-900">Contact</h2>
            <p>
              Questions about these terms? Email{' '}
              <a
                href={`mailto:${site.contact.email}`}
                className="font-semibold text-copper-600 hover:underline"
              >
                {site.contact.email}
              </a>{' '}
              or call{' '}
              <a
                href={`tel:${site.contact.phoneRaw}`}
                className="font-semibold text-copper-600 hover:underline"
              >
                {site.contact.phone}
              </a>
              .
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}

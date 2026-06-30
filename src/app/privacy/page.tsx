import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `How ${site.name} collects, uses, and protects your information when you request an estimate or contact us.`,
  alternates: { canonical: '/privacy' },
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        crumbs={[{ label: 'Privacy Policy' }]}
      />
      <Section tone="bone">
        <Container size="prose">
          <div className="space-y-6 text-graphite-700">
            <p className="text-sm text-graphite-500">
              Last updated: {new Date().getFullYear()}
            </p>
            <p>
              {site.legalName} (&ldquo;Ridgeline,&rdquo; &ldquo;we,&rdquo;
              &ldquo;us&rdquo;) respects your privacy. This policy explains how
              we handle information when you visit our website or request gutter
              services in Minnesota.
            </p>

            <h2 className="text-h3 text-graphite-900">Information we collect</h2>
            <p>
              When you submit an estimate request or contact us, we may collect
              your name, phone number, email address, city, property details,
              and any message you provide. We may also collect basic technical
              information such as browser type when you use our website.
            </p>

            <h2 className="text-h3 text-graphite-900">How we use your information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Respond to estimate requests and schedule service</li>
              <li>Communicate about your project, pricing, and appointments</li>
              <li>Provide customer support before and after installation</li>
              <li>Improve our website and service experience</li>
            </ul>
            <p>
              We do not sell your personal information. We do not use your
              contact details for unrelated marketing without your consent.
            </p>

            <h2 className="text-h3 text-graphite-900">How we share information</h2>
            <p>
              We may share information only when needed to operate our business
              — for example, with payment processors, email providers, or
              subcontractors directly involved in completing your project. We may
              also disclose information if required by law.
            </p>

            <h2 className="text-h3 text-graphite-900">Data retention</h2>
            <p>
              We retain contact and project information as long as needed to
              provide services, maintain business records, and comply with legal
              obligations.
            </p>

            <h2 className="text-h3 text-graphite-900">Your choices</h2>
            <p>
              You may request access to, correction of, or deletion of personal
              information we hold about you by contacting us using the details
              below. We will respond within a reasonable timeframe.
            </p>

            <h2 className="text-h3 text-graphite-900">Contact</h2>
            <p>
              Questions about this policy? Contact {site.name} at{' '}
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

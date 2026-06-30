import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `How ${site.name} collects, uses, and protects your information.`,
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
          <div className="space-y-5 text-graphite-700">
            <p className="text-sm text-graphite-500">
              Last updated: {new Date().getFullYear()}
            </p>
            <p>
              This is a template privacy policy placeholder. Replace this
              content with your company’s official privacy policy before
              launch.
            </p>
            <h2 className="text-h3 text-graphite-900">Information we collect</h2>
            <p>
              When you request an estimate or contact us, we collect the details
              you provide — such as your name, phone number, email, and property
              address — solely to respond to your request and schedule service.
            </p>
            <h2 className="text-h3 text-graphite-900">How we use it</h2>
            <p>
              We use your information to provide estimates, perform services,
              and communicate with you. We do not sell your personal
              information.
            </p>
            <h2 className="text-h3 text-graphite-900">Contact</h2>
            <p>
              Questions about this policy? Email us at{' '}
              <a
                href={`mailto:${site.contact.email}`}
                className="font-semibold text-copper-600 hover:underline"
              >
                {site.contact.email}
              </a>
              .
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}

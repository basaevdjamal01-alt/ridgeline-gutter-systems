import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `The terms that govern your use of the ${site.name} website.`,
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
          <div className="space-y-5 text-graphite-700">
            <p className="text-sm text-graphite-500">
              Last updated: {new Date().getFullYear()}
            </p>
            <p>
              This is a template terms-of-service placeholder. Replace this
              content with your company’s official terms before launch.
            </p>
            <h2 className="text-h3 text-graphite-900">Use of this site</h2>
            <p>
              By accessing this website you agree to use it for lawful purposes
              only. All content is provided for general information and does not
              constitute a binding quote until confirmed in writing.
            </p>
            <h2 className="text-h3 text-graphite-900">Estimates</h2>
            <p>
              Estimates are provided free of charge and are subject to on-site
              verification. Final pricing is confirmed in your written
              agreement.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}

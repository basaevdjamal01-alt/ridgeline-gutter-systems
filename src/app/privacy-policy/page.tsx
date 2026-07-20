import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/motion/Reveal';
import { Icon } from '@/components/icons';
import { site } from '@/lib/site';

const WEBSITE_URL = 'https://www.gutterflowmaster.com';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Read the Privacy Policy of GUTTER FLOW MASTER. Learn how we collect, use and protect your information.',
  alternates: { canonical: '/privacy-policy' },
};

/** A single numbered policy block: gold number badge + subtle gold left border. */
function PolicySection({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-l-2 border-copper-500/25 pl-5 sm:pl-7">
      <div className="flex items-center gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-copper-gradient text-sm font-semibold text-bone shadow-copper">
          {number}
        </span>
        <h2 className="font-display text-xl font-semibold tracking-tight text-graphite-900 sm:text-[1.4rem]">
          {title}
        </h2>
      </div>
      <div className="mt-4 space-y-4 leading-relaxed text-graphite-700">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      {/* Hero — dark premium band, high-contrast title, compact spacing */}
      <section className="relative overflow-hidden bg-graphite-gradient text-bone texture-grain">
        <div className="absolute inset-0 bg-grid opacity-[0.05]" aria-hidden />
        <div
          className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-copper-500/15 blur-[120px]"
          aria-hidden
        />
        <Container className="relative pb-12 pt-32 sm:pb-16 sm:pt-36">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-bone/55">
              <li>
                <Link href="/" className="hover:text-copper-300">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-1.5">
                <Icon name="chevronDown" className="h-3.5 w-3.5 -rotate-90" />
                <span className="text-bone/80">Privacy Policy</span>
              </li>
            </ol>
          </nav>

          <Reveal>
            <span className="eyebrow flex items-center gap-3 text-copper-300">
              <span className="channel-rule" aria-hidden />
              Legal
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-bone sm:text-5xl">
              Privacy Policy
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-bone/15 bg-bone/[0.06] px-4 py-1.5 text-sm text-bone/75">
              <Icon name="clock" className="h-4 w-4 text-copper-300" />
              Last updated: {lastUpdated}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Content — soft neutral backdrop with a centered premium card */}
      <section className="bg-limestone py-section-sm">
        <Container className="max-w-[62rem]">
          <Reveal>
            <div className="rounded-2xl border border-sand bg-bone p-6 shadow-lift sm:p-10 lg:p-14">
              <p className="leading-relaxed text-graphite-700">
                {site.name} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
                &ldquo;our&rdquo;) respects your privacy and is committed to
                protecting the personal information you share with us. This
                Privacy Policy explains what information we collect, how we use
                it, and the choices you have when you visit our website or
                request our gutter services in Minnesota, Wisconsin, and North
                Dakota.
              </p>

              <div className="mt-10 space-y-10">
                <PolicySection number={1} title="Information We Collect">
                  <p>
                    When you contact us or submit an estimate request, we may
                    collect the following information:
                  </p>
                  <ul className="list-disc space-y-2.5 pl-5 marker:text-copper-500">
                    <li>Name</li>
                    <li>Phone number</li>
                    <li>Email address</li>
                    <li>ZIP code</li>
                    <li>
                      Information submitted through our estimate request forms,
                      including details about your property and the services you
                      are interested in.
                    </li>
                  </ul>
                </PolicySection>

                <PolicySection number={2} title="How We Use Your Information">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc space-y-2.5 pl-5 marker:text-copper-500">
                    <li>Respond to estimate requests.</li>
                    <li>
                      Contact customers about their projects and appointments.
                    </li>
                    <li>
                      Provide gutter installation, replacement, and repair
                      services.
                    </li>
                    <li>Improve our customer service and website experience.</li>
                    <li>
                      Send marketing communications, only when you have
                      permitted us to do so.
                    </li>
                  </ul>
                </PolicySection>

                <PolicySection number={3} title="Information Sharing">
                  <p>
                    {site.name} does <strong>not</strong> sell your personal
                    information. We only share your information with trusted
                    service providers when it is necessary to operate our
                    business and deliver our services to you. We may also
                    disclose information when required to do so by law.
                  </p>
                </PolicySection>

                <PolicySection number={4} title="Cookies">
                  <p>
                    Our website may use cookies and analytics tools to improve
                    your browsing experience, understand how visitors use our
                    site, and enhance the services we provide. You can control
                    or disable cookies through your browser settings, though
                    some parts of the website may not function as intended if
                    cookies are disabled.
                  </p>
                </PolicySection>

                <PolicySection number={5} title="Data Security">
                  <p>
                    We use reasonable technical and organizational security
                    measures to protect your personal information against
                    unauthorized access, loss, or misuse. While no method of
                    transmission over the internet is completely secure, we take
                    appropriate steps to safeguard the information you provide.
                  </p>
                </PolicySection>

                <PolicySection number={6} title="Third-Party Services">
                  <p>
                    Our website may use third-party services to measure
                    performance and deliver relevant advertising. These may
                    include:
                  </p>
                  <ul className="list-disc space-y-2.5 pl-5 marker:text-copper-500">
                    <li>Google Analytics</li>
                    <li>Google Ads</li>
                    <li>Meta Pixel</li>
                    <li>TikTok Pixel</li>
                  </ul>
                  <p>
                    These providers may collect information in accordance with
                    their own privacy policies. We encourage you to review their
                    policies to understand how they handle your data.
                  </p>
                </PolicySection>

                <PolicySection number={7} title="Your Rights">
                  <p>
                    You may request access to, correction of, or deletion of the
                    personal information we hold about you. To make a request,
                    please contact us using the details below, and we will
                    respond within a reasonable timeframe.
                  </p>
                </PolicySection>

                <PolicySection number={8} title="Contact Information">
                  <p>
                    If you have any questions about this Privacy Policy or how we
                    handle your information, please contact us:
                  </p>
                  <div className="mt-2 rounded-xl border border-sand bg-limestone/70 p-5 sm:p-6">
                    <dl className="space-y-4">
                      <div className="flex flex-col gap-0.5 sm:flex-row sm:items-center sm:gap-3">
                        <dt className="w-24 shrink-0 text-sm font-semibold uppercase tracking-wide text-graphite-500">
                          Company
                        </dt>
                        <dd className="font-medium text-graphite-900">
                          {site.name}
                        </dd>
                      </div>
                      <div className="flex flex-col gap-0.5 sm:flex-row sm:items-center sm:gap-3">
                        <dt className="w-24 shrink-0 text-sm font-semibold uppercase tracking-wide text-graphite-500">
                          Email
                        </dt>
                        <dd>
                          <a
                            href={`mailto:${site.contact.email}`}
                            className="font-semibold text-copper-600 hover:text-copper-700 hover:underline"
                          >
                            {site.contact.email}
                          </a>
                        </dd>
                      </div>
                      <div className="flex flex-col gap-0.5 sm:flex-row sm:items-center sm:gap-3">
                        <dt className="w-24 shrink-0 text-sm font-semibold uppercase tracking-wide text-graphite-500">
                          Phone
                        </dt>
                        <dd>
                          <a
                            href={`tel:${site.contact.phoneRaw}`}
                            className="font-semibold text-copper-600 hover:text-copper-700 hover:underline"
                          >
                            {site.contact.phone}
                          </a>
                        </dd>
                      </div>
                      <div className="flex flex-col gap-0.5 sm:flex-row sm:items-center sm:gap-3">
                        <dt className="w-24 shrink-0 text-sm font-semibold uppercase tracking-wide text-graphite-500">
                          Website
                        </dt>
                        <dd>
                          <a
                            href={WEBSITE_URL}
                            className="font-semibold text-copper-600 hover:text-copper-700 hover:underline"
                          >
                            {WEBSITE_URL}
                          </a>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </PolicySection>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

'use client';

import { useState } from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Icon } from '@/components/icons';
import { faqs as defaultFaqs, type Faq } from '@/content';
import { cn } from '@/lib/utils';

export function Faq({ items = defaultFaqs }: { items?: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section tone="bone">
      <Container size="prose">
        <SectionHeading
          align="center"
          eyebrow="Questions, answered"
          title="Everything you’re wondering about gutters"
          className="items-center"
        />

        <div className="mt-12 divide-y divide-sand border-y border-sand">
          {items.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="text-lg font-medium text-graphite-900">
                    {faq.question}
                  </span>
                  <span
                    className={cn(
                      'flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-limestone text-copper-600 transition-transform duration-300',
                      isOpen && 'rotate-180 bg-copper-gradient text-bone',
                    )}
                  >
                    <Icon name="chevronDown" className="h-4 w-4" />
                  </span>
                </button>
                <div
                  className={cn(
                    'grid transition-all duration-300 ease-out-expo',
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 pr-12 text-graphite-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: items.map((f) => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: { '@type': 'Answer', text: f.answer },
            })),
          }),
        }}
      />
    </Section>
  );
}

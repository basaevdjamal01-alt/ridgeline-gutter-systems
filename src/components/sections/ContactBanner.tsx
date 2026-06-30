import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Icon, type IconName } from '@/components/icons';
import { Reveal } from '@/components/motion/Reveal';
import { site } from '@/lib/site';
import { telHref } from '@/lib/utils';

const details: {
  icon: IconName;
  label: string;
  value: string;
  href?: string;
}[] = [
  {
    icon: 'phone',
    label: 'Call us',
    value: site.contact.phone,
    href: telHref(site.contact.phoneRaw),
  },
  {
    icon: 'mail',
    label: 'Email',
    value: site.contact.email,
    href: `mailto:${site.contact.email}`,
  },
  { icon: 'mapPin', label: 'Service area', value: site.contact.addressLine },
  {
    icon: 'clock',
    label: 'Hours',
    value: `${site.hours[0].day} · ${site.hours[0].value}`,
  },
];

/** Premium contact banner — dark card on a light section, above the footer. */
export function ContactBanner() {
  return (
    <Section tone="bone" size="sm">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-graphite-gradient texture-grain p-8 text-bone shadow-lift lg:p-12">
            <div
              className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-copper-500/15 blur-[120px]"
              aria-hidden
            />
            <div className="relative grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div>
                <span className="eyebrow flex items-center gap-3 text-copper-300">
                  <span className="channel-rule" aria-hidden />
                  Get in touch
                </span>
                <h2 className="mt-5 text-h2 text-bone">
                  Talk to a gutter specialist today
                </h2>
                <p className="mt-4 max-w-md text-body-lg text-bone/70">
                  Questions about 5&quot; versus 6&quot;, guards, or a leak you
                  can&rsquo;t place? We&rsquo;re happy to help — no pressure, no
                  obligation.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button href="/contact" size="lg">
                    Get Free Estimate
                  </Button>
                  <Button
                    href={telHref(site.contact.phoneRaw)}
                    variant="inverse"
                    size="lg"
                    icon="phone"
                    iconPosition="left"
                  >
                    Call {site.contact.phone}
                  </Button>
                </div>
              </div>

              <ul className="grid gap-4 sm:grid-cols-2">
                {details.map((d) => (
                  <li
                    key={d.label}
                    className="rounded-xl border border-bone/10 bg-bone/[0.04] p-5"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-copper-gradient text-bone shadow-copper">
                      <Icon name={d.icon} className="h-5 w-5" />
                    </span>
                    <p className="mt-3 text-xs uppercase tracking-widest text-bone/50">
                      {d.label}
                    </p>
                    {d.href ? (
                      <a
                        href={d.href}
                        className="mt-1 block font-medium text-bone transition-colors hover:text-copper-300"
                      >
                        {d.value}
                      </a>
                    ) : (
                      <p className="mt-1 font-medium text-bone">{d.value}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

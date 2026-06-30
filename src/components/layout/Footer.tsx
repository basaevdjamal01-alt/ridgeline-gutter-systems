import Link from 'next/link';
import { Logo } from '@/components/layout/Logo';
import { Icon } from '@/components/icons';
import { Container } from '@/components/ui/Container';
import { mainNav, site } from '@/lib/site';
import { services } from '@/content';
import { telHref } from '@/lib/utils';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-graphite-gradient text-bone texture-grain">
      <Container className="relative py-section-sm max-lg:pb-28">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo className="text-bone" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-bone/65">
              {site.description}
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-bone/80">
              <Icon name="shield" className="h-4 w-4 text-copper-400" />
              Licensed &amp; Insured · {site.trust.warrantyYears}-Year Warranty
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-bone/50">
              Services
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-bone/75 transition-colors hover:text-copper-300"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-bone/50">
              Company
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {mainNav
                .filter((i) => i.href !== '/services')
                .map((i) => (
                  <li key={i.href}>
                    <Link
                      href={i.href}
                      className="text-bone/75 transition-colors hover:text-copper-300"
                    >
                      {i.label}
                    </Link>
                  </li>
                ))}
              <li>
                <Link
                  href="/contact"
                  className="text-bone/75 transition-colors hover:text-copper-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-bone/50">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-bone/75">
              <li>
                <a
                  href={telHref(site.contact.phoneRaw)}
                  className="flex items-center gap-2.5 transition-colors hover:text-copper-300"
                >
                  <Icon name="phone" className="h-4 w-4 text-copper-400" />
                  {site.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-copper-300"
                >
                  <Icon name="mail" className="h-4 w-4 text-copper-400" />
                  {site.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="mapPin" className="mt-0.5 h-4 w-4 text-copper-400" />
                <span>{site.contact.addressLine}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="clock" className="mt-0.5 h-4 w-4 text-copper-400" />
                <span>
                  {site.hours.map((h) => (
                    <span key={h.day} className="block">
                      {h.day}: {h.value}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-bone/10 pt-7 text-xs text-bone/50 sm:flex-row">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-bone/80">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-bone/80">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

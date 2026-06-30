'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Logo } from '@/components/layout/Logo';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/icons';
import { mainNav, site } from '@/lib/site';
import { cn, telHref } from '@/lib/utils';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const solid = scrolled || open;
  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Utility bar — collapses on scroll */}
      <div
        className={cn(
          'hidden overflow-hidden border-b border-bone/10 bg-graphite-900 text-bone/70 transition-all duration-300 ease-out-expo lg:block',
          solid ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100',
        )}
      >
        <div className="mx-auto flex h-10 max-w-content items-center justify-between px-8 text-xs">
          <div className="flex items-center gap-2">
            <Icon name="shield" className="h-3.5 w-3.5 text-copper-400" />
            <span>{site.trust.localService}</span>
            <span className="mx-2 text-bone/25">|</span>
            <span className="text-bone/60">
              Licensed &amp; Insured · {site.region.label}
            </span>
          </div>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-bone/60">
              <Icon name="clock" className="h-3.5 w-3.5" />
              {site.hours[0]?.value}
            </span>
            <a
              href={telHref(site.contact.phoneRaw)}
              className="flex items-center gap-1.5 font-medium text-bone transition-colors hover:text-copper-300"
            >
              <Icon name="phone" className="h-3.5 w-3.5" />
              {site.contact.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main bar — premium dark navbar with a subtle vertical gradient */}
      <div className="border-b border-white/[0.05] bg-[linear-gradient(180deg,#0b0d10_0%,#13171c_100%)] text-bone shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
        <div className="mx-auto flex h-[76px] max-w-content items-center justify-between gap-6 px-6 lg:h-[92px] lg:px-8">
          <Link
            href="/"
            aria-label={`${site.name} home`}
            className="header-logo-link flex shrink-0 items-center py-0 pl-1 pr-4 lg:pl-2 lg:pr-6"
          >
            <Logo variant="header" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-2 lg:flex" aria-label="Primary">
            {mainNav.map((item) => {
              const active = isActive(item.href);
              return (
                <div key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    className={cn(
                      'nav-link flex items-center gap-1 px-4 py-2 text-sm font-medium',
                      active ? 'text-copper-300' : 'text-bone/85',
                    )}
                  >
                    {item.label}
                    {item.children && (
                      <Icon
                        name="chevronDown"
                        className="h-3.5 w-3.5 opacity-60 transition-transform duration-200 group-hover:rotate-180"
                      />
                    )}
                  </Link>

                  {item.children && (
                    <div className="invisible absolute left-1/2 top-full -translate-x-1/2 translate-y-1 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      <div className="w-80 overflow-hidden rounded-2xl border border-sand bg-bone p-2 text-graphite-900 shadow-lift">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-limestone"
                          >
                            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-limestone text-copper-600">
                              <Icon name="droplet" className="h-4 w-4" />
                            </span>
                            <span>
                              <span className="block text-sm font-semibold">
                                {child.label}
                              </span>
                              {child.description && (
                                <span className="mt-0.5 block text-xs text-graphite-500">
                                  {child.description}
                                </span>
                              )}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Desktop actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <Button
              href="/contact"
              size="sm"
              className="shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift hover:brightness-110"
            >
              Free Estimate
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="-m-2 rounded-lg p-2 text-bone transition-colors lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'close' : 'menu'} className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden bg-bone text-graphite-900 transition-[max-height] duration-300 ease-out-expo lg:hidden',
          open ? 'max-h-[calc(100vh-76px)] border-b border-sand' : 'max-h-0',
        )}
      >
        <nav
          className="max-h-[calc(100vh-76px)] overflow-y-auto px-6 pb-8 pt-2"
          aria-label="Mobile"
        >
          {mainNav.map((item) => (
            <div key={item.href} className="border-b border-sand py-1">
              <Link
                href={item.href}
                className={cn(
                  'block py-3 text-lg font-medium',
                  isActive(item.href) && 'text-copper-600',
                )}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="grid grid-cols-2 gap-x-3 pb-3">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="py-1.5 text-sm text-graphite-600"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mt-6 flex flex-col gap-3">
            <Button href="/contact" size="lg" className="w-full">
              Get a Free Estimate
            </Button>
            <Button
              href={telHref(site.contact.phoneRaw)}
              variant="secondary"
              size="lg"
              icon="phone"
              iconPosition="left"
              className="w-full"
            >
              Call {site.contact.phone}
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}

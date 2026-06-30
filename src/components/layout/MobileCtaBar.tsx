'use client';

import Link from 'next/link';
import { Icon } from '@/components/icons';
import { site } from '@/lib/site';
import { telHref } from '@/lib/utils';

/** Persistent dual-action bar on mobile: Call + Free Estimate. */
export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-sand bg-bone/95 backdrop-blur-md lg:hidden">
      <div className="grid grid-cols-2 gap-2 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <a
          href={telHref(site.contact.phoneRaw)}
          className="flex h-12 items-center justify-center gap-2 rounded-lg ring-1 ring-inset ring-graphite-900/20 text-sm font-semibold text-graphite-900"
        >
          <Icon name="phone" className="h-4 w-4" />
          Call Now
        </a>
        <Link
          href="/contact"
          className="flex h-12 items-center justify-center gap-2 rounded-lg bg-copper-gradient text-sm font-semibold text-bone shadow-copper"
        >
          Free Estimate
          <Icon name="arrowRight" className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

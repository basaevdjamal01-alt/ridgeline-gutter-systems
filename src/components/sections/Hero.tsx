import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/icons';
import { Reveal } from '@/components/motion/Reveal';
import { HeroBackdrop } from '@/components/sections/HeroBackdrop';
import { site } from '@/lib/site';
import { telHref } from '@/lib/utils';

const trustChips = [
  { icon: 'shield' as const, label: site.trust.licensedInsured },
  { icon: 'checkCircle' as const, label: site.trust.warrantyShort },
  { icon: 'users' as const, label: site.trust.trainedCrews },
];

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[640px] items-center overflow-hidden bg-graphite-900 text-bone lg:min-h-[90vh]">
      {/* Cinematic backdrop built around the real project photo */}
      <HeroBackdrop />

      <div className="relative z-10 mx-auto w-full max-w-content px-6 pb-20 pt-32 sm:pt-36 lg:px-8 lg:pb-24 lg:pt-40">
        <div className="max-w-2xl">
          <Reveal>
            <span className="hero-glass inline-flex items-center gap-2.5 rounded-full border py-1.5 pl-2 pr-4 text-xs font-medium text-bone/90">
              <span className="flex items-center gap-1.5 rounded-full bg-copper-gradient px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-wide text-bone">
                <Icon name="mapPin" className="h-3.5 w-3.5" />
                {site.region.statesShort}
              </span>
              Proudly Serving {site.region.statesText}
            </span>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-7 text-balance text-[2.75rem] font-medium leading-[1.04] tracking-tight text-bone [text-shadow:0_2px_24px_rgba(8,9,12,0.55)] sm:text-[3.5rem] lg:text-[4.25rem]">
              We protect the most
              <br className="hidden sm:block" />{' '}
              <span className="copper-shine">expensive thing</span> you own.
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-bone/80 sm:text-xl">
              Custom-engineered seamless gutters, leaf-guard protection, and
              meticulous cleaning — built to keep your foundation, roof, and
              siding bone-dry for decades.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                href="/contact"
                size="lg"
                className="hero-cta-glow w-full sm:w-auto"
              >
                Get a Free Estimate
              </Button>
              <Button
                href={telHref(site.contact.phoneRaw)}
                variant="inverse"
                size="lg"
                icon="phone"
                iconPosition="left"
                className="w-full sm:w-auto"
              >
                {site.contact.phone}
              </Button>
            </div>
          </Reveal>

          {/* Above-the-fold social proof */}
          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-col gap-5 border-t border-bone/15 pt-7 sm:flex-row sm:items-center sm:gap-7">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-copper-gradient text-bone shadow-copper">
                  <Icon name="shield" className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-bone">{site.trust.customerFocus}</p>
                  <p className="text-xs text-bone/70">{site.trust.localService}</p>
                </div>
              </div>

              <ul className="flex flex-wrap gap-x-5 gap-y-2 sm:border-l sm:border-bone/15 sm:pl-7">
                {trustChips.map((chip) => (
                  <li
                    key={chip.label}
                    className="flex items-center gap-1.5 text-xs font-medium text-bone/85"
                  >
                    <Icon name={chip.icon} className="h-4 w-4 text-copper-400" />
                    {chip.label}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Floating proof badges over the photo */}
      <div className="pointer-events-none absolute bottom-10 right-8 z-10 hidden flex-col items-end gap-3 lg:flex">
        <div className="flex items-center gap-3 rounded-2xl glass-panel px-4 py-3 shadow-lift">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-copper-gradient shadow-copper">
            <Icon name="mapPin" className="h-5 w-5 text-bone" />
          </div>
          <div>
            <div className="font-display text-xl font-semibold leading-none text-bone">
              {site.region.statesShort}
            </div>
            <div className="text-[0.7rem] text-bone/70">Local Service</div>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-2xl glass-panel px-4 py-3 shadow-lift">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-patina-500/30 text-patina-400">
            <Icon name="shield" className="h-5 w-5" />
          </div>
          <div>
            <div className="font-display text-xl font-semibold leading-none text-bone">
              Written
            </div>
            <div className="text-[0.7rem] text-bone/70">Workmanship Warranty</div>
          </div>
        </div>
      </div>
    </section>
  );
}

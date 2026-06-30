import { Icon, type IconName } from '@/components/icons';
import { Container } from '@/components/ui/Container';
import { site } from '@/lib/site';

const credentials: { icon: IconName; value: string; label: string }[] = [
  { icon: 'shield', value: 'Licensed', label: '& Fully Insured' },
  { icon: 'clock', value: site.trust.experience, label: 'Local Expertise' },
  { icon: 'home', value: site.trust.minnesotaHomes, label: 'Residential Focus' },
  {
    icon: 'checkCircle',
    value: site.trust.warrantyShort,
    label: 'Workmanship Coverage',
  },
];

export function TrustBar() {
  return (
    <div className="border-b border-sand bg-bone">
      <Container className="py-6">
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
          {/* Trust headline */}
          <div className="flex items-center gap-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-limestone text-copper-600">
              <Icon name="shield" className="h-5 w-5" />
            </span>
            <div className="text-sm leading-tight">
              <div className="font-semibold text-graphite-900">
                {site.trust.workmanship}
              </div>
              <div className="text-graphite-500">{site.trust.localService}</div>
            </div>
          </div>

          {/* Credentials */}
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 lg:gap-x-10">
            {credentials.map((c) => (
              <li key={c.label} className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-limestone text-copper-600">
                  <Icon name={c.icon} className="h-5 w-5" />
                </span>
                <div className="text-sm leading-tight">
                  <div className="font-semibold text-graphite-900">{c.value}</div>
                  <div className="text-graphite-500">{c.label}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}

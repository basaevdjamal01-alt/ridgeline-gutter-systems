import { Icon, type IconName } from '@/components/icons';
import { Container } from '@/components/ui/Container';
import { StarRating } from '@/components/ui/StarRating';
import { site } from '@/lib/site';

const credentials: { icon: IconName; value: string; label: string }[] = [
  { icon: 'shield', value: 'Licensed', label: '& Fully Insured' },
  { icon: 'clock', value: `${site.trust.yearsInBusiness} Years`, label: 'In Business' },
  { icon: 'home', value: site.trust.jobsCompleted, label: 'Homes Protected' },
  {
    icon: 'checkCircle',
    value: `${site.trust.warrantyYears}-Year`,
    label: 'Workmanship Warranty',
  },
];

export function TrustBar() {
  return (
    <div className="border-b border-sand bg-bone">
      <Container className="py-6">
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
          {/* Rating block */}
          <div className="flex items-center gap-4">
            <div className="text-center">
              <div className="font-display text-3xl font-semibold leading-none text-graphite-900">
                {site.trust.rating}
              </div>
              <StarRating
                rating={site.trust.rating}
                className="mt-1"
                starClassName="h-3.5 w-3.5"
              />
            </div>
            <div className="h-10 w-px bg-sand" />
            <div className="text-sm leading-tight">
              <div className="font-semibold text-graphite-900">
                Excellent on Google
              </div>
              <div className="text-graphite-500">
                Based on {site.trust.reviewCount}+ verified reviews
              </div>
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

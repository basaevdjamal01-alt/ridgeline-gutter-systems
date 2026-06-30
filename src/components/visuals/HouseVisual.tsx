import { cn } from '@/lib/utils';

type Accent = 'copper' | 'steel';
type Sky = 'dawn' | 'day' | 'dusk';

const skies: Record<Sky, [string, string]> = {
  dawn: ['#2b303a', '#3c3530'],
  day: ['#2f3640', '#22252d'],
  dusk: ['#332b3a', '#241f29'],
};

const accents: Record<Accent, [string, string]> = {
  copper: ['#C98A52', '#8A5328'],
  steel: ['#6b7280', '#3a3f4a'],
};

/**
 * Parametric architectural house illustration for project/gallery cards.
 * `seed` keeps SVG gradient ids unique across multiple instances on a page.
 */
export function HouseVisual({
  seed,
  accent = 'copper',
  sky = 'day',
  variant = 0,
  className,
}: {
  seed: string;
  accent?: Accent;
  sky?: Sky;
  variant?: number;
  className?: string;
}) {
  const [s0, s1] = skies[sky];
  const [a0, a1] = accents[accent];
  const gid = (n: string) => `${seed}-${n}`;
  const twoStory = variant % 2 === 0;

  return (
    <div className={cn('relative h-full w-full overflow-hidden', className)}>
      <svg
        viewBox="0 0 400 300"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        role="img"
        aria-label="Stylized illustration of a home with new gutters"
      >
        <defs>
          <linearGradient id={gid('sky')} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={s0} />
            <stop offset="100%" stopColor={s1} />
          </linearGradient>
          <linearGradient id={gid('acc')} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={a0} />
            <stop offset="100%" stopColor={a1} />
          </linearGradient>
          <linearGradient id={gid('roof')} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3A3F4A" />
            <stop offset="100%" stopColor="#22252D" />
          </linearGradient>
        </defs>

        {/* Sky */}
        <rect width="400" height="300" fill={`url(#${gid('sky')})`} />
        <circle cx="320" cy="70" r="120" fill={a0} opacity="0.08" />

        {/* Ground */}
        <rect y="250" width="400" height="50" fill="#1a1d23" />
        <rect y="248" width="400" height="4" fill={a0} opacity="0.25" />

        {/* Main house body */}
        <g>
          {/* gable */}
          <polygon
            points="120,120 215,60 310,120"
            fill={`url(#${gid('roof')})`}
          />
          <polygon points="120,120 215,72 310,120" fill="#11131a" opacity="0.15" />
          {/* body */}
          <rect x="135" y="120" width="160" height="130" fill="#F1EEE8" />
          <rect x="135" y="120" width="160" height="130" fill="#000" opacity="0.03" />
          {/* gutter along eave */}
          <rect x="128" y="118" width="174" height="9" rx="3" fill={`url(#${gid('acc')})`} />
          <rect x="128" y="118" width="174" height="3" fill="#fff" opacity="0.25" />
          {/* downspout */}
          <rect x="289" y="127" width="7" height="120" rx="2" fill={`url(#${gid('acc')})`} />

          {/* windows */}
          <Window x={158} y={150} gid={gid('acc')} />
          <Window x={244} y={150} gid={gid('acc')} />
          {/* door */}
          <rect x="198" y="196" width="34" height="54" rx="3" fill="#2C303A" />
          <rect x="198" y="196" width="34" height="54" rx="3" fill={a0} opacity="0.15" />
          <circle cx="226" cy="224" r="2" fill={a0} />
        </g>

        {/* Optional side wing for two-story variant */}
        {twoStory && (
          <g>
            <polygon points="40,150 92,108 144,150" fill={`url(#${gid('roof')})`} />
            <rect x="55" y="150" width="74" height="100" fill="#E2DDD3" />
            <rect x="50" y="148" width="84" height="8" rx="3" fill={`url(#${gid('acc')})`} />
            <rect x="122" y="156" width="6" height="92" rx="2" fill={`url(#${gid('acc')})`} />
            <Window x={70} y={172} gid={gid('acc')} small />
          </g>
        )}

        {/* foliage hint */}
        <circle cx="350" cy="245" r="26" fill="#324C44" opacity="0.8" />
        <circle cx="372" cy="250" r="18" fill="#3E5E54" opacity="0.7" />
      </svg>
    </div>
  );
}

function Window({
  x,
  y,
  gid,
  small,
}: {
  x: number;
  y: number;
  gid: string;
  small?: boolean;
}) {
  const w = small ? 28 : 34;
  const h = small ? 32 : 38;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="2" fill="#2C303A" />
      <rect
        x={x + 2}
        y={y + 2}
        width={w - 4}
        height={h - 4}
        rx="1"
        fill={`url(#${gid})`}
        opacity="0.35"
      />
      <line
        x1={x + w / 2}
        y1={y}
        x2={x + w / 2}
        y2={y + h}
        stroke="#1a1d23"
        strokeWidth="1.5"
      />
      <line
        x1={x}
        y1={y + h / 2}
        x2={x + w}
        y2={y + h / 2}
        stroke="#1a1d23"
        strokeWidth="1.5"
      />
    </g>
  );
}

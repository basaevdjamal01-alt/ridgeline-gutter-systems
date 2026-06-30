import { cn } from '@/lib/utils';

/**
 * Premium CSS/SVG architectural composition: a home eave with a copper
 * K-style gutter, downspout, flowing water, and soft rainfall.
 * Pure vector — crisp at any size, zero image dependencies.
 */
export function GutterScene({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] border border-bone/12 bg-gradient-to-b from-[#2b303a] to-[#1a1d23] shadow-lift',
        className,
      )}
    >
      {/* Ambient sky glow */}
      <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-copper-500/20 blur-3xl" />
      <div className="absolute inset-0 bg-grid opacity-[0.05]" />

      <svg
        viewBox="0 0 400 500"
        className="absolute inset-0 h-full w-full"
        role="img"
        aria-label="Illustration of a copper gutter and downspout channeling rainwater away from a home"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="roof" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3A3F4A" />
            <stop offset="100%" stopColor="#22252D" />
          </linearGradient>
          <linearGradient id="copper" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#DBA876" />
            <stop offset="38%" stopColor="#B0703C" />
            <stop offset="100%" stopColor="#6F4220" />
          </linearGradient>
          <linearGradient id="copperFace" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C98A52" />
            <stop offset="100%" stopColor="#8A5328" />
          </linearGradient>
          <linearGradient id="wall" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F1EEE8" />
            <stop offset="100%" stopColor="#E2DDD3" />
          </linearGradient>
          <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9BB7CE" stopOpacity="0.0" />
            <stop offset="100%" stopColor="#9BB7CE" stopOpacity="0.55" />
          </linearGradient>
        </defs>

        {/* Roof slope with shingle courses */}
        <polygon points="0,0 400,0 400,118 0,170" fill="url(#roof)" />
        {[28, 58, 88, 118].map((y, i) => (
          <line
            key={y}
            x1="0"
            y1={y + i * 2}
            x2="400"
            y2={y - 8}
            stroke="#11131a"
            strokeOpacity="0.5"
            strokeWidth="2"
          />
        ))}
        <line x1="0" y1="170" x2="400" y2="118" stroke="#0d0f14" strokeWidth="3" />

        {/* Fascia board */}
        <polygon points="0,170 400,118 400,140 0,192" fill="#2C303A" />

        {/* K-style copper gutter */}
        <g>
          <path
            d="M0 192 L400 140 L400 178 Q400 196 382 198 L18 246 Q0 248 0 230 Z"
            fill="url(#copper)"
          />
          {/* top inner lip highlight */}
          <path
            d="M0 192 L400 140 L400 150 L0 202 Z"
            fill="#EAC49B"
            fillOpacity="0.6"
          />
          {/* front face shadow groove */}
          <path
            d="M6 232 L394 184 L394 192 L6 240 Z"
            fill="#5a3a1c"
            fillOpacity="0.55"
          />
        </g>

        {/* Wall */}
        <rect x="0" y="210" width="400" height="290" fill="url(#wall)" />
        {/* lap-siding lines */}
        {Array.from({ length: 9 }).map((_, i) => (
          <line
            key={i}
            x1="0"
            y1={250 + i * 28}
            x2="400"
            y2={250 + i * 28}
            stroke="#D2CABB"
            strokeWidth="1.5"
          />
        ))}

        {/* Downspout (right) */}
        <g>
          {/* elbow from gutter */}
          <path
            d="M330 196 q26 4 30 30 l0 8 -26 0 0 -6 q-2 -12 -16 -16 z"
            fill="url(#copperFace)"
          />
          <rect
            x="332"
            y="226"
            width="28"
            height="252"
            rx="4"
            fill="url(#copperFace)"
          />
          {/* highlight */}
          <rect
            x="336"
            y="226"
            width="6"
            height="252"
            rx="3"
            fill="#EAC49B"
            fillOpacity="0.5"
          />
          {/* straps */}
          <rect x="330" y="300" width="32" height="6" rx="2" fill="#6F4220" />
          <rect x="330" y="404" width="32" height="6" rx="2" fill="#6F4220" />
          {/* water exiting at base */}
          <path
            d="M334 478 q12 14 30 16 -2 8 -16 8 -16 -2 -22 -16z"
            fill="url(#water)"
          />
        </g>

        {/* Water sheet flowing inside the downspout */}
        <rect
          x="340"
          y="226"
          width="12"
          height="252"
          fill="url(#water)"
          opacity="0.5"
        />
      </svg>

      {/* Animated rainfall (HTML overlay, respects reduced motion globally) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {RAIN.map((r, i) => (
          <span
            key={i}
            className="raindrop absolute top-0 h-10 w-px bg-gradient-to-b from-transparent via-bone/30 to-bone/50"
            style={{
              left: `${r.left}%`,
              animationDuration: `${r.dur}s`,
              animationDelay: `${r.delay}s`,
              transform: 'rotate(12deg)',
            }}
          />
        ))}
      </div>
    </div>
  );
}

const RAIN = [
  { left: 8, dur: 1.1, delay: 0 },
  { left: 18, dur: 1.4, delay: 0.4 },
  { left: 27, dur: 1.0, delay: 0.8 },
  { left: 39, dur: 1.5, delay: 0.2 },
  { left: 52, dur: 1.2, delay: 0.6 },
  { left: 63, dur: 1.35, delay: 1.0 },
  { left: 74, dur: 1.05, delay: 0.3 },
  { left: 86, dur: 1.45, delay: 0.7 },
  { left: 94, dur: 1.15, delay: 1.1 },
];

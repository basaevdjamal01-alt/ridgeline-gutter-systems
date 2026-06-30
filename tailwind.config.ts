import type { Config } from 'tailwindcss';

/**
 * Gutter Pro — Design System Tokens
 * "Engineered Craftsmanship": Graphite + Copper + Limestone.
 * All brand decisions live here so the template restyles from one place.
 */
const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        lg: '2rem',
      },
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        // Graphite — authority / dark surfaces & text
        graphite: {
          900: '#16181D',
          800: '#22252D',
          700: '#2C303A',
          600: '#3A3F4A',
          500: '#4A505D',
        },
        // Copper — premium signature accent (used sparingly)
        copper: {
          700: '#8A5328',
          600: '#9C6334',
          500: '#B0703C',
          400: '#C98A52',
          300: '#DBA876',
        },
        // Limestone & Fog — neutrals / breathing room
        bone: '#FBFAF7',
        limestone: '#F1EEE8',
        sand: '#E2DDD3',
        stone: '#9A968D',
        // Patina — trust / eco / success accent
        patina: {
          700: '#324C44',
          500: '#3E5E54',
          400: '#557B6F',
        },
        // Functional
        success: '#3E5E54',
        warning: '#C98A52',
        danger: '#A8412F',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Fluid type scale via clamp()
        overline: ['0.8125rem', { lineHeight: '1', letterSpacing: '0.12em' }],
        'display-lg': [
          'clamp(2.75rem, 1.6rem + 5.4vw, 5.5rem)',
          { lineHeight: '1.02', letterSpacing: '-0.025em' },
        ],
        display: [
          'clamp(2.5rem, 1.6rem + 4vw, 4rem)',
          { lineHeight: '1.05', letterSpacing: '-0.02em' },
        ],
        h1: [
          'clamp(2.25rem, 1.6rem + 2.6vw, 3.25rem)',
          { lineHeight: '1.08', letterSpacing: '-0.02em' },
        ],
        h2: [
          'clamp(1.875rem, 1.4rem + 1.8vw, 2.5rem)',
          { lineHeight: '1.12', letterSpacing: '-0.018em' },
        ],
        h3: [
          'clamp(1.375rem, 1.2rem + 0.7vw, 1.75rem)',
          { lineHeight: '1.2', letterSpacing: '-0.01em' },
        ],
        'body-lg': ['1.1875rem', { lineHeight: '1.65' }],
        body: ['1.0625rem', { lineHeight: '1.6' }],
      },
      spacing: {
        section: 'clamp(4rem, 2.5rem + 7vw, 10rem)',
        'section-sm': 'clamp(3rem, 2rem + 4vw, 6rem)',
      },
      maxWidth: {
        prose: '46rem',
        content: '80rem',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(22, 24, 29, 0.04), 0 8px 24px -12px rgba(22, 24, 29, 0.12)',
        lift: '0 2px 4px rgba(22, 24, 29, 0.05), 0 18px 40px -16px rgba(22, 24, 29, 0.22)',
        copper: '0 8px 24px -8px rgba(176, 112, 60, 0.45)',
        'inner-line': 'inset 0 0 0 1px rgba(226, 221, 211, 0.9)',
      },
      backgroundImage: {
        'copper-gradient':
          'linear-gradient(135deg, #C98A52 0%, #B0703C 55%, #8A5328 100%)',
        'graphite-gradient':
          'linear-gradient(160deg, #22252D 0%, #16181D 100%)',
        'grain':
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'in-out-soft': 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        rain: {
          '0%': { transform: 'translateY(-120%)', opacity: '0' },
          '12%': { opacity: '0.7' },
          '100%': { transform: 'translateY(360%)', opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'flow-down': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(200%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 0.6s ease both',
        marquee: 'marquee 32s linear infinite',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;

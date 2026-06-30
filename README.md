# Ridgeline Gutter Systems — Premium Gutter Website Template

A production-ready, **reusable** marketing website template for gutter
installation & cleaning companies. Built to look like a custom agency build,
designed to be re-branded for any client by editing a single config file.

**Stack:** Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion ·
ESLint · Prettier.

---

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command            | Description                          |
| ------------------ | ------------------------------------ |
| `npm run dev`      | Start the dev server                 |
| `npm run build`    | Production build                     |
| `npm run start`    | Run the production build             |
| `npm run lint`     | Lint with ESLint                     |
| `npm run format`   | Format with Prettier                 |
| `npm run typecheck`| Type-check without emitting          |

---

## Re-branding for a new client (the important part)

Almost everything is data-driven. To customize the site:

1. **`src/lib/site.ts`** — company name, phone, email, address, hours, region,
   trust signals (rating, reviews, warranty), social links, and the main nav.
2. **`src/content/index.ts`** — all marketing copy: services, process steps,
   differentiators, testimonials, FAQs, service areas, and projects.
3. **`tailwind.config.ts`** — the entire design system: color palette
   (Graphite / Copper / Limestone), type scale, spacing, shadows, and motion.
   Change the brand color in one place and it propagates everywhere.
4. **Fonts** — swap `Fraunces` / `Inter` in `src/app/layout.tsx`.
5. **Images** — replace the styled placeholders (before/after, projects, blog,
   OG image at `/public/og.jpg`) with the client’s real photography using
   `next/image`.

No component code changes are required for a standard re-brand.

---

## Architecture

```
src/
  app/                 # App Router routes
    page.tsx           # Homepage (composed of section components)
    services/          # Listing + dynamic [slug] detail pages
    why-us, projects, service-areas, reviews, about, blog, contact
    privacy, terms     # Legal placeholders
    api/contact/       # Lead intake endpoint (wire to email/CRM)
    sitemap.ts, robots.ts, not-found.tsx
    globals.css        # Base layer + design primitives
  components/
    ui/                # Primitives: Button, Container, Section, Card, etc.
    layout/            # Header, Footer, MobileCtaBar, Logo
    sections/          # Homepage + page section blocks
    forms/             # Multi-step EstimateForm
    motion/            # Reveal / RevealGroup (scroll animation)
    icons/             # Custom SVG line-icon set (no icon dependency)
  content/             # Structured marketing content
  lib/                 # site config + utils
```

### Design system

- **Palette:** Graphite (authority) · Copper (premium accent, used sparingly) ·
  Limestone/Bone (neutrals) · Patina (eco/success).
- **Type:** Fraunces (display serif) + Inter (grotesk sans), fluid `clamp()`
  scale.
- **Spacing:** 8px base; section rhythm via `py-section`.
- **Motion:** calm, physics-based reveals; fully respects
  `prefers-reduced-motion`.

### SEO

- Per-page metadata + canonical URLs, Open Graph & Twitter cards.
- JSON-LD: `HomeAndConstructionBusiness` (layout), `Service` (service pages),
  `FAQPage` (FAQ).
- `sitemap.xml` and `robots.txt` generated automatically.
- Update `site.url` in `src/lib/site.ts` so absolute URLs/sitemap are correct.

---

## Production checklist

- [ ] Update `src/lib/site.ts` and `src/content/index.ts` with real data.
- [ ] Set `site.url` to the production domain.
- [ ] Add real photography + `/public/og.jpg` (1200×630).
- [ ] Wire `src/app/api/contact/route.ts` to an email provider / CRM.
- [ ] Add Google Business Profile NAP consistency.
- [ ] Run `npm run build` and `npm run lint` before deploy.

Deploy on [Vercel](https://vercel.com) for zero-config hosting.

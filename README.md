# BinaryBonds — Marketing Site (v2)

**India's bond marketplace, rebuilt for serious investors.**

This is the Next.js 15 marketing site for binarybonds.in — Phase 1A of the v2 rebuild. The full app port (catalog, detail, calculator, admin) follows in Phase 1B.

## What's in here

| Route | Purpose |
|---|---|
| `/` | Landing page — editorial hero, live cashflow demo, pillars, fees comparison, algorithm depth, risk ladder, how-it-works |
| `/pricing` | Transparency-first fees page with worked example. The category-defining transparency move. |
| `/about` | Company manifesto, regulatory positioning, timeline |
| `/how-it-works` | 4-step KYC → discover → settle → earn |
| `/faq` | FAQ accordion with bond / tax / settlement primer + JSON-LD structured data |
| `/research/yield-curve` | G-Sec yield curve teaser (live curve in v1) |
| `/disclaimer` | Risk disclosure & regulatory copy |
| `/sitemap.xml`, `/robots.txt` | SEO scaffolding |

Plus a custom `not-found.tsx` and the global `layout.tsx` with full Open Graph, Twitter, and JSON-LD `FinancialService` + `WebSite` schema.

## Stack

- **Next.js 16.2** (App Router, Turbopack, RSC by default)
- **React 19.2**
- **TypeScript 5.9** (strict)
- **Tailwind CSS 4** with `@theme inline` design tokens in `app/globals.css`
- **Fonts** via `next/font/google`: Fraunces (display, with `opsz`/`SOFT`/`WONK` axes), Instrument Serif (italic), Geist Sans (body), JetBrains Mono (data)
- **Framer Motion** for component-level motion (kept light — see Design Manifesto)
- **Lucide React** for icons (1.5px stroke default)
- **Recharts** for v0 data viz; will move to D3+SVG primitives in v1 for editorial charts

## Design system

Documented in detail at `/home/ubuntu/bmp/design/00_design_language_draft.md`. In short:

- **Editorial-institutional precision** — refined, typographic, restrained. Not Awwwards-bold, not warm-fintech.
- **Color**: warm gold (OKLch) accent on warm cream / ink-black-with-cool-tilt surfaces. Never pure black/white.
- **Type**: Fraunces for display (large, with Wonk axis), Instrument Serif for italic emphasis, Geist Sans for body/UI, JetBrains Mono with tabular figures + slashed zero on every number.
- **Motion**: feedback-only. No carousels, no autoplay video, no parallax decoration.
- **Composition**: editorial (not dashboard). Long-form pages read like research notes.

Color tokens, type scale, spacing, and easings are all defined as CSS custom properties in `app/globals.css` under `@theme inline` and inherit through `:root` (light) / `.dark` (dark).

## Project structure

```
app/                          # Next.js App Router routes
├── layout.tsx                # Root layout — fonts, metadata, JSON-LD, ThemeProvider
├── globals.css               # Design tokens + base styles + utilities
├── page.tsx                  # Landing
├── pricing/page.tsx
├── about/page.tsx
├── how-it-works/page.tsx
├── faq/page.tsx
├── research/yield-curve/page.tsx
├── disclaimer/page.tsx
├── sitemap.ts
├── robots.ts
└── not-found.tsx

components/
├── ui/                       # Primitives — Button, Card, Badge
├── shared/                   # Nav, Footer, ThemeProvider, ThemeToggle, Logo
├── marketing/                # Page-specific — SectionHeader, StatStrip, TrustStrip, Faq
└── data/                     # Charts — CashflowChart, YieldCurveChart

lib/
├── utils.ts                  # cn(), Indian INR formatters, residual-tenure helper
└── finance.ts                # XIRR, duration, convexity, post-tax IRR, sample cashflows
```

## Local development

```bash
pnpm install
pnpm dev          # → http://localhost:3000 (or next available port)
pnpm build        # → production build, type-checks all routes
pnpm lint
```

Theme toggle is in the top nav (and mobile menu). Default theme is dark, persisted to `localStorage["bb-theme"]`.

## Deploying to Vercel

```bash
# Option A — via Vercel CLI (recommended for first deploy)
pnpm dlx vercel@latest          # follow prompts, link the project to your Vercel team

# Option B — via Vercel Dashboard
# Connect this repo, Vercel auto-detects Next.js and deploys on every push.
# Build command:   pnpm build
# Install command: pnpm install
# Output directory: (auto)
```

### Required environment variables (none yet for Phase 1A)

The marketing site is fully static. Phase 1B will add:

- `DATABASE_URL` — MySQL (Drizzle)
- `JWT_SECRET` — session signing
- `RESEND_API_KEY` — email delivery
- `MSG91_AUTH_KEY` — SMS / OTP
- `OPENAI_API_KEY` or LLM provider key
- `CLOUDFRONT_BASE` — image CDN

Add these in Vercel project settings → Environment Variables.

### Domain

Point `binarybonds.in` (apex) and `www.binarybonds.in` to Vercel via the Vercel dashboard. Vercel provisions an automatic Let's Encrypt SSL certificate. The `metadataBase` in `layout.tsx` is already set to `https://binarybonds.in`.

## Performance budgets (Lighthouse targets for Phase 1A)

| Metric | Target | Status |
|---|---|---|
| LCP (4G simulated) | ≤ 1.8s | TBD on first deploy |
| CLS | ≤ 0.05 | clean — no layout shifts in our hero |
| INP | ≤ 200ms | clean — minimal JS |
| TBT | ≤ 200ms | recharts JS dominates; Phase 1B will lazy-load |
| Bundle (first paint) | ≤ 90 KB gzipped | check with `pnpm build` output |

## What's next (Phase 1B preview)

After this marketing site ships, the v2 backbone migration begins:

1. Port Drizzle schema verbatim from existing `extracted/binarybonds/drizzle/`
2. Port tRPC router + auth from existing `server/`
3. Build `(app)` route group with BondListing, BondDetail (per-ISIN SSR with JSON-LD `FinancialProduct`), Calculator, Bond Ladder Builder, Stress Test, Profile
4. Implement the 17 algorithm leapfrog items from `/home/ubuntu/bmp/v2/02_algorithm_leapfrog.md`
5. Cut over from existing Vite app

## Files referenced in this site (research artifacts)

- `/home/ubuntu/bmp/research/synthesis/01_feature_matrix.md` — competitive matrix powering the comparison tables
- `/home/ubuntu/bmp/research/synthesis/02_opportunity_backlog.md` — the 25 leapfrog moves driving every feature on this site
- `/home/ubuntu/bmp/design/00_design_language_draft.md` — design manifesto

## License

Proprietary. © 2026 Binary Capital Pvt Ltd.

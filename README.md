# Ada Psychiatry — Homepage

Next.js 14 (App Router) + TypeScript + Tailwind conversion of the Figma
homepage design (`ADA — Copy`, node `1:459`).

## Getting started

This project was scaffolded by hand in a sandbox without network access, so
`node_modules` isn't installed yet.

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Architecture

- **`app/`** — App Router entry points only (`layout.tsx`, `page.tsx`,
  `globals.css`). `page.tsx` is a thin composition of section components —
  no markup or content logic lives here.
- **`components/layout/`** — `Header` and `Footer`, shared across the (future)
  route tree, not just the homepage.
- **`components/sections/`** — One component per homepage section
  (`Hero`, `TreatmentFocus`, `Services`, etc.), each self-contained and
  independently reusable/testable.
- **`components/ui/`** — Small presentational primitives shared across
  sections (`Button`, `SectionHeading`) so the repeated gold-gradient pill
  CTA and heading treatment are defined once, not copy-pasted ~8 times.
- **`lib/data/`** — All copy, links, and content lists as typed data
  (`treatmentFocus.ts`, `services.ts`, `testimonials.ts`, `process.ts`,
  `states.ts`, `faq.ts`, `images.ts`). Sections `.map()` over this data
  rather than hard-coding repeated markup — adding a 4th treatment focus
  area or a 7th accepted state means editing a data file, not JSX.
- **`lib/types.ts`** — Shared TypeScript interfaces for every content shape
  above.

## Design tokens

Colors, fonts, and the signature gold gradient are defined once in
`tailwind.config.ts` (`gold`, `gold.light`, `gold.rod`, `cream`,
`cream.deep`, `ink`) and `app/globals.css` (`.text-gold-gradient` for the
gradient-filled headline treatment). Components reference these tokens
(`bg-gold-gradient`, `text-ink`, `font-display`) rather than hard-coded hex
values, so a brand tweak is a one-file change.

Fonts (Abhaya Libre for display/headings, Work Sans for body/UI, Montserrat
for the wordmark only) are loaded via `next/font/google` in `app/layout.tsx`
— no external `<link>` tags, no layout shift.

## Known follow-ups before shipping

1. **Image assets are temporary.** `lib/data/images.ts` currently points at
   Figma's short-lived export CDN (~7 day expiry) rather than files in
   `/public`. Download the real assets and swap the constants over — the
   comment at the top of that file explains why it was left this way.
2. **The original Figma frame was a fixed 1440px desktop composition.**
   Every section here was rebuilt with responsive Tailwind layouts
   (flex/grid, `sm:`/`lg:` breakpoints) rather than the absolute-positioned
   output Figma's dev-mode export produces, so it holds up on mobile —
   worth a visual pass against the design at a few breakpoints to confirm
   spacing matches intent, since some values (card widths, grid gaps) were
   interpreted rather than pixel-copied.
3. **CTA `href`s are placeholders (`#`).** Wire these up to the real
   booking flow / routes once they exist.
4. **FAQ** uses native `<details>/<summary>` for a zero-JS accessible
   accordion. If product wants animated open/close, that's a contained
   swap inside `components/sections/FAQ.tsx` only.

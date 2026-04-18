# Pyton SPA — Design Spec

**Date:** 2026-04-18
**Project:** "Pyton med pyton?" — single-page application presenting a NTNU *Eksperter i Team* research project on python farming as a sustainable protein source in Norway.

## Goals

- Deliver a **full working SPA** (all 7 sections) that faculty, fellow students, and stakeholders can open and read end-to-end.
- Convey an **editorial, research-forward aesthetic** using the palette and tone defined in `CLAUDE.md`.
- Keep the architecture simple, typed, and extensible so real content (real numbers, real team data, real hero imagery) can replace placeholders later without structural changes.

## Non-Goals

- No backend, CMS, or data fetching. Content lives in static TypeScript modules.
- No real research data beyond what is already stated in `CLAUDE.md`. Comparison numbers are placeholders marked as TODO.
- No i18n framework — all copy is Norwegian (Bokmål) hard-coded.
- No authentication, analytics, or SSR.

## Stack

| Concern | Choice |
|---|---|
| Framework | Vue 3 (Composition API, `<script setup lang="ts">`) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS, theme extended with project palette |
| Routing | Vue Router in hash mode, anchor-based smooth scroll |
| Animations | `@vueuse/motion` for declarative `v-motion` reveal presets |
| Build | Vite |
| Package manager | npm |
| Fonts | Google Fonts: `Fraunces` (serif, display) + `Inter` (sans, body) |

## Design System

### Color tokens (Tailwind `theme.extend.colors`)

| Token | Hex | Use |
|---|---|---|
| `night-forest` | `#1a2e1a` | Page base background |
| `moss` | `#2d4a2d` | Section accents, card backgrounds |
| `earth` | `#3d2b1f` | Warm contrast panels |
| `parchment` | `#f5f0e8` | Primary text, off-white surfaces |
| `gold` | `#c9a84c` | CTA, links, section dividers, key numbers |

### Typography

- Headings: `Fraunces`, tight tracking, large sizes (`text-5xl` → `text-7xl` for hero).
- Body: `Inter`, `text-base` / `text-lg`, `leading-relaxed`.
- Applied via Tailwind's `font-serif` / `font-sans` utilities (mapped in `tailwind.config.ts`).

### Layout

- Content capped at `max-w-6xl` inside a centered container, sections full-width with their own background tone.
- Generous vertical rhythm (`py-24 md:py-32`) between sections to support the editorial feel.
- `scroll-behavior: smooth` on `<html>`; anchor IDs on each section matching its route hash.

## File & Folder Structure

```
EiT_Pyton/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.ts
├── postcss.config.js
├── src/
│   ├── main.ts
│   ├── App.vue
│   ├── style.css                 # Tailwind directives + global resets
│   ├── assets/
│   │   └── images/               # (empty; placeholders via placehold.co)
│   ├── components/
│   │   ├── NavBar.vue
│   │   ├── HeroSection.vue
│   │   ├── AboutSection.vue
│   │   ├── FindingsSection.vue
│   │   ├── PersonasSection.vue
│   │   ├── ComparisonSection.vue
│   │   ├── ConclusionSection.vue
│   │   └── TeamSection.vue
│   ├── composables/
│   │   └── useReveal.ts          # Thin wrapper around @vueuse/motion presets
│   ├── data/
│   │   ├── findings.ts           # FindingCard[]
│   │   ├── personas.ts           # Persona[]
│   │   ├── team.ts               # TeamMember[]
│   │   └── comparison.ts         # ComparisonRow[]
│   ├── router/
│   │   └── index.ts              # Vue Router, hash mode, scrollBehavior
│   └── types/
│       └── index.ts              # Persona, TeamMember, FindingCard, ComparisonRow
└── docs/
    └── superpowers/
        └── specs/
            └── 2026-04-18-pyton-spa-design.md   # this file
```

## TypeScript Interfaces

```ts
// src/types/index.ts
export interface Persona {
  name: string;
  segment: string;
  percentage: number;
  description: string;
  avatar: string;
}

export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
}

export interface FindingCard {
  icon: string;           // emoji or symbol
  title: string;
  summary: string;
  details: string[];
}

export interface ComparisonMetric {
  icon: string;           // 💧 🌾 🏞️ 💨
  label: string;
  value: string;          // e.g. "4:1" or "~2 000 L"
  unit?: string;
}

export interface ComparisonRow {
  source: string;         // "Pyton" | "Storfe" | "Kylling" | "Svin"
  metrics: ComparisonMetric[];
}
```

## Component Responsibilities

Each component is a self-contained section consuming typed data from `src/data/*`. Components are "dumb" — no data fetching, no routing logic — so they stay easy to read and test visually.

1. **`NavBar.vue`** — Sticky, translucent (`backdrop-blur`) top bar. Left: project title abbreviated. Right: anchor links (`Om`, `Funn`, `Målgruppe`, `Sammenligning`, `Konklusjon`, `Team`). Links scroll-smooth to section IDs.

2. **`HeroSection.vue`** — Full-viewport (`min-h-screen`) hero. Dark background image (placehold.co dark forest placeholder) + gradient overlay. Title in `Fraunces`, subheadline in `Inter`. Gold CTA button "Utforsk funnene" scrolls to `#funn`. Entrance animation via `v-motion`.

3. **`AboutSection.vue`** — Research question pulled out as a large pull-quote. 2–3 paragraphs of context on the 2050 protein challenge, sourced verbatim from `CLAUDE.md`'s framing (no invented stats).

4. **`FindingsSection.vue`** — Three cards, one per sustainability dimension (environment / economy / social), each showing icon, title, summary, and a short bullet list of details. Staggered reveal animation.

5. **`PersonasSection.vue`** — Two persona cards side-by-side on desktop, stacked on mobile. Each card: circular avatar (placehold.co), name, segment label, percentage as a large gold number, description.

6. **`ComparisonSection.vue`** — **Icon grid**. Table-like grid: columns = 💧 water, 🌾 feed (FCR), 🏞️ land, 💨 CO₂. Rows = Python / Beef / Chicken / Pork. Each cell is a large number + unit + the metric icon. Python row gets a subtle gold border for emphasis. Placeholder numbers marked `// TODO: replace with real data` in `data/comparison.ts`.

7. **`ConclusionSection.vue`** — Short, confident summary with a single gold-accented callout: "Teknisk bærekraftig, men kommersielt kun levedyktig som nisjeprodukt på kort sikt."

8. **`TeamSection.vue`** — Grid of 4 placeholder member cards: avatar (placehold.co), `"Medlem N"` name, empty role string. Cards live in `data/team.ts` for easy later replacement.

## Data Flow

- Content objects are imported statically from `src/data/*.ts` into their matching section components.
- No global store (no Pinia). There is no shared mutable state.
- Router exposes hash-based routes (`/#om`, `/#funn`, …) with `scrollBehavior` returning `{ el: to.hash, behavior: 'smooth' }` so browser back/forward and direct-link sharing both work.

## Animation Strategy

- `@vueuse/motion` plugin registered once in `main.ts`.
- `useReveal()` composable returns a preset object: `{ initial: { opacity: 0, y: 24 }, visibleOnce: { opacity: 1, y: 0, transition: { duration: 600, delay: 0 } } }`.
- Applied as `v-motion="reveal()"` on section wrappers; grid children use a `delay` multiplier derived from their index for a subtle stagger.
- Hero uses its own larger entrance preset (fade + y-16 over ~800 ms) triggered on mount, not on intersection.
- All animations respect `prefers-reduced-motion` via `@vueuse/motion`'s built-in handling.

## Responsiveness

- Mobile-first. Breakpoints use Tailwind defaults (`md` ~768 px, `lg` ~1024 px).
- NavBar collapses to a hamburger on `< md`; opens a full-screen overlay with the same anchor links.
- Card grids (findings, personas, team) stack to single column under `md`.
- Comparison grid: horizontal scroll on small screens rather than squeezed layout, so numbers stay readable.

## Accessibility

- Semantic HTML: one `<h1>` (hero), `<section>` per component with `aria-labelledby` pointing at its heading.
- Color contrast: `parchment` on `night-forest` comfortably exceeds WCAG AA; gold on dark used only for large text or decorative accents.
- NavBar anchors are real `<a href="#id">` tags so they work without JS.
- `prefers-reduced-motion` disables reveal animations.

## Content Conventions

- All user-facing copy is Norwegian (Bokmål), pulled from `CLAUDE.md`.
- Code, identifiers, comments are English.
- No statistics or claims are invented. Anything numeric not present in `CLAUDE.md` is marked `// TODO: replace with real data` in the relevant `src/data/*.ts` file.
- Team members: `"Medlem 1"` through `"Medlem 4"`, roles as empty strings, avatars via `https://placehold.co/200x200/2d4a2d/f5f0e8?text=N`.

## Out of Scope (for this first pass)

- Real research data, real team names, real hero photography.
- Testing framework (no Vitest setup). Visual review in the browser is the verification gate for this first pass.
- Deployment configuration (no `gh-pages`, Netlify, Vercel config).
- Dark/light theme toggle — the design is intentionally dark-only.

## Verification

After implementation:
1. `npm install` completes without errors.
2. `npm run dev` starts Vite; the app loads at the printed URL.
3. All 7 sections render with their Norwegian copy and reveal animations on scroll.
4. NavBar anchors scroll smoothly; direct hash URLs (`/#team`) land on the right section.
5. Layout holds at 375 px, 768 px, and 1280 px widths.
6. `npm run build` succeeds and produces a `dist/` directory.

# Team & Personas Redesign — Design Spec

**Date:** 2026-04-20
**Branch:** feature branch off `dev`
**Scope:** Redesign `TeamSection.vue` and `PersonasSection.vue` only. No other sections touched.

---

## 1. TeamSection

### Layout
- Grid changes from `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4` to `grid-cols-1 sm:grid-cols-2 md:grid-cols-3`.
- 6 members total (3 × 2), replacing the original 4.

### Card anatomy (top → bottom, centred)
1. Circular avatar — `w-40 h-40` (160 px), `rounded-full`, `object-cover`, thin gold border (`border-2 border-gold/40`).
2. Name — `font-serif text-xl`.
3. Role — `font-sans text-sm text-parchment/55` — rendered only when `member.role` is non-empty.
4. Description — `font-sans text-sm text-parchment/70 leading-relaxed` — rendered only when `member.description` is non-empty.

### Card sizing
- Padding increases to `p-8` (from `p-6`) to give the larger avatar room.
- Cards remain `bg-night-forest/60 border border-moss/40 rounded-2xl`.

### Local photo support
Photos live in `public/images/team/`. Because Vite serves `public/` at the root, a file placed at
`public/images/team/firstname-lastname.jpg` is referenced in `team.ts` as:
```ts
avatar: '/images/team/firstname-lastname.jpg'
```
Until real photos are added, `placehold.co/400x400` URLs remain in place. A comment in `team.ts` explains the convention.

### Data changes (`src/data/team.ts`)
- Already updated: 6 members with `description` placeholder text and `placehold.co/400x400` avatars.
- `role` fields left as empty strings; `TeamMember.role` is optional so they render nothing.

### Type change (`src/types/index.ts`)
- Already applied: `description?: string` added to `TeamMember`.

---

## 2. PersonasSection

### Card anatomy (top → bottom)
1. **Header row** — circular avatar (`w-16 h-16`, `rounded-full`, `object-cover`, gold border) floated left; name, segment label (gold), and percentage to the right.
2. **Quote block** — `font-serif italic`, left border `border-l-4 border-gold`, subtle gold-tinted background, `rounded-r-lg`.
3. **Divider** — thin `border-moss/35`.
4. **Kjennetegn** — uppercase label (`text-parchment/45 tracking-widest text-xs`), then a bullet list (`list-none`) where each `<li>` has a small gold bullet (`●`) as a `::before` pseudo-element.
5. **Divider**.
6. **Scores** — three labelled progress bars (Åpenhet for nytt / Bærekraft-fokus / Endringspotensial). Each bar: label + percentage on one row, then a thin `h-1.5` track (`bg-parchment/10 rounded-full`) with a gold fill div sized by the score value.

### Highlight distinction
- Lena's card gets `border-gold/40` instead of the default `border-moss/40` — the same treatment as the Python row in ComparisonSection.

### Data changes (`src/data/personas.ts`)
Add to each persona object:
- `quote: string` — a short first-person quote.
- `traits: string[]` — 3 kjennetegn bullet strings.
- `scores: { openness: number; sustainability: number; changeReadiness: number }` — values 0–100.

Confirmed values:
| Field | Kari | Lena |
|---|---|---|
| quote | «Slanger er jo ikke mat. Det høres bare ekkelt ut.» | «Hvis forskning viser at det er mer bærekraftig enn kylling, vil jeg prøve!» |
| traits | se under | se under |
| openness | 20 | 92 |
| sustainability | 35 | 80 |
| changeReadiness | 30 | 90 |

**Kari traits:**
- Litt negativ holdning: forbinder slanger med gift og krypdyr
- Lav eksotisk matvareerfaring; bryter med norske matnormer
- Sosial norm og omdømme stopper før smak vurderes

**Lena traits:**
- Nøytral holdning — bestemmer seg på bakgrunn av fakta
- Ville inkludert slange ved bevist bærekraft
- Er miljøbevisst rasjonell og datadrevet

### Type changes (`src/types/index.ts`)
Already applied:
- `quote?: string` on `Persona`
- `traits?: string[]` on `Persona`
- `scores?: PersonaScore` on `Persona`
- New `PersonaScore` interface: `{ openness: number; sustainability: number; changeReadiness: number }`

---

## 3. Files changed

| File | Change |
|---|---|
| `src/types/index.ts` | ✅ Done — `TeamMember.description`, `Persona.quote/traits/scores`, `PersonaScore` |
| `src/data/team.ts` | ✅ Done — 6 members with descriptions |
| `src/data/personas.ts` | Needs `quote`, `traits`, `scores` added |
| `src/components/TeamSection.vue` | Needs full card redesign |
| `src/components/PersonasSection.vue` | Needs full card redesign |
| `public/mockup.html` | Delete after implementation |

---

## 4. Out of scope
- No changes to other sections.
- No new dependencies.
- No routing changes.
- Real team names, photos, and biographies are filled in by the user manually in `team.ts` and `public/images/team/`.

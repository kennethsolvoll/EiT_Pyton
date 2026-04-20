# Team & Personas Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign TeamSection (3×2 grid, larger circular photo, description) and PersonasSection (quote, kjennetegn bullets, progress bars) to match the approved mockup.

**Architecture:** Two self-contained component rewrites plus a data update. No new dependencies. Types are already extended in `src/types/index.ts`. team.ts already has 6 members. Only personas.ts, TeamSection.vue, PersonasSection.vue, and cleanup of public/mockup.html remain.

**Spec:** `docs/superpowers/specs/2026-04-20-team-personas-redesign.md`

**Verification model:** No unit-test framework in this project. Each task uses `npm run build` (vue-tsc + vite) as the type-correctness gate. Visual verification is done by running `npm run dev` and inspecting the section in the browser.

**Branch:** Create `feat/team-personas-redesign` off `dev` before starting.

**Working directory:** All `npm` and `git` commands run from `C:/Users/Kenneth/Documents/GitHub/EiT_Pyton`.

---

## Preliminary: Create feature branch

Before starting any task, create and switch to a feature branch:

```bash
cd C:/Users/Kenneth/Documents/GitHub/EiT_Pyton
git checkout dev && git pull
git checkout -b feat/team-personas-redesign
```

---

## File Map

| File | Status | Change |
|---|---|---|
| `src/types/index.ts` | ✅ Done | `TeamMember.description?`, `Persona.quote?/traits?/scores?`, `PersonaScore` interface |
| `src/data/team.ts` | ✅ Done | 6 members with description placeholders |
| `src/data/personas.ts` | **Task 1** | Add `quote`, `traits`, `scores` to both personas |
| `src/components/TeamSection.vue` | **Task 2** | Full rewrite: 3-col grid, 160 px avatar, description |
| `src/components/PersonasSection.vue` | **Task 3** | Full rewrite: quote, kjennetegn, progress bars |
| `public/mockup.html` | **Task 4** | Delete (was brainstorm artefact) |

---

## Task 1: Populate personas.ts with quote, traits, and scores

**Files:**
- Modify: `src/data/personas.ts`

- [ ] **Step 1.1: Replace the entire file**

Replace the contents of `src/data/personas.ts` with:

```ts
import type { Persona } from '../types'

export const personas: Persona[] = [
  {
    name: 'Kari Hansen',
    segment: 'Den skeptiske mainstream',
    percentage: 60,
    description:
      'Forbinder slanger med reptiler og giftighet. Sosiale normer og følelsesmessig avsky overstyrer miljøargumenter, selv når bærekraftsgevinstene er dokumentert.',
    avatar: 'https://placehold.co/240x240/2d4a2d/f5f0e8?text=KH',
    quote: '«Slanger er jo ikke mat. Det høres bare ekkelt ut.»',
    traits: [
      'Litt negativ holdning: forbinder slanger med gift og krypdyr',
      'Lav eksotisk matvareerfaring; bryter med norske matnormer',
      'Sosial norm og omdømme stopper før smak vurderes',
    ],
    scores: {
      openness: 20,
      sustainability: 35,
      changeReadiness: 30,
    },
  },
  {
    name: 'Lena Simensen',
    segment: 'Den miljøbevisste pragmatiker',
    percentage: 25,
    description:
      'Rasjonell og datadrevet. Åpen for å prøve pytonkjøtt dersom forskning bekrefter at det er mer bærekraftig enn kylling og har sammenlignbar ernæringsprofil.',
    avatar: 'https://placehold.co/240x240/3d2b1f/f5f0e8?text=LS',
    quote: '«Hvis forskning viser at det er mer bærekraftig enn kylling, vil jeg prøve!»',
    traits: [
      'Nøytral holdning — bestemmer seg på bakgrunn av fakta',
      'Ville inkludert slange ved bevist bærekraft',
      'Er miljøbevisst rasjonell og datadrevet',
    ],
    scores: {
      openness: 92,
      sustainability: 80,
      changeReadiness: 90,
    },
  },
]
```

- [ ] **Step 1.2: Verify type-check passes**

```bash
cd C:/Users/Kenneth/Documents/GitHub/EiT_Pyton
npm run build
```

Expected: clean exit 0. A `dist/` directory is produced. No TypeScript errors.

- [ ] **Step 1.3: Commit**

```bash
git add src/data/personas.ts
git commit -m "feat: add quote, traits, and scores to persona data"
```

---

## Task 2: Rebuild TeamSection.vue

**Files:**
- Modify: `src/components/TeamSection.vue`

Changes from current:
- Grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4` → `grid-cols-1 sm:grid-cols-2 md:grid-cols-3`
- Avatar: `h-24 w-24` → `w-40 h-40`, border `border` → `border-2`
- Card padding: `p-6` → `p-8`
- Add `member.description` paragraph (conditional on non-empty)

- [ ] **Step 2.1: Replace the entire file**

Replace the contents of `src/components/TeamSection.vue` with:

```vue
<script setup lang="ts">
import { team } from '../data/team'
import { reveal } from '../composables/useReveal'
</script>

<template>
  <section
    id="team"
    aria-labelledby="team-heading"
    class="bg-earth/20 py-24 md:py-32"
  >
    <div class="max-w-content mx-auto px-6">
      <div class="mb-16" v-motion="reveal()">
        <p class="text-gold uppercase tracking-[0.3em] text-xs mb-4 font-sans">
          Teamet
        </p>
        <h2 id="team-heading" class="font-serif text-4xl md:text-5xl max-w-3xl">
          Ekspertene bak prosjektet
        </h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <article
          v-for="(member, i) in team"
          :key="member.name"
          v-motion="reveal(i * 100)"
          class="bg-night-forest/60 border border-moss/40 rounded-2xl p-8 flex flex-col items-center text-center"
        >
          <img
            :src="member.avatar"
            :alt="member.name"
            class="w-40 h-40 rounded-full object-cover border-2 border-gold/40 mb-5"
            loading="lazy"
          />
          <h3 class="font-serif text-xl text-parchment mb-1">{{ member.name }}</h3>
          <p v-if="member.role" class="text-parchment/55 font-sans text-sm mb-3">
            {{ member.role }}
          </p>
          <p v-if="member.description" class="text-parchment/70 font-sans text-sm leading-relaxed">
            {{ member.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
```

- [ ] **Step 2.2: Verify build**

```bash
npm run build
```

Expected: clean exit 0, no TypeScript errors.

- [ ] **Step 2.3: Visual check**

```bash
npm run dev
```

Open `http://localhost:5173/#team`. Confirm:
- 6 cards in a 3-column grid (two full rows)
- Avatars are large circles (~160 px)
- Name, role (blank → not rendered), description all visible
- Cards evenly spaced with generous padding

Stop the dev server.

- [ ] **Step 2.4: Commit**

```bash
git add src/components/TeamSection.vue
git commit -m "feat: rebuild TeamSection with 3x2 grid and larger avatar cards"
```

---

## Task 3: Rebuild PersonasSection.vue

**Files:**
- Modify: `src/components/PersonasSection.vue`

Changes from current:
- Remove the large `percentage` number display (percentage now lives in the header row only)
- Remove standalone `description` paragraph (description field kept in data but not shown in the new layout — quote + traits replaces it visually)
- Add quote blockquote with gold left-border
- Add kjennetegn bullet list
- Add three progress-bar score rows
- Lena's card (`i === 1`) gets `border-gold/40` instead of the default `border-moss/50`

- [ ] **Step 3.1: Replace the entire file**

Replace the contents of `src/components/PersonasSection.vue` with:

```vue
<script setup lang="ts">
import { personas } from '../data/personas'
import { reveal } from '../composables/useReveal'
</script>

<template>
  <section
    id="malgruppe"
    aria-labelledby="malgruppe-heading"
    class="bg-night-forest py-24 md:py-32"
  >
    <div class="max-w-content mx-auto px-6">
      <div class="mb-16" v-motion="reveal()">
        <p class="text-gold uppercase tracking-[0.3em] text-xs mb-4 font-sans">
          Målgruppe
        </p>
        <h2 id="malgruppe-heading" class="font-serif text-4xl md:text-5xl max-w-3xl">
          To personas som forklarer markedet
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <article
          v-for="(persona, i) in personas"
          :key="persona.name"
          v-motion="reveal(i * 150)"
          :class="[
            'rounded-2xl p-7 border bg-moss/20',
            i === 1 ? 'border-gold/40' : 'border-moss/50',
          ]"
        >
          <!-- Header: avatar + name + segment + percentage -->
          <div class="flex items-center gap-4 mb-5">
            <img
              :src="persona.avatar"
              :alt="persona.name"
              class="w-16 h-16 rounded-full object-cover border-2 border-gold/45 flex-shrink-0"
              loading="lazy"
            />
            <div>
              <h3 class="font-serif text-xl text-parchment leading-tight">{{ persona.name }}</h3>
              <p class="text-gold font-sans text-xs font-semibold mt-0.5">{{ persona.segment }}</p>
              <p class="text-parchment/55 font-sans text-xs mt-0.5">~{{ persona.percentage }}% av utvalget</p>
            </div>
          </div>

          <!-- Quote -->
          <blockquote
            v-if="persona.quote"
            class="font-serif italic text-parchment/90 text-base leading-relaxed pl-4 border-l-4 border-gold bg-gold/[0.07] rounded-r-lg py-3 pr-4 mb-5"
          >
            {{ persona.quote }}
          </blockquote>

          <hr class="border-moss/35 mb-4" />

          <!-- Kjennetegn -->
          <template v-if="persona.traits?.length">
            <p class="uppercase tracking-widest text-xs text-parchment/45 font-sans mb-3">
              Kjennetegn
            </p>
            <ul class="mb-5 space-y-1.5">
              <li
                v-for="trait in persona.traits"
                :key="trait"
                class="font-sans text-sm text-parchment/80 pl-4 relative leading-snug"
              >
                <span class="absolute left-0 top-[5px] text-gold text-[0.45rem]" aria-hidden="true">●</span>
                {{ trait }}
              </li>
            </ul>
          </template>

          <!-- Scores -->
          <template v-if="persona.scores">
            <hr class="border-moss/35 mb-4" />
            <div class="space-y-3">
              <div class="flex flex-col gap-1.5">
                <div class="flex justify-between font-sans text-xs text-parchment/55">
                  <span>Åpenhet for nytt</span>
                  <span>{{ persona.scores.openness }} %</span>
                </div>
                <div class="h-1.5 bg-parchment/10 rounded-full overflow-hidden">
                  <div
                    class="h-full bg-gold rounded-full"
                    :style="{ width: persona.scores.openness + '%' }"
                  />
                </div>
              </div>
              <div class="flex flex-col gap-1.5">
                <div class="flex justify-between font-sans text-xs text-parchment/55">
                  <span>Bærekraft-fokus</span>
                  <span>{{ persona.scores.sustainability }} %</span>
                </div>
                <div class="h-1.5 bg-parchment/10 rounded-full overflow-hidden">
                  <div
                    class="h-full bg-gold rounded-full"
                    :style="{ width: persona.scores.sustainability + '%' }"
                  />
                </div>
              </div>
              <div class="flex flex-col gap-1.5">
                <div class="flex justify-between font-sans text-xs text-parchment/55">
                  <span>Endringspotensial</span>
                  <span>{{ persona.scores.changeReadiness }} %</span>
                </div>
                <div class="h-1.5 bg-parchment/10 rounded-full overflow-hidden">
                  <div
                    class="h-full bg-gold rounded-full"
                    :style="{ width: persona.scores.changeReadiness + '%' }"
                  />
                </div>
              </div>
            </div>
          </template>
        </article>
      </div>
    </div>
  </section>
</template>
```

- [ ] **Step 3.2: Verify build**

```bash
npm run build
```

Expected: clean exit 0, no TypeScript errors.

- [ ] **Step 3.3: Visual check**

```bash
npm run dev
```

Open `http://localhost:5173/#malgruppe`. Confirm:
- Two cards side by side on desktop
- Each card: avatar + name header, italic quote with gold left-border, kjennetegn bullets, three progress bars
- Lena's card has a visible gold border; Kari's has the default moss border
- Progress bars fill: Kari 20 / 35 / 30 %, Lena 92 / 80 / 90 %

Stop the dev server.

- [ ] **Step 3.4: Commit**

```bash
git add src/components/PersonasSection.vue
git commit -m "feat: rebuild PersonasSection with quote, traits, and score bars"
```

---

## Task 4: Cleanup, final build, and PR

**Files:**
- Delete: `public/mockup.html`

- [ ] **Step 4.1: Delete the mockup file**

```bash
cd C:/Users/Kenneth/Documents/GitHub/EiT_Pyton
rm public/mockup.html
```

- [ ] **Step 4.2: Final production build**

```bash
npm run build
```

Expected: clean exit 0. Confirm `dist/` is produced.

- [ ] **Step 4.3: Commit cleanup**

```bash
git add -A
git commit -m "chore: remove brainstorm mockup artefact"
```

# CLAUDE.md — Project Context for Claude Code

## Project Overview
This is a **Single Page Application (SPA)** built to present a university project from the course *"Eksperter i Team"* at NTNU.

- **Project Title:** "Pyton med pyton? — En studie av pytonslange som bærekraftig proteinkilde i Norge"
- **Research Question:** "Hvordan kan pytonoppdrett møte fremtidig etterspørsel etter bærekraftige proteinkilder på det norske markedet og samtidig aksepteres av målgruppen?"
- **Target Audience:** Faculty, fellow students, and stakeholders interested in sustainable food systems.

---

## Tech Stack
- **Framework:** Vue 3 (Composition API + `<script setup>`)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Routing:** Vue Router (hash or history mode for SPA)
- **Build Tool:** Vite
- **Package Manager:** npm

---

## Design Guidelines
- **Theme:** Dark, earthy color palette — conveys sustainability and innovation.
  - Suggested base colors: deep greens (`#1a2e1a`, `#2d4a2d`), warm browns (`#3d2b1f`), off-whites (`#f5f0e8`), and muted gold accents (`#c9a84c`).
- **Style:** Stylish, smooth, and clean. Think editorial / research-forward aesthetic.
- **Typography:** Clear hierarchy — large hero headlines, readable body text.
- **Animations:** Smooth scroll between sections; subtle fade/slide-in on scroll for section reveals (use `IntersectionObserver` or a lightweight library like `@vueuse/motion`).
- **Responsive:** Mobile-first, fully responsive layout.

---

## Application Structure

The app is a single scrollable page with anchor-based navigation. All sections are components rendered in sequence inside `App.vue` or a layout component.

### Sections / Components (in order)

1. **`HeroSection.vue`**
   - Full-viewport hero with project title and a punchy subheadline.
   - CTA button: *"Utforsk funnene"* — smooth scrolls to the findings section.
   - Background: dark with a striking visual (placeholder image of a python or abstract nature graphic).

2. **`AboutSection.vue`** *(Om Prosjektet)*
   - Presents the research question and context.
   - Explains why alternative proteins are necessary toward 2050.
   - Keep it concise — 2–3 paragraphs max.

3. **`FindingsSection.vue`** *(Hovedfunn — De 3 bærekraftsdimensjonene)*
   Three cards or panels, one per sustainability dimension:
   - 🌿 **Environment & Climate:** Feed conversion ratio ~4:1, uses waste protein, tolerates long fasting. Saves significant water and land vs. cattle and pigs.
   - 💰 **Economy:** Lower operational costs (feed + labor), but very high setup costs (3M+ NOK) and extreme market risk in Norway.
   - 🧠 **Social (Main Challenge):** Norwegian consumers lack cultural acceptance for snake meat — emotional disgust response. Social norms override environmental arguments.

4. **`PersonasSection.vue`** *(Målgruppe / Personas)*
   Two styled persona cards:
   - **Kari Hansen** (~60% of sample): "Den skeptiske mainstream". Associates snakes with reptiles and venom. Social norms override environmental arguments.
   - **Lena Simensen** (~25% of sample): "Den miljøbevisste pragmatiker". Rational and data-driven. Willing to try if research confirms it is more sustainable than chicken.

5. **`ComparisonSection.vue`** *(Pyton vs. Tradisjonelt)*
   - A stylish visual comparison: python vs. traditional protein sources (beef, chicken, pork).
   - Highlight: feed efficiency, water usage, land use, CO₂ emissions.
   - Use a custom-styled table, icon grid, or a Chart.js / D3 bar chart (placeholder data OK initially).

6. **`ConclusionSection.vue`** *(Konklusjon & Anbefaling)*
   - Summary: Technically sustainable, but viable only as a niche product in the short term.
   - A clear, confident closing statement.

7. **`TeamSection.vue`** *(Teamet — Ekspertene)*
   - Profile cards for each team member: placeholder avatar, name, and role.
   - Friendly but professional look.

---

## File & Folder Structure

```
src/
├── assets/
│   └── images/          # Placeholder images for hero, personas, team
├── components/
│   ├── HeroSection.vue
│   ├── AboutSection.vue
│   ├── FindingsSection.vue
│   ├── PersonasSection.vue
│   ├── ComparisonSection.vue
│   ├── ConclusionSection.vue
│   ├── TeamSection.vue
│   └── NavBar.vue
├── router/
│   └── index.ts         # Vue Router setup (anchor links / smooth scroll)
├── types/
│   └── index.ts         # Shared TypeScript interfaces (Persona, TeamMember, etc.)
├── App.vue
└── main.ts
```

---

## Key TypeScript Interfaces

```ts
// types/index.ts

export interface Persona {
  name: string;
  segment: string;        // e.g. "Den skeptiske mainstream"
  percentage: number;     // e.g. 60
  description: string;
  avatar: string;         // image path or placeholder URL
}

export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
}

export interface FindingCard {
  icon: string;
  title: string;
  summary: string;
  details: string[];
}
```

---

## Development Conventions
- Use `<script setup lang="ts">` in all components.
- Props should be typed with `defineProps<{...}>()`.
- Use Tailwind utility classes directly — avoid custom CSS unless necessary.
- Smooth scrolling: implement via `scrollIntoView({ behavior: 'smooth' })` or CSS `scroll-behavior: smooth` on `html`.
- Placeholder images: use `https://placehold.co` or a local SVG until real assets are ready.
- All user-facing text is in **Norwegian (Bokmål)**.
- Code, variable names, and comments are in **English**.

---

## Content Notes for Claude
- The project is academic — tone should be informative, credible, and visually engaging.
- Do not invent statistics or claims beyond what is described in this file.
- When generating placeholder data (e.g. for the comparison chart), clearly mark it as `// TODO: replace with real data`.
- Team member names and roles are placeholders — leave them as `["Member 1", "Member 2", ...]` until provided.

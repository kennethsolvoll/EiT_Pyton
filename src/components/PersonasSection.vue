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

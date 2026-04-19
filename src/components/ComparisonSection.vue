<script setup lang="ts">
import { comparison } from '../data/comparison'
import { reveal } from '../composables/useReveal'
</script>

<template>
  <section
    id="sammenligning"
    aria-labelledby="sammenligning-heading"
    class="bg-moss/30 py-24 md:py-32"
  >
    <div class="max-w-content mx-auto px-6">
      <div class="mb-16" v-motion="reveal()">
        <p class="text-gold uppercase tracking-[0.3em] text-xs mb-4 font-sans">
          Pyton vs. tradisjonelt
        </p>
        <h2 id="sammenligning-heading" class="font-serif text-4xl md:text-5xl max-w-3xl">
          Hvordan slår det ut på ressursbruken?
        </h2>
        <p class="mt-6 text-parchment/60 font-sans text-sm italic">
          Plassholdertall — erstattes med publiserte forskningsdata.
        </p>
      </div>

      <p class="sr-only">
        Sammenligning av vannforbruk, fôrkonverteringsforhold, arealbruk og CO₂-utslipp
        per proteinkilde: pyton, storfe, kylling og svin.
      </p>

      <div class="overflow-x-auto">
        <div class="min-w-[640px] space-y-4">
          <div
            v-for="(row, i) in comparison"
            :key="row.source"
            v-motion="reveal(i * 100)"
            :class="[
              'grid grid-cols-[minmax(8rem,1fr)_repeat(4,minmax(0,1fr))] items-center gap-4 rounded-2xl p-5 md:p-6 bg-night-forest/60 border',
              row.highlight ? 'border-gold/70' : 'border-moss/40',
            ]"
          >
            <div>
              <p class="font-serif text-xl md:text-2xl" :class="row.highlight ? 'text-gold' : 'text-parchment'">
                {{ row.source }}
              </p>
            </div>

            <div
              v-for="metric in row.metrics"
              :key="metric.label"
              class="flex flex-col items-start"
            >
              <span class="text-2xl mb-1" aria-hidden="true">{{ metric.icon }}</span>
              <span class="font-serif text-xl md:text-2xl text-parchment leading-tight">
                {{ metric.value }}
              </span>
              <span class="text-parchment/60 font-sans text-xs mt-1">
                {{ metric.label }}<span v-if="metric.unit"> · {{ metric.unit }}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

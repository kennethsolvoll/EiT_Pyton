<script setup lang="ts">
import { findings } from '../data/findings'
import { reveal } from '../composables/useReveal'
</script>

<template>
  <section
    id="funn"
    aria-labelledby="funn-heading"
    class="bg-moss/40 py-24 md:py-32"
  >
    <div class="max-w-content mx-auto px-6">
      <div class="mb-16" v-motion="reveal()">
        <p class="text-gold uppercase tracking-[0.3em] text-xs mb-4 font-sans">
          Hovedfunn
        </p>
        <h2 id="funn-heading" class="font-serif text-4xl md:text-5xl max-w-3xl">
          De tre bærekraftsdimensjonene
        </h2>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <article
          v-for="(card, i) in findings"
          :key="card.title"
          v-motion="reveal(i * 120)"
          class="bg-night-forest/80 border border-moss/60 rounded-2xl p-8 flex flex-col h-full"
        >
          <div class="text-5xl mb-6" aria-hidden="true">{{ card.icon }}</div>
          <h3 class="font-serif text-2xl text-parchment mb-4">{{ card.title }}</h3>
          <p class="text-parchment/80 font-sans leading-relaxed mb-6">
            {{ card.summary }}
          </p>
          <ul class="mt-auto space-y-2 text-parchment/70 font-sans text-sm">
            <li
              v-for="detail in card.details"
              :key="detail"
              class="flex gap-3"
            >
              <span class="text-gold" aria-hidden="true">›</span>
              <span>{{ detail }}</span>
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

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

      <div class="grid md:grid-cols-2 gap-8">
        <article
          v-for="(persona, i) in personas"
          :key="persona.name"
          v-motion="reveal(i * 150)"
          class="bg-earth/30 border border-earth/60 rounded-2xl p-8 md:p-10"
        >
          <div class="flex items-center gap-6 mb-6">
            <img
              :src="persona.avatar"
              :alt="persona.name"
              class="h-20 w-20 rounded-full object-cover border border-gold/40"
              loading="lazy"
            />
            <div>
              <h3 class="font-serif text-2xl text-parchment">{{ persona.name }}</h3>
              <p class="text-parchment/70 font-sans text-sm">{{ persona.segment }}</p>
            </div>
          </div>

          <div class="flex items-baseline gap-3 mb-6">
            <span class="font-serif text-6xl text-gold leading-none">
              {{ persona.percentage }}%
            </span>
            <span class="text-parchment/60 font-sans text-sm">av utvalget</span>
          </div>

          <p class="text-parchment/80 font-sans leading-relaxed">
            {{ persona.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

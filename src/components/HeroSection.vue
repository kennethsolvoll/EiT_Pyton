<script setup lang="ts">
import { heroEntrance } from '../composables/useReveal'
</script>

<template>
  <section
    id="hero"
    class="relative min-h-screen flex items-center overflow-hidden"
  >
    <video
      class="absolute inset-0 w-full h-full object-cover scale-110"
      style="filter: blur(8px);"
      autoplay muted loop playsinline
      aria-hidden="true"
    >
    <source src="/videos/pythonvideo.mp4" type="video/mp4" />
  </video>
    <div
      class="absolute inset-0 bg-gradient-to-b from-night-forest/70 via-night-forest/80 to-night-forest"
      aria-hidden="true"
    />

    <div class="relative max-w-content mx-auto px-6 py-32" v-motion="heroEntrance()">
      <p class="text-gold uppercase tracking-[0.3em] text-xs mb-6 font-sans">
        NTNU · Eksperter i Team
      </p>
      <h1 class="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mb-8">
        Pyton med pyton?
      </h1>
      <p class="font-sans text-lg md:text-xl text-parchment/80 max-w-2xl mb-12 leading-relaxed">
        En studie av pytonslange som bærekraftig proteinkilde i Norge — og hvordan
        målgruppen faktisk reagerer.
      </p>
      <a
        href="#funn"
        class="inline-flex items-center gap-3 bg-gold text-night-forest font-sans font-semibold px-8 py-4 rounded-full hover:bg-gold/90 transition-colors"
      >
        Utforsk funnene
        <span aria-hidden="true">↓</span>
      </a>
    </div>
  </section>
</template>

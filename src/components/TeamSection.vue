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

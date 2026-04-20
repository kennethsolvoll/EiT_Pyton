<script setup lang="ts">
import { ref } from 'vue'
import { navLinks } from '../data/nav'

const open = ref(false)

function close() {
  open.value = false
}
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 bg-night-forest/80 backdrop-blur border-b border-moss/40"
  >
    <div class="max-w-content mx-auto flex items-center justify-between px-6 py-4">
      <a href="#" class="font-serif text-xl text-gold tracking-tight">
        Pytonoppdrett
      </a>

      <nav class="hidden md:flex items-center gap-8">
        <a
          v-for="link in navLinks"
          :key="link.hash"
          :href="link.hash"
          class="text-parchment/80 hover:text-gold transition-colors text-sm font-medium"
        >
          {{ link.label }}
        </a>
      </nav>

      <button
        class="md:hidden text-parchment focus:outline-none focus:ring-2 focus:ring-gold rounded p-2"
        :aria-expanded="open"
        aria-label="Åpne meny"
        @click="open = !open"
      >
        <svg v-if="!open" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <div
      v-if="open"
      class="md:hidden bg-night-forest border-t border-moss/40"
    >
      <nav class="flex flex-col px-6 py-4 gap-4">
        <a
          v-for="link in navLinks"
          :key="link.hash"
          :href="link.hash"
          class="text-parchment/90 hover:text-gold transition-colors text-base font-medium"
          @click="close"
        >
          {{ link.label }}
        </a>
      </nav>
    </div>
  </header>
</template>

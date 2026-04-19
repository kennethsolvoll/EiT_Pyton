<script setup lang="ts">
import { reveal } from '../composables/useReveal'
</script>

<template>
  <section
    id="konklusjon"
    aria-labelledby="konklusjon-heading"
    class="bg-night-forest py-24 md:py-32"
  >
    <div class="max-w-content mx-auto px-6" v-motion="reveal()">
      <p class="text-gold uppercase tracking-[0.3em] text-xs mb-4 font-sans">
        Konklusjon & anbefaling
      </p>
      <h2 id="konklusjon-heading" class="font-serif text-4xl md:text-5xl mb-10 max-w-3xl">
        Teknisk bærekraftig — kommersielt en nisje.
      </h2>

      <div class="space-y-6 text-parchment/80 font-sans text-lg leading-relaxed max-w-3xl">
        <p>
          Pytonoppdrett kan teoretisk levere et svært effektivt protein. Miljømessig
          slår det tradisjonelt kjøtt med god margin, og operasjonelt er driften
          forbausende ressursgjerrig.
        </p>
        <p>
          Den norske barrieren er imidlertid sosial og kulturell, ikke teknisk. På
          kort sikt er pyton derfor kun levedyktig som nisjeprodukt — målrettet mot
          miljøbevisste pragmatikere, ikke mot mainstream-forbrukeren.
        </p>
      </div>

      <aside
        class="mt-12 border-l-4 border-gold pl-6 md:pl-8 py-4 bg-moss/30 rounded-r-lg max-w-3xl"
      >
        <p class="font-serif text-xl md:text-2xl text-parchment italic">
          «Teknisk bærekraftig, men kommersielt kun levedyktig som nisjeprodukt
          på kort sikt.»
        </p>
      </aside>
    </div>
  </section>
</template>

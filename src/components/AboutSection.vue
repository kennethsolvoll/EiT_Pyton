<script setup lang="ts">
import { reveal } from '../composables/useReveal'
</script>

<template>
  <section
    id="om"
    aria-labelledby="om-heading"
    class="bg-night-forest py-24 md:py-32"
  >
    <div class="max-w-content mx-auto px-6" v-motion="reveal()">
      <p class="text-gold uppercase tracking-[0.3em] text-xs mb-4 font-sans">
        Om prosjektet
      </p>
      <h2 id="om-heading" class="font-serif text-4xl md:text-5xl mb-10 max-w-3xl">
        Hvordan kan pytonoppdrett møte fremtidig etterspørsel etter bærekraftige
        proteinkilder på det norske markedet — og samtidig aksepteres av målgruppen?
      </h2>

      <div class="grid md:grid-cols-2 gap-10 text-parchment/80 font-sans text-lg leading-relaxed">
        <p>
          Mot 2050 forventes global etterspørsel etter protein å øke kraftig, samtidig
          som ressursene for tradisjonell husdyrproduksjon blir knappere. Alternative
          proteinkilder er derfor ikke bare ønskelige, men nødvendige.
        </p>
        <p>
          Dette prosjektet undersøker pytonslange som et radikalt alternativ — teknisk
          effektivt, men kulturelt kontroversielt. Vi ser på tre dimensjoner av
          bærekraft: miljø, økonomi og den sosiale aksepten hos norske forbrukere.
        </p>
      </div>
    </div>
  </section>
</template>

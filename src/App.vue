<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import FindingsSection from './components/FindingsSection.vue'
import PersonasSection from './components/PersonasSection.vue'
import ComparisonSection from './components/ComparisonSection.vue'
import ConclusionSection from './components/ConclusionSection.vue'
</script>

<template>
  <NavBar />
  <main>
    <HeroSection />
    <AboutSection />
    <FindingsSection />
    <PersonasSection />
    <ComparisonSection />
    <ConclusionSection />
  </main>
</template>

<template>
  <q-page class="home-page">
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
  </q-page>
</template>

<script setup>
import HeroSection from 'src/sections/HeroSection.vue'
import AboutSection from 'src/sections/AboutSection.vue'
import SkillsSection from 'src/sections/SkillsSection.vue'
import ProjectsSection from 'src/sections/ProjectsSection.vue'
import ContactSection from 'src/sections/ContactSection.vue'
</script>

<style lang="scss" scoped>
.home-page {
  position: relative;
  z-index: 1;
}
</style>


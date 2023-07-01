<template>
  <section id="intro">
    <IntroDetails />
    <IntroLinks />
  </section>
</template>
<script setup lang="ts">
import IntroDetails from './IntroDetails.vue'
import IntroLinks from './IntroLinks.vue'
</script>
<style scoped>
section {
  height: 100vh;
  position: relative;
  padding-top: 250px;
  display: flex;
  justify-content: space-between;
}
</style>

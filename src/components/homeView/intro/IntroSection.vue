<template>
  <section id="intro" class="intro-section">
    <IntroDetails />
    <IntroLinks />
  </section>
</template>
<script setup lang="ts">
import IntroDetails from './IntroDetails.vue'
import IntroLinks from './IntroLinks.vue'
</script>
<style scoped>
@media screen and (min-width: 1025px) {
  .intro-section {
    justify-content: space-between;
  }
}
@media screen and (min-width: 1025px) and (max-width: 1233px) {
  .intro-section {
    justify-content: center;
  }
}
@media screen and (max-width: 1024px) {
  .intro-section {
    flex-direction: column;
    /* gap: 40px; */
    justify-content: space-between;
  }
}
@media screen and (min-width: 768px) {
  .intro-section {
    padding-top: 250px;
  }
}
@media screen and (max-width: 767px) {
  .intro-section {
    padding-top: 150px;
  }
}
section {
  height: 100vh;
  position: relative;
  padding-top: 250px;
  display: flex;
}
</style>

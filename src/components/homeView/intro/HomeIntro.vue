<template>
  <section>
    <HomeIntroDetails />
    <HomeIntroLinks />
  </section>
</template>
<script setup lang="ts">
import HomeIntroDetails from './HomeIntroDetails.vue'
import HomeIntroLinks from './HomeIntroLinks.vue'
</script>
<style scoped>
section {
  position: relative;
  padding-top: 250px;
  display: flex;
  justify-content: space-between;
}
</style>

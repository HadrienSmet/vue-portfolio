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
<style>
section {
  height: 100vh;
  padding-left: calc((100vw - 16px) / 12);
  padding-right: calc((100vw - 16px) / 12);
  padding-top: 250px;
}
</style>

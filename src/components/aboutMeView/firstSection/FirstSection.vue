<template>
  <section class="about-me__intro">
    <SoftSkills />
    <FewWords />
  </section>
</template>
<script lang="ts" setup>
import FewWords from './FewWords.vue'
import SoftSkills from './SoftSkills.vue'
</script>
<style scoped>
section {
  height: calc(100vh - 270px);
  padding: 0px calc(100vw / 12);
  display: flex;
  justify-content: space-between;
}
</style>

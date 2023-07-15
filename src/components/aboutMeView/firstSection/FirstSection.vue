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
@media screen and (min-width: 1025px) {
  .about-me__intro {
    height: calc(100vh - 255px);
  }
}
@media screen and (max-width: 1024px) {
  .about-me__intro {
    flex-direction: column;
    align-items: center;
    gap: 25px;
    margin-top: 25px;
  }
}
section {
  height: calc(100vh - 270px);
  padding: 0px calc(100vw / 12);
  display: flex;
  justify-content: space-between;
}
</style>

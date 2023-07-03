<template>
  <section class="second-section">
    <PersonalityDivision />
    <HobbiesDivision />
  </section>
</template>
<script lang="ts" setup>
import PersonalityDivision from './PersonalityDivision.vue'
import HobbiesDivision from './hobbiesDivision/HobbiesDivision.vue'
</script>
<style scoped>
/* @media screen and (min-width: 1025px) {
  .second-section {
    height: 100vh;
  }
} */
@media screen and (max-width: 1024px) {
  .second-section {
    margin-bottom: 60px;
  }
}
.second-section {
  width: 100%;
  padding-top: 130px;
}
</style>

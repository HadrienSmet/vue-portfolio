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
.second-section {
  width: 100%;
  padding-top: 130px;
}
</style>

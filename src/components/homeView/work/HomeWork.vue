<template>
  <section class="work">
    <stacks-container />
    <online-projects-division />
  </section>
</template>
<script setup lang="ts">
import StacksContainer from './StacksContainer.vue'
import OnlineProjectsDivision from './OnlineProjectsDivision.vue'
</script>
<style scoped>
.work {
  padding-top: 120px;
  position: relative;
  z-index: 1;
}
.work::after {
  content: '';
  position: absolute;
  width: 70%;
  height: 1px;
  left: 15%;
  background-color: var(--clr-2-op7);
  /* transform: scaleX(0); */
  transform-origin: left;
  transition: 1.2s ease-in-out;
  display: flex;
  flex-direction: column;
  gap: 45px;
}
</style>

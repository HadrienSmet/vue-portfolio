<template>
  <section id="work" class="work">
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
  min-height: 100vh;
  padding-top: 120px;
  position: relative;
  z-index: 1;
  margin-bottom: 80px;
}
.work::after {
  content: '';
  position: absolute;
  width: 70%;
  height: 1px;
  left: 15%;
  bottom: -10px;
  background-color: var(--clr-2-op7);
  /* transform: scaleX(0); */
  transform-origin: left;
  transition: 1.2s ease-in-out;
  display: flex;
  flex-direction: column;
  gap: 45px;
}
</style>

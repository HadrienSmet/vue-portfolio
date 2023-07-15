<template>
  <section id="work" class="work" ref="elementRef">
    <stacks-container />
    <online-projects-division />
  </section>
</template>
<script setup lang="ts">
import StacksContainer from './StacksContainer.vue'
import OnlineProjectsDivision from './OnlineProjectsDivision.vue'
import { useElementOnScroll } from '@/hooks/scroll/useElementOnScroll'

const { elementRef } = useElementOnScroll({ threshold: 0.1, rootMargin: '0px' })
</script>
<style scoped>
@media screen and (max-width: 1024px) and (min-width: 768px) {
  .work {
    overflow: hidden;
  }
}
@media screen and (min-width: 768px) {
  .work {
    gap: 45px;
  }
  .work::after {
    bottom: 0;
  }
}
@media screen and (max-width: 767px) {
  .work {
    gap: 15px;
    height: unset !important;
  }
  .work::after {
    bottom: -15px;
  }
}
.work {
  min-height: 100vh;
  padding-top: 120px;
  position: relative;
  z-index: 1;
  margin-bottom: 80px;
}
.work.visible::after {
  transform: scaleX(1);
}
.work::after {
  content: '';
  position: absolute;
  width: 70%;
  height: 1px;
  left: 15%;
  bottom: -10px;
  background-color: var(--clr-2-op7);
  transform: scaleX(0);
  transform-origin: left;
  transition: 1.2s ease-in-out;
  display: flex;
  flex-direction: column;
  gap: 45px;
}
</style>
@/hooks/scroll/useElementOnScroll

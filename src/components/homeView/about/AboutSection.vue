<template>
  <section id="about" class="about" ref="elementRef">
    <h2>If you want to learn...</h2>
    <DoubleImageDivision />
  </section>
</template>
<script setup lang="ts">
import DoubleImageDivision from '@/components/homeView/about/doubleImageDivision/DoubleImageDivision.vue'
import { useElementOnScroll } from '@/hooks/scroll/useElementOnScroll'

const { elementRef } = useElementOnScroll({ threshold: 0.1, rootMargin: '0px' })
</script>
<style scoped>
@media screen and (min-width: 768px) {
  h2 {
    font-size: 2em;
  }
}
@media screen and (max-width: 767px) {
  .about {
    margin-bottom: 50px;
    overflow: hidden;
  }
  h2 {
    font-size: 1.5em;
  }
}
section {
  padding-top: 120px;
  height: 100vh;
}
h2 {
  font-family: 'title-fonts';
  text-transform: uppercase;
  opacity: 0;
  transform: translateX(-10%);
  transition: 0.3s ease-out;
}
.about.visible h2 {
  opacity: 1;
  transform: translateX(0);
}
</style>
@/hooks/scroll/useElementOnScroll

<script setup lang="ts">
import { ref } from 'vue'
import { useHeaderOnScroll } from '@/hooks/useHeaderOnScroll'
import HeaderButton from './HeaderButton.vue'
import PageNavigation from './PageNavigation.vue'

const headerRef = ref<HTMLDivElement | null>(null)
useHeaderOnScroll(headerRef)
</script>
<template>
  <header ref="headerRef">
    <span>Hadri</span>
    <!-- <nav>
      <a href="#">Intro</a>
      <a href="#work">Work</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav> -->
    <PageNavigation />
    <HeaderButton />
  </header>
</template>
<style scoped>
header {
  z-index: 10;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(0deg, var(--clr-2), var(--clr-2-op7));
  padding: 0 50px;
  transition: 0.2s ease-in-out;
}
header:hover {
  background-color: var(--clr-2);
}
span {
  color: var(--clr-1);
  font-family: 'graff-fonts';
}
</style>

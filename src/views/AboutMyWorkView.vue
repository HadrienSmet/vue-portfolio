<template>
  <main class="about-my-work">
    <BackgroundLayout>
      <img :src="BackgroundImage" alt="splashed ink" />
    </BackgroundLayout>
    <h1 ref="elementRef">About my work</h1>
    <ToolsSection />
    <ProjectsSection />
  </main>
</template>
<script setup lang="ts">
import BackgroundLayout from '@/components/BackgroundLayout.vue'
import BackgroundImage from '@/assets/images/ink-splash.webp'
import ToolsSection from '@/components/aboutMyWorkView/ToolsSection.vue'
import ProjectsSection from '@/components/aboutMyWorkView/projectsSection/ProjectsSection.vue'
import { useElementOnScroll } from '@/hooks/useElementOnScroll'
const { elementRef } = useElementOnScroll({ threshold: 0.25, rootMargin: '0px' })
</script>
<style scoped>
@media screen and (min-width: 1025px) {
  img {
    transform: translate(10%, -15%) rotate(-50deg) scale(0.8);
  }
  h1 {
    font-size: 5em;
  }
}
@media screen and (max-width: 1024px) {
  img {
    transform: translate(30%, -15%) rotate(-50deg) scale(0.6);
  }
  h1 {
    font-size: 4em;
  }
}
@media screen and (min-width: 768px) {
  h1 {
    -webkit-text-stroke: 3px var(--clr-2);
  }
}
@media screen and (max-width: 767px) {
  img {
    transform: translate(40%, -15%) rotate(-80deg) scale(0.6);
  }
  h1 {
    font-size: 2em;
    background: linear-gradient(
      90deg,
      var(--clr-2-op7),
      var(--clr-2-op4),
      var(--clr-2-op6),
      var(--clr-2-op8),
      var(--clr-2-op5),
      var(--clr-2-op3),
      var(--clr-2-op6),
      var(--clr-2-op9)
    );
    background-size: 1000%;
    background-position: 0%;
    background-clip: text;
    -webkit-background-clip: text !important;
    animation: backgroundTitleAnim 14s linear alternate infinite;
  }
}
.about-my-work {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
}
img {
  z-index: 0;
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0;
  animation: increaseOpacity 1s cubic-bezier(1, 0, 0.82, 0.96) forwards;
}
h1 {
  padding-top: 110px;
  position: relative;
  z-index: 1;
  text-align: center;
  text-transform: uppercase;
  color: transparent;
  opacity: 0;
  transform: translateY(-60%);
  transition: 0.5s ease-out;
}
h1.visible {
  opacity: 1;
  transform: translateY(0);
}
h2 {
  text-transform: uppercase;
  color: var(--clr-2-op8);
  font-size: 2em;
}
section {
  position: relative;
  padding-left: calc((100vw - 16px) / 12);
  padding-right: calc((100vw - 16px) / 12);
}
</style>

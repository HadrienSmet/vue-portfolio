<template>
  <div ref="elementRef" class="project-card">
    <img :src="imagePath" :alt="`screenshot of the project called: ${project!.name}`" />
    <div class="project-content">
      <h3>{{ project!.name }}</h3>
      <ul>
        <li v-for="(tool, index) in project!.tools" :key="`tool-${index}`">
          {{ tool }}
        </li>
      </ul>
      <a :href="`https://hadri-smet-portfolio.netlify.app/project/${project.id}`"
        >See the details</a
      >
    </div>
  </div>
</template>
<script setup lang="ts">
import { useElementOnScroll } from '@/hooks/scroll/useElementOnScroll'
import { computed } from 'vue'
import bookiSquare from '@/assets/images/booki-square.webp'
import ohmyfoodSquare from '@/assets/images/ohMyFood-square.webp'
import panthereSquare from '@/assets/images/lapanthere-square.webp'
import kanapSquare from '@/assets/images/kanap-square.webp'
import piquanteSquare from '@/assets/images/piiiquante-square.webp'
import groupomaniaSquare from '@/assets/images/groupomania-square.webp'
import travelSquare from '@/assets/images/travelApp-profile.webp'
import tinyclipSquare from '@/assets/images/tinyclip-square.webp'
import clonedSquare from '@/assets/images/cloned-square.webp'
const imagesArray = [
  {
    id: 0,
    imported: bookiSquare
  },
  {
    id: 1,
    imported: ohmyfoodSquare
  },
  {
    id: 2,
    imported: panthereSquare
  },
  {
    id: 3,
    imported: kanapSquare
  },
  {
    id: 4,
    imported: piquanteSquare
  },
  {
    id: 5,
    imported: groupomaniaSquare
  },
  {
    id: 6,
    imported: travelSquare
  },
  {
    id: 7,
    imported: tinyclipSquare
  },
  {
    id: 8,
    imported: clonedSquare
  }
]
const props = defineProps({
  project: Object
})
const project = { ...props.project }
const imagePath = computed(() => {
  return imagesArray.find((el) => el.id === project.id)?.imported
})
const { elementRef } = useElementOnScroll({ threshold: 0.33, rootMargin: '0px' })
</script>
<style scoped>
@media screen and (min-width: 1025px) {
  .project-card {
    width: calc((((100vw - 16px) - (100vw / 6)) / 3) - 10px);
    height: 350px !important;
  }
}
@media screen and (max-width: 1024px) {
  .project-card {
    width: calc((((100vw - 16px) - (100vw / 6)) / 2) - 5px);
  }
  .project-content ul {
    max-height: 105px;
    overflow: hidden;
  }
}
@media screen and (max-width: 768px) {
  .project-card {
    width: calc((100vw - 16px) - (100vw / 6));
    animation-delay: 0.25s;
  }
}
img {
  width: 100%;
  height: 100%;
}
h3 {
  position: relative;
  text-align: center;
  transform: translateY(-200px);
  transition: 0.3s ease-in-out;
}
ul {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px;
  width: 70%;
}
li {
  padding: 5px 8px;
  border-radius: 4px;
  background-color: var(--clr-1);
  color: var(--clr-2);
  transform: scale(0) translateY(5px);
  opacity: 0;
}
a {
  width: 50%;
  padding: 8px 0px;
  text-transform: uppercase;
  text-align: center;
  border-radius: 30px;
  background-color: var(--clr-1);
  border: 1px solid var(--clr-1);
  color: var(--clr-2);
  transition: 0.2s ease-in-out;
  transform: translateY(200px);
}
a:hover {
  color: var(--clr-1);
  background-color: transparent;
}
.project-card {
  overflow: hidden;
  position: relative;
  max-width: 520px;
  height: 320px;
  border-radius: 8px;
  transform: translateY(10%);
  opacity: 0;
}
.project-card.visible {
  animation: appearFromBottom 0.4s ease-out forwards;
}
.project-card:hover .project-content {
  background-color: var(--clr-2-op7);
}
.project-card:hover h3 {
  transform: translateY(0);
}
.project-card:hover ul li {
  animation: toolsAppearsAnim 0.12s ease-in-out forwards;
}
.project-card:hover a {
  transform: translateY(0);
}
.project-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  transition: 0.2s ease-in-out;
  color: var(--clr-1);
}
</style>
@/hooks/scroll/useElementOnScroll

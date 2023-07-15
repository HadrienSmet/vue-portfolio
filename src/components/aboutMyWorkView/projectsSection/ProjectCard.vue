<template>
  <div ref="elementRef" class="project-card">
    <img
      :src="`src/assets/images/${project!.image_link}`"
      :alt="`screenshot of the project called: ${project!.name}`"
    />
    <div class="project-content">
      <h3>{{ project!.name }}</h3>
      <ul>
        <li v-for="(tool, index) in project!.tools" :key="`tool-${index}`">
          {{ tool }}
        </li>
      </ul>
      <a :href="`http://localhost:5173/project/${project.id}`">See the details</a>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useElementOnScroll } from '@/hooks/scroll/useElementOnScroll'
const props = defineProps({
  project: Object
})
const project = { ...props.project }
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

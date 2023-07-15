<template>
  <div
    ref="elementRef"
    :id="project.name"
    class="online-project-card"
    @click="handleProjectName"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <img
      ref="imgRef"
      :src="`src/assets/images/${props.project.image_link}`"
      :alt="'Illustration du projet ' + props.project.name"
      :id="`illuproject-${project.id}`"
    />
    <div class="online-project-content">
      <h3>{{ props.project.name }}</h3>
      <ul>
        <li v-for="tool in props.project.tools" :key="tool">{{ tool }}</li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { ProjectInterface } from '@/interfaces/Project'
import { useProjectOnMousemove } from '@/hooks/homeView/workSection/useProjectOnMouseMove'
import { useElementOnScroll } from '@/hooks/scroll/useElementOnScroll'

const props = defineProps<{
  project: ProjectInterface
  handleProjectName: (event: MouseEvent) => void
}>()

const { elementRef } = useElementOnScroll({ threshold: 0.1, rootMargin: '0px' })
const { imgRef, handleMouseEnter, handleMouseLeave } = useProjectOnMousemove()
</script>
<style scoped>
@media screen and (min-width: 1025px) {
  img {
    width: calc(((100vw - (100vw / 6)) / 3) + 100px);
    height: auto;
  }
}
@media screen and (max-width: 1024px) {
  img {
    width: auto;
    height: 100%;
  }
  ul {
    height: 100px;
    overflow: hidden;
  }
  li {
    height: 28px;
  }
}
@media screen and (min-width: 768px) {
  .online-project-card {
    height: 300px;
  }
  .online-project-card:hover {
    width: 125%;
  }
}
@media screen and (max-width: 767px) {
  .online-project-card {
    height: 150px;
  }
  .online-project-card:hover {
    width: 200%;
  }
  .online-project-content h3 {
    font-size: 0.9em;
  }
  .online-project-content ul {
    display: none !important;
  }
}
.online-project-card {
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 12px;
  transition: 0.18s ease-in-out;
  transform: translateY(10%);
  opacity: 0;
}
.online-project-card * {
  pointer-events: none;
}
.online-project-card:hover .online-project-content {
  background-color: var(--clr-2-op7);
  backdrop-filter: blur(3px);
}
.online-project-card:hover h3 {
  opacity: 1;
  transform: translateY(0);
}
.online-project-card:hover li {
  animation: toolsAppearsAnim 0.11s ease-in-out forwards;
}
.online-project-card img {
  position: absolute;
}
.online-project-content {
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: transparent;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;
  transition: width 0.09s linear, background-color 0.15s ease-in-out;
  transform-origin: top;
}
h3 {
  text-align: center;
  width: 70%;
  opacity: 0;
  transition: transform 0.2s ease-in, opacity 0.25s ease-out;
  transform: translateY(-200px);
}
ul {
  width: 70%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
}
li {
  border-radius: 8px;
  padding: 4px 8px;
  background-color: var(--clr-1);
  color: var(--clr-2);
  opacity: 0;
  transform: scale(0) translateY(5px);
}
#illuproject-6 {
  transform: translate(var(--img6-trans-x), var(--img6-trans-y));
}
#illuproject-7 {
  transform: translate(var(--img7-trans-x), var(--img7-trans-y));
}
#illuproject-8 {
  transform: translate(var(--img8-trans-x), var(--img8-trans-y));
}
</style>
@/hooks/homeView/workSection/useProjectOnMouseMove @/hooks/scroll/useElementOnScroll

<template>
  <main v-if="rightProject !== undefined" class="project">
    <BackgroundLayout>
      <img :src="BackgroundImage" alt="splashed ink" />
    </BackgroundLayout>
    <h1 ref="element">
      {{ mainTitleValue }} <br />
      <span>{{ detailsTitleValue }}</span>
    </h1>
    <section class="project-content">
      <ScreenshotsContainer :project="rightProject" />
      <DetailsContainer :project="rightProject" />
    </section>
    <ButtonsContainer :project="rightProject" />
  </main>
  <ErrorLayout v-else resource="project" redirection="aboutMyWork" button-content="projects" />
</template>
<script setup lang="ts">
import { projectsData } from '@/data/projectsData'
import type { ProjectInterface } from '@/interfaces/Project'
import ScreenshotsContainer from '@/components/projectView/ScreenshotsContainer.vue'
import DetailsContainer from '@/components/projectView/DetailsContainer.vue'
import ButtonsContainer from '@/components/projectView/ButtonsContainer.vue'
import BackgroundLayout from '@/components/BackgroundLayout.vue'
import BackgroundImage from '@/assets/images/ink-splash.webp'
import { useElementOnScroll } from '@/hooks/useElementOnScroll'
import ErrorLayout from '@/components/ErrorLayout.vue'
import type { Ref } from 'vue'

const props = defineProps({
  index: {
    type: String,
    required: true
  }
})
let mainTitleValue: string, detailsTitleValue: string, element: Ref<HTMLDivElement | null>
const rightProject = projectsData.find((project) => project.id === parseInt(props.index))
const handleTitle = (project: ProjectInterface) => {
  let mainTitle, detailsTitle
  if (project.name.includes(',')) {
    const titleArr = project.name.split(',')
    mainTitle = titleArr[0]
    detailsTitle = titleArr[1]
  } else {
    const titleArr = project.name.split(' - ')
    mainTitle = titleArr[0]
    detailsTitle = titleArr[1]
  }
  return { mainTitle, detailsTitle }
}
if (typeof rightProject !== 'undefined') {
  console.log('got here')
  const { mainTitle, detailsTitle } = handleTitle(rightProject!)
  const { elementRef } = useElementOnScroll({ threshold: 0.25, rootMargin: '0px' })
  mainTitleValue = mainTitle
  detailsTitleValue = detailsTitle
  element = elementRef
}
</script>
<style scoped>
@media screen and (min-width: 1025px) {
  img {
    transform: translate(-60%, -35%);
  }
  h1 {
    font-size: 3em;
  }
  span {
    font-size: 0.5em;
  }
}
@media screen and (max-width: 1024px) {
  img {
    transform: translate(-60%, -35%) scale(0.75);
  }
  h1 {
    font-size: 2.5em;
  }
  span {
    font-size: 0.5em;
  }
  .project-content {
    flex-direction: column;
  }
}
@media screen and (max-width: 767px) {
  img {
    transform: translate(-60%, -35%) scale(0.5);
  }
  h1 {
    font-size: 2em;
  }
  span {
    font-size: 0.5em;
  }
  .project-content {
    flex-direction: column;
    gap: 15px;
  }
}
h1 {
  padding: 0 8.333%;
  margin-top: 120px;
  position: relative;
  z-index: 1;
  text-align: center;
  text-transform: uppercase;
  color: transparent;
  background: linear-gradient(
    90deg,
    var(--clr-2-op7),
    var(--clr-2-op5),
    var(--clr-2-op8),
    var(--clr-2),
    var(--clr-2-op7),
    var(--clr-2-op5),
    var(--clr-2-op3)
  );
  background-position: 0%;
  background-size: 1000%;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text !important;
  -webkit-text-stroke: 1px var(--clr-1-op5);
  background-clip: text;
  animation: backgroundTitleAnim 11s linear alternate infinite;
  opacity: 0;
  transform: translateY(-60%);
  transition: 0.5s ease-out;
  display: flex;
  flex-direction: column;
  gap: 0px;
}
img {
  opacity: 0;
  animation: increaseOpacity 1s cubic-bezier(1, 0, 0.82, 0.96) forwards;
}
.project {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;
  min-height: 100vh;
}
h1.visible {
  opacity: 1;
  transform: translateY(0);
}
section {
  padding-left: calc((100vw - 16px) / 12);
  padding-right: calc((100vw - 16px) / 12);
}
.project-content {
  position: relative;
  display: flex;
  justify-content: space-between;
  min-height: calc(100vh - 427px);
  margin-bottom: 100px;
}
</style>

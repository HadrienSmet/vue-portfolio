<template>
  <div class="online-projects-division">
    <h2>My online projects</h2>
    <div class="online-projects-container">
      <online-project-card
        v-for="project in onlineProjects"
        :key="project.id"
        :project="project"
        :handle-project-name="handleProjectName"
      />
    </div>
    <p class="default-description" v-if="selectedProjectName === null">
      Click on a card to learn more about the site and to display a link
    </p>
    <div class="online-project-details" v-else>
      <p>{{ selectedProject?.description }}</p>
      <gradient-border>
        <a :href="selectedProject?.link!">See the website</a>
      </gradient-border>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
import { projectsData } from '../../../data/projectsData'
import OnlineProjectCard from './OnlineProjectCard.vue'
import GradientBorder from '@/components/GradientBorder.vue'
import type { ProjectInterface } from '@/interfaces/Project'

const selectedProjectName = ref<string | null>(null)
const selectedProject = ref<ProjectInterface | undefined>(undefined)
const handleProjectName = (e: MouseEvent) => {
  const target = e.target as Element
  selectedProjectName.value = target.id
}

watch(selectedProjectName, () => {
  selectedProject.value = projectsData.find((project) => project.name === selectedProjectName.value)
})

const onlineProjects = projectsData
  .filter((project) => project.link !== undefined)
  .sort((a, b) => b.id - a.id)
</script>
<style scoped>
@media screen and (min-width: 1025px) {
  .gradient {
    width: 30%;
  }
}
@media screen and (max-width: 1024px) {
  .gradient {
    width: 90%;
  }
}
@media screen and (min-width: 768px) {
  .online-project-details {
    padding: 0 12.5%;
    min-height: calc(100vh - 603px);
  }
  .online-project-details p {
    font-size: 1.4em;
    max-height: calc(100vh - 703px);
  }
}
h2 {
  margin: 0;
  text-transform: uppercase;
  font-size: 2em;
  font-family: 'title-fonts';
}
.online-projects-division {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.online-projects-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
.online-project-details {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
.online-project-details p {
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  line-clamp: 7;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.default-description {
  margin-top: 4%;
  text-align: center;
}
.gradient {
  position: relative;
  border: 3px solid transparent;
  transition: 0.2s;
  height: 60px;
  /* transform: translateX(10%);
  opacity: 0; */
}
.gradient:hover {
  background: linear-gradient(var(--clr-1), var(--clr-1)),
    linear-gradient(var(--clr-2), var(--clr-2));
  background-clip: padding-box, border-box;
  background-origin: border-box;
  translate: 0px -3px;
  scale: 1.05 0.95;
}
a {
  display: inline-block;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  text-transform: uppercase;
  font-weight: 900;

  background: linear-gradient(
    90deg,
    var(--clr-2-op3),
    var(--clr-2),
    var(--clr-2-op2),
    var(--clr-2),
    var(--clr-2-op5),
    var(--clr-2),
    var(--clr-2-op2)
  );
  background-position: 0%;
  background-size: 1000%;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: backgroundTitleAnim 20s linear alternate infinite;
}
.gradient:hover a {
  background: var(--clr-2);
  background-clip: text !important;
  -webkit-background-clip: text !important;
}
</style>
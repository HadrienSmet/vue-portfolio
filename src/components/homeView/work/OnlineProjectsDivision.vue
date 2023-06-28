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
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { projectsData } from '../../../data/projectsData'
import OnlineProjectCard from './OnlineProjectCard.vue'

const selectedProjectName = ref<string | null>(null)
const handleProjectName = (e: MouseEvent) => {
  const target = e.target as Element
  selectedProjectName.value = target.id
}

const onlineProjects = projectsData
  .filter((project) => project.link !== undefined)
  .sort((a, b) => b.id - a.id)
</script>
<style scoped>
.online-projects-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
h2 {
  text-transform: uppercase;
  font-size: 2em;
  font-family: 'title-fonts';
}
</style>

<template>
  <section id="projects" class="section-projects">
    <h2>All my projects</h2>
    <div class="projects-container">
      <ProjectCard v-for="project in projectsData" :key="project.name" :project="project" />
    </div>
  </section>
</template>
<script setup lang="ts">
import { projectsData } from '@/data/projectsData'
import ProjectCard from '@/components/aboutMyWorkView/projectsSection/ProjectCard.vue'
projectsData.sort((a, b) => b.id - a.id)
</script>
<style scoped>
h2 {
  opacity: 0;
  transform: translateX(-10%);
  transition: 0.7s ease-out;
}
h2.visible {
  opacity: 1;
  transform: translateX(0);
}
.section-projects {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 75px;
  .projects-container {
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
  }
}
.projects-container {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
}
</style>

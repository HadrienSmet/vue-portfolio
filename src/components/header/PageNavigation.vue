<template>
  <nav v-if="currentPath === ''">
    <a href="#intro">Intro</a>
    <a href="#work">Projects</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
  </nav>
  <nav v-else-if="currentPath === 'about-my-work'">
    <a href="#stacks">Stacks</a>
    <a href="#projects">Projects</a>
  </nav>
  <nav v-else-if="currentPath === 'about-me'">
    <a href="#my-intro">Intro</a>
    <a href="#hobbies">Hobbies</a>
    <a href="#perso">Personality</a>
  </nav>
  <nav v-else></nav>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const currentPath = ref(window.location.pathname.split('/')[1])

const updateCurrentPath = () => {
  currentPath.value = window.location.pathname.split('/')[1]
}
watch(
  route,
  () => {
    updateCurrentPath()
  },
  { immediate: true }
)
</script>
<style scoped>
nav {
  display: flex;
  justify-content: space-around;
  width: 40vw;
}
a {
  text-transform: uppercase;
  position: relative;
  letter-spacing: 2px;
  color: var(--clr-1);
}
a::before {
  position: absolute;
  content: '';
  width: 100%;
  height: 2px;
  bottom: -2px;
  background-color: var(--clr-1);
  transition: 0.2s ease-in-out;
  transform: scaleX(0);
  transform-origin: left;
}
a:hover::before {
  transform: scaleX(1);
}
</style>

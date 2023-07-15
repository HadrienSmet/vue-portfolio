<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/header/AppHeader.vue'
import AppFooter from './components/footer/AppFooter.vue'
import AppNavigation from './components/AppNavigation.vue'
</script>

<template>
  <AppHeader />
  <RouterView />
  <AppNavigation />
  <AppFooter />
</template>

<style scoped></style>

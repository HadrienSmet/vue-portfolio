<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import AppHeader from './components/header/AppHeader.vue'
import AppFooter from './components/footer/AppFooter.vue'
import AppNavigation from './components/AppNavigation.vue'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <AppHeader />
  <!-- <header>

    <div class="wrapper"> -->
  <!-- <HelloWorld msg="You did it!" /> -->

  <!-- <nav>
        <RouterLink to="/">Home</RouterLink> -->
  <!-- <RouterLink to="/about">About</RouterLink> -->
  <!-- </nav>
    </div>
  </header> -->

  <RouterView />
  <AppNavigation />
  <AppFooter />
</template>

<style scoped></style>

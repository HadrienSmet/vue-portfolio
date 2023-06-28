<script setup lang="ts">
import BackgroundLayout from '../components/BackgroundLayout.vue'
import BackgroundImage from '../assets/images/ink-splash.webp'
import HomeIntro from '../components/homeView/intro/HomeIntro.vue'
import HomeWork from '../components/homeView/work/HomeWork.vue'
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <BackgroundLayout>
      <img :src="BackgroundImage" alt="splashed ink" />
    </BackgroundLayout>
    <HomeIntro />
    <HomeWork />
  </main>
</template>
<style scoped>
@media screen and (min-width: 768px) {
  .background-layout img {
    transform: translate(-45%, -50%);
  }
}
@media screen and (max-width: 767px) {
  .background-layout img {
    transform: translate(-50%, -55%) scale(0.85);
  }
}
.background-layout img {
  position: absolute;
  top: 250px;
  left: calc((100vw - 16px) / 12);
  transform: translate(-45%, -50%);

  pointer-events: none;
  /* opacity: 0;
  animation: increaseOpacity 1s cubic-bezier(1, 0, 0.82, 0.96) forwards; */
}
section {
  height: 100vh;
  padding-left: calc((100vw - 16px) / 12);
  padding-right: calc((100vw - 16px) / 12);
}
</style>

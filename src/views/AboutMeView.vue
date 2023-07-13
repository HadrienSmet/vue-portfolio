<template>
  <main id="my-intro" class="about-me">
    <BackgroundLayout>
      <img :src="BackgroundImage" alt="splashed ink" />
    </BackgroundLayout>
    <h1 ref="elementRef">About me</h1>
    <FirstSection />
    <SecondSection />
  </main>
</template>
<script lang="ts" setup>
import BackgroundLayout from '@/components/BackgroundLayout.vue'
import BackgroundImage from '@/assets/images/ink-splash.webp'
import FirstSection from '@/components/aboutMeView/firstSection/FirstSection.vue'
import SecondSection from '@/components/aboutMeView/secondSection/SecondSection.vue'
import { useElementOnScroll } from '@/hooks/useElementOnScroll'

const { elementRef } = useElementOnScroll({ threshold: 0.1, rootMargin: '0px' })
</script>
<style scoped>
@media screen and (min-width: 1025px) {
  img {
    transform: translate(40%, -45%) rotate(250deg);
  }
  h1 {
    font-size: 5em;
    -webkit-text-stroke: 3px var(--clr-2);
    background: var(--clr-1-op5);
  }
}
@media screen and (max-width: 1024px) {
  img {
    transform: translate(33%, -45%) rotate(250deg);
  }
  h1 {
    font-size: 4em;
    background: linear-gradient(
      90deg,
      var(--clr-1-op4),
      var(--clr-1-op7),
      var(--clr-1-op5),
      var(--clr-1-op3),
      var(--clr-1-op6),
      var(--clr-1-op9),
      var(--clr-1-op7),
      var(--clr-1)
    );
    background-size: 1000%;
    background-position: 0%;
    background-clip: text;
    -webkit-background-clip: text !important;
    animation: backgroundTitleAnim 13s linear alternate infinite;
  }
}
@media screen and (max-width: 767px) {
  h1 {
    font-size: 3em;
  }
}
.about-me {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
}
img {
  z-index: 0;
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0;
  animation: increaseOpacity 1s cubic-bezier(1, 0, 0.82, 0.96) forwards;
}
h1 {
  margin-top: 150px;
  position: relative;
  z-index: 1;
  text-align: center;
  text-transform: uppercase;
  color: transparent;
  opacity: 0;
  transform: translateY(-60%);
  transition: 0.5s ease-out;
}
h1.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>

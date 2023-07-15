<template>
  <div class="error-layout">
    <BackgroundLayout>
      <img :src="BackgroundImage" alt="Splash ink" />
    </BackgroundLayout>
    <h1>Oops!</h1>
    <h3>The {{ props.resource }} you are looking for does not exist.</h3>
    <GradientBorder>
      <RouterLink :to="{ name: props.redirection }"
        >Back to {{ props.buttonContent }} page</RouterLink
      >
    </GradientBorder>
  </div>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router'
import BackgroundLayout from '@/components/BackgroundLayout.vue'
import BackgroundImage from '@/assets/images/ink-splash.webp'
import GradientBorder from '@/components/GradientBorder.vue'
const props = defineProps({
  resource: {
    type: String,
    required: true
  },
  redirection: {
    type: String,
    required: true
  },
  buttonContent: {
    type: String,
    required: true
  }
})
</script>
<style scoped>
.error-layout {
  height: calc(100vh - 160px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
}
img {
  transform: translate(-60%, -35%);
}
h1 {
  z-index: 1;
  font-size: 8vh;
  font-family: 'title-fonts';
  color: transparent;
  background: linear-gradient(
    90deg,
    var(--clr-2-op4),
    var(--clr-2-op9),
    var(--clr-2-op3),
    var(--clr-2),
    var(--clr-2-op5),
    var(--clr-2-op8),
    var(--clr-2-op3),
    var(--clr-2-op6),
    var(--clr-2)
  );
  background-position: 0%;
  background-size: 1000%;
  background-clip: text;
  -webkit-background-clip: text !important;
}
h3 {
  z-index: 1;
  color: var(--clr-2-op7);
}
.gradient {
  margin-top: 50px;
  padding: 15px 25px;
  border-radius: 5px;
  position: relative;
  border: 3px solid transparent;
  transition: 0.2s;
  transform: translateX(10%);
  opacity: 0;
  animation: appearFromRight 0.45s ease-out 0.5s forwards;
}
.gradient:hover {
  background: linear-gradient(var(--clr-1), var(--clr-1)),
    linear-gradient(var(--clr-2), var(--clr-2));
  background-clip: padding-box, border-box;
  background-origin: border-box;
  translate: 0px -3px;
  scale: 1.05 0.95;
}
.gradient:hover a {
  color: var(--clr-2);
}
a {
  /* text-transform: uppercase; */
  font-family: 'title-fonts';
  color: var(--clr-2-op7);
}
</style>

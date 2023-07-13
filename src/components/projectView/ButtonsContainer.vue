<template>
  <div class="project__buttons-container">
    <GradientBorder>
      <a :href="props.project!.code_link" target="_blank">Code</a>
    </GradientBorder>
    <GradientBorder v-if="project!.code_server_link">
      <a :href="props.project!.code_server_link" target="_blank">Server code</a>
    </GradientBorder>
    <GradientBorder v-if="project!.link">
      <a :href="props.project!.link" target="_blank">Website</a>
    </GradientBorder>
  </div>
</template>
<script setup lang="ts">
import GradientBorder from '@/components/GradientBorder.vue'
const props = defineProps({
  project: Object
})
console.log(props.project!.code_server_link)
</script>
<style scoped>
@media screen and (min-width: 768px) {
  .project__buttons-container .gradient {
    width: 30%;
  }
}
@media screen and (max-width: 767px) {
  .project__buttons-container {
    flex-direction: column;
  }
  .gradient {
    width: 100%;
  }
}
a {
  transition: 0.2s ease-out;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-weight: 900;
  color: transparent;
  background: linear-gradient(
    90deg,
    var(--clr-2-op3),
    var(--clr-2),
    var(--clr-2-op5),
    var(--clr-2),
    var(--clr-2-op4),
    var(--clr-2),
    var(--clr-2-op5)
  );
  background-position: 0%;
  background-size: 1000%;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: backgroundTitleAnim 20s linear 0.45s alternate infinite;
}
.project__buttons-container {
  z-index: 1;
  padding: 0 8.33%;
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 50px;
}
.gradient {
  height: 60px;
  border-radius: 80px;
  border: 3px solid transparent;
  transition: 0.15s ease-in-out;
  /* transform: translateY(60%);
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
.gradient:hover a {
  background: var(--clr-2);
  background-clip: text;
  -webkit-background-clip: text !important;
  transform: scale(0.95) translateY(2px);
}
.project__btn-container.visible .gradient {
  animation: appearFromBottom 0.25s ease-out forwards;
}
</style>

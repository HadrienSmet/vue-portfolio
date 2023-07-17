<template>
  <div class="screenshots-container">
    <img
      v-for="(image, index) in props.project!.images"
      :key="`img-${index}`"
      :src="image"
      :alt="`Image number ${index} of ${project!.name}`"
      @click="openNewWindow(image)"
    />
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  project: Object
})
const openNewWindow = (img: string) => window.open(img, '_blank')
</script>
<style scoped>
@media screen and (min-width: 1025px) {
  img {
    width: 100%;
    height: 124px;
  }
  .screenshots-container {
    flex-direction: column;
    width: 256px;
  }
}
@media screen and (max-width: 1024px) {
  img {
    width: calc((100vw - (100vw / 6) - 75px) / 2);
    height: calc((100vw - (100vw / 6) - 75px) / 4);
  }
  .screenshots-container {
    position: relative;
    justify-content: center;
  }
}
@media screen and (min-width: 768px) {
  .screenshots-container {
    gap: 25px;
  }
}
@media screen and (max-width: 767px) {
  img {
    width: calc((100vw - (100vw / 6) - 10px) / 2);
    height: calc((100vw - (100vw / 6) - 75px) / 4);
  }
  .screenshots-container {
    gap: 10px;
  }
}
img {
  object-fit: cover;
  cursor: pointer;
  border-radius: 8px;
  transform: translateX(-10);
  box-shadow: 0px 1px 4px 1px var(--clr-2-op2);
  opacity: 0;
  transition: 0.2s ease-in-out;
  animation: appearFromLeft 0.3s ease-out forwards;
}
img:hover {
  scale: 1.05 1;
}
.screenshots-container {
  display: flex;
  flex-wrap: wrap;
}
em {
  padding: 8px;
  text-align: center;
  background-color: var(--clr-1-op5);
  opacity: 0;
  animation: increaseOpacity 0.6s ease-out 0.9s forwards;
}
</style>

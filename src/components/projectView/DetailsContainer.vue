<template>
  <div class="project-details">
    <p>{{ props.project!.description }}</p>
    <ul class="project-tools" ref="elementRef">
      <li v-for="tool in project!.tools" :key="tool">{{ tool }}</li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { useElementOnScroll } from '@/hooks/useElementOnScroll'
const props = defineProps({
  project: Object
})
const { elementRef } = useElementOnScroll({ threshold: 0.25, rootMargin: '0px' })
</script>
<style scoped>
@media screen and (min-width: 1025px) {
  .project-details {
    width: 60%;
  }
}
@media screen and (max-width: 1024px) {
  ul {
    flex-wrap: wrap;
  }
  .project-details {
    width: 100%;
  }
}
@media screen and (min-width: 768px) {
  p {
    font-size: 1.5em;
  }
}
@media screen and (max-width: 767px) {
  p {
    font-size: 1em;
  }
}
p {
  border-radius: 8px;
  padding: 15px;
  background-color: var(--clr-1-op5);
  line-height: 1.5;
  color: var(--clr-2-op7);
  text-align: center;
  /* transform: translateX(10%);
  opacity: 0; */
  transition: 0.5s ease-out;
}
p.visible {
  transform: translateX(0);
  opacity: 1;
}
ul {
  margin-top: 15px;
  display: flex;
  justify-content: center;
  gap: 15px;
}
ul.visible li {
  animation: appearFromBottom 0.12s ease-out forwards;
}
li {
  padding: 10px;
  background-color: var(--clr-2-op8);
  color: var(--clr-1);
  border-radius: 4px;
  transform: translateY(60%);
  opacity: 0;
}
.project-details {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>

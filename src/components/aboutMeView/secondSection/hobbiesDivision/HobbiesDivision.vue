<template>
  <div class="hobbies-division">
    <h2 ref="elementRef">Hobbies</h2>
    <ul id="hobbies" class="hobbies-container">
      <HobbyElement
        v-for="hobby in hobbyArray"
        :key="hobby.index"
        :index="hobby.index"
        :text="hobby.text"
      />
    </ul>
    <div class="hobbies-pictures">
      <HobbyImage
        v-for="hobby in hobbyArray"
        :key="'img-' + hobby.index"
        :index="hobby.index"
        :url="hobby.mediaUrl"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import HobbyElement from './HobbyElement.vue'
import { hobbyArray } from '@/data/hobbiesData'
import HobbyImage from './HobbyImage.vue'
import { useElementOnScroll } from '@/hooks/scroll/useElementOnScroll'

const { elementRef } = useElementOnScroll({ threshold: 0.5, rootMargin: '0px' })
</script>
<style scoped>
@media screen and (min-width: 1025px) {
  .hobbies-pictures {
    height: 100%;
    position: fixed;
  }
}
@media screen and (max-width: 1024px) {
  .hobbies-division {
    position: relative;
  }
  .hobbies-pictures {
    position: absolute;
    margin-top: calc(((100vh - 105px) / 8) + 63px);
  }
}
.hobbies-division {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.hobbies-pictures {
  pointer-events: none;
  top: 0;
  left: 0;
  width: 100%;
}
h2 {
  text-transform: uppercase;
  font-size: 2em;
  font-family: 'title-fonts';
  color: var(--clr-2-op8);
  padding-left: calc(100vh / 12);
  transform: translateX(-10%);
  opacity: 0;
  transition: 0.5s ease-out;
}
h2.visible {
  transform: translateX(0);
  opacity: 1;
}
ul {
  display: flex;
  flex-direction: column;
}
ul:hover .hobby {
  color: var(--clr-2-op5);
}
</style>
@/hooks/scroll/useElementOnScroll

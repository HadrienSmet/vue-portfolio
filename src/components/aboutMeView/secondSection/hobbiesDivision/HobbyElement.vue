<template>
  <li
    class="hobby-element"
    ref="elementRef"
    :id="`hobby-${props.index}`"
    @mouseenter="handleActiveIndex"
    @mouseleave="resetActiveIndex"
  >
    <div class="hobby-background"></div>
    <div class="hobby-content">
      <h3>{{ props.text }}</h3>
    </div>
  </li>
</template>
<script setup lang="ts">
import { useHobbyIndexStore } from '@/stores/HobbyIndexStore'
import { useElementOnScroll } from '@/hooks/useElementOnScroll'

const props = defineProps({
  index: Number,
  text: String
})
const store = useHobbyIndexStore()
const { handleActiveIndex, resetActiveIndex } = store
const { elementRef } = useElementOnScroll({ threshold: 0.8, rootMargin: '0px' })
</script>
<style scoped>
@media screen and (min-width: 1025px) {
  .hobby-element {
    height: calc((100vh - 160px) / 4);
  }
  .hobby-element:hover::after {
    transform: translateY(-105%);
  }
  .hobby-element:hover .hobby-content h3 {
    color: var(--clr-1);
  }
  h3 {
    font-size: clamp(25px, 7vh, 80px);
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
@media screen and (max-width: 1024px) {
  .hobby-element {
    height: calc((100vh - 105px) / 4);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .hobby-element.visible::after {
    transform: translateY(-105%);
  }
  .hobby-element.visible h3 {
    color: var(--clr-1);
  }
  h3 {
    text-align: center;
  }
}
@media screen and (max-width: 1024px) and (min-width: 768px) {
  h3 {
    font-size: clamp(18px, 6vh, 28px);
  }
}
@media screen and (max-width: 767px) {
  h3 {
    font-size: clamp(12px, 4vh, 20px);
  }
}
.hobby-element {
  position: relative;
  color: var(--clr-2);
  letter-spacing: 2px;
  overflow: hidden;
}
.hobby-element::before {
  z-index: 2;
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background-color: var(--clr-2);
  transform: scaleX(0);
  transition: 0.75s ease-out;
  transform-origin: left;
}
.hobby-element::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: var(--clr-1);
  transition: 0.25s ease-in-out;
}
.hobby-element.visible::before {
  transform: scaleX(1);
}
.hobby-element.visible .hobby-content h3 {
  opacity: 1;
  transform: translateY(0);
}
.hobby-element * {
  pointer-events: none;
}
.hobby-background {
  position: absolute;
  width: 100%;
  height: 100%;
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
  animation: backgroundTitleAnim 20s linear alternate infinite;
}
.hobby-content {
  position: relative;
  z-index: 1;
  padding: 0 5%;
}
h3 {
  font-family: 'graff-fonts';
  opacity: 0;
  transform: translateY(50%);
  transition: 0.47s ease-in-out;
}
</style>

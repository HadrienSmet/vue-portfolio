<template>
  <img
    v-if="windowsWidth > 1024"
    :src="props.url"
    :alt="`Picture of my hobby number ${props.index}`"
    :class="isActive && 'is-active'"
    :style="{ transform: `translate(${x + 100}px, ${y - 350}px) rotate(15deg)` }"
  />
  <img
    v-else
    :src="props.url"
    :alt="`Picture of my hobby number ${props.index}`"
    :id="`img-${props.index}`"
    class="mobile-hobby"
    ref="imageRef"
  />
</template>
<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted, type Ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useHobbyIndexStore } from '@/stores/HobbyIndexStore'
import { useMousePosition } from '@/hooks/useMousePosition'
import { useElementOnScroll } from '@/hooks/scroll/useElementOnScroll'

const props = defineProps({
  url: String,
  index: Number
})
let imageRef: Ref<HTMLDivElement | null> | null = null
const useActiveIndex = () => {
  const isActive = ref(false)
  const store = useHobbyIndexStore()
  const { activeIndex } = storeToRefs(store)
  watch(
    activeIndex,
    () => {
      isActive.value = props.index === activeIndex.value
    },
    { immediate: true }
  )
  return { isActive }
}
const useWindowWidth = () => {
  const windowsWidth = ref(window.innerWidth)

  const handleWindowsWidth = () => (windowsWidth.value = window.innerWidth)

  onMounted(() => {
    window.addEventListener('resize', () => handleWindowsWidth())
  }),
    onUnmounted(() => {
      window.removeEventListener('resize', () => handleWindowsWidth())
    })
  return { windowsWidth }
}
const { x, y } = useMousePosition()
const { isActive } = useActiveIndex()
const { windowsWidth } = useWindowWidth()

watch(
  windowsWidth,
  () => {
    if (windowsWidth.value < 1025) {
      const { elementRef } = useElementOnScroll({ threshold: 0.1, rootMargin: '0px' })
      imageRef = elementRef
    }
  },
  { immediate: true }
)
</script>
<style scoped>
@media screen and (min-width: 1025px) {
  img {
    opacity: 0;
    width: auto;
    height: auto;
    pointer-events: none;
  }
}
@media screen and (max-width: 1024px) {
  img {
    transform: translateY(-50%);
  }
  .mobile-hobby {
    opacity: 0;
    scale: 0.1;
    rotate: 0deg;
    transition: scale 0.5s ease-in-out, opacity 0.7s ease-out, rotate 0.35s ease-in;
  }
  .mobile-hobby.visible {
    opacity: 1;
    scale: 1;
    rotate: 372deg;
  }
}
@media screen and (max-width: 1024px) and (min-width: 768px) {
  img {
    height: 180px;
    width: 260px;
  }
  #img-0 {
    translate: 20px 0;
  }
  #img-1 {
    translate: calc(100vw - 325px) calc((100vh - 105px) / 4);
  }
  #img-2 {
    translate: 20px calc((100vh - 105px) / 2);
  }
  #img-3 {
    translate: calc(100vw - 325px) calc(100vh - 105px - ((100vh - 105px) / 4));
  }
}
@media screen and (max-width: 767px) {
  img {
    height: 120px;
    width: 180px;
  }
  #img-0 {
    translate: 20px 0;
  }
  #img-1 {
    translate: calc(100vw - 230px) calc((100vh - 105px) / 4);
  }
  #img-2 {
    translate: 20px calc((100vh - 105px) / 2);
  }
  #img-3 {
    translate: calc(100vw - 230px) calc(100vh - 105px - ((100vh - 105px) / 4));
  }
}
img {
  position: absolute;
}
img.is-active {
  opacity: 1;
}
</style>
@/hooks/scroll/useElementOnScroll

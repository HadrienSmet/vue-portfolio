<template>
  <img
    :src="mediaUrl"
    :alt="`Picture of my hobby number ${props.index}`"
    :class="isActive && 'is-active'"
    :style="{ transform: `translate(${x + 100}px, ${y - 350}px) rotate(15deg)` }"
  />
</template>
<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useHobbyIndexStore } from '@/stores/HobbyIndexStore'
import { useMousePosition } from '@/hooks/useMousePosition'

const props = defineProps({
  url: String,
  index: Number
})
const isActive = ref(false)
const { x, y } = useMousePosition()
const store = useHobbyIndexStore()
const { activeIndex } = storeToRefs(store)
const mediaUrl = computed(() => {
  return `/src/assets/images/${props.url}`
})
watch(
  activeIndex,
  () => {
    isActive.value = props.index === activeIndex.value
  },
  { immediate: true }
)
</script>
<style scoped>
img {
  opacity: 0;
  position: absolute;
  width: auto;
  height: auto;
  pointer-events: none;
}
img.is-active {
  opacity: 1;
}
</style>

<template>
  <div class="hobbies-division">
    <h2>Hobbies</h2>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const useHobbyIndex = () => {
  const activeIndex = ref(-1)
  const resetActiveIndex = () => (activeIndex.value = -1)
  const handleActiveIndex = (e: MouseEvent) => {
    const element = e.target as HTMLLIElement
    const elementIndex = element.id.split('-')[1]
    activeIndex.value = parseInt(elementIndex)
  }
  return { activeIndex, handleActiveIndex, resetActiveIndex }
}

const { activeIndex, handleActiveIndex, resetActiveIndex } = useHobbyIndex()
</script>
<style scoped></style>

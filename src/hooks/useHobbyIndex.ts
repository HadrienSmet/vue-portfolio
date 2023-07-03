import { ref } from 'vue'

export const useHobbyIndex = () => {
  const activeIndex = ref(-1)
  const resetActiveIndex = () => (activeIndex.value = -1)
  const handleActiveIndex = (index: number) => (activeIndex.value = index)
  return { activeIndex, handleActiveIndex, resetActiveIndex }
}

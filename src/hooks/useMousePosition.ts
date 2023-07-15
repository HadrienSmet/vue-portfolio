import { onUnmounted, ref, watch } from 'vue'

export const useMousePosition = () => {
  const x = ref(0)
  const y = ref(0)
  const handleMousePosition = (e: MouseEvent) => {
    x.value = e.clientX
    y.value = e.clientY
  }
  watch(
    [x, y],
    () => {
      document.addEventListener('mousemove', handleMousePosition)
    },
    { immediate: true }
  )
  onUnmounted(() => {
    document.removeEventListener('mousemove', handleMousePosition)
  })

  return { x, y }
}

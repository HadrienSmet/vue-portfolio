import { ref, onUnmounted, watch } from 'vue'
import { useWindowSize } from './useWindowSize'

export function useProjectOnMousemove() {
  const windowSize = ref(useWindowSize())
  const isHover = ref(false)
  const imgRef = ref<HTMLImageElement | null>(null)

  const handleMouseEnter = () => (isHover.value = true)
  const handleMouseLeave = () => (isHover.value = false)
  const handleMouseMove = (e: MouseEvent) => {
    const rect = imgRef.value?.getBoundingClientRect()
    if (rect) {
      const index = imgRef.value?.id.split('-')[1]
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const ratioX = -(x / rect.width) * 40 + 20
      const ratioY = -(y / rect.height) * 40 + 20
      imgRef.value!.style.setProperty(`--img${index}-trans-x`, `${ratioX}px`)
      imgRef.value!.style.setProperty(`--img${index}-trans-y`, `${ratioY}px`)
    }
  }
  watch(isHover, () => {
    if (windowSize.value.windowSize.width >= 1025) {
      if (isHover.value == true) {
        window.addEventListener('mousemove', handleMouseMove)
      } else {
        window.removeEventListener('mousemove', handleMouseMove)
      }
    }
  })
  onUnmounted(() => {
    if (windowSize.value.windowSize.width >= 1025)
      window.removeEventListener('mousemove', handleMouseMove)
  })

  return {
    imgRef,
    handleMouseEnter,
    handleMouseLeave
  }
}

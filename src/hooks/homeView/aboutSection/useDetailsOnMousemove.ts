import { onUnmounted, ref, watch } from 'vue'
import { useWindowSize } from '../../useWindowSize'
import { calcRatioX } from '@/functions/calcRatioX'

export const useDetailsOnMousemove = () => {
  const screenWidth = ref(useWindowSize().windowSize.width)
  const myRef = ref<HTMLAnchorElement | null>(null)
  const workRef = ref<HTMLAnchorElement | null>(null)

  const handleDetailsOnMousemove = (e: MouseEvent) => {
    const ratioX = calcRatioX(e, screenWidth.value)
    if (ratioX < 50) {
      workRef.value?.classList.add('visible')
      myRef.value?.classList.remove('visible')
    } else {
      workRef.value?.classList.remove('visible')
      myRef.value?.classList.add('visible')
    }
  }
  watch(
    screenWidth,
    () => {
      if (screenWidth.value > 1025) {
        window.addEventListener('mousemove', handleDetailsOnMousemove)
      } else {
        window.removeEventListener('mousemove', handleDetailsOnMousemove)
      }
    },
    { immediate: true }
  )
  onUnmounted(() => {
    window.removeEventListener('mousemove', handleDetailsOnMousemove)
  })

  return { myRef, workRef }
}

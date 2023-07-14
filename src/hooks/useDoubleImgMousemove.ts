import { onMounted, onUnmounted, ref, type Ref } from 'vue'
import { useWindowSize } from './useWindowSize'
import { calcRatioX } from '@/functions/calcRatioX'
import { useElementOnScroll } from './useElementOnScroll'

const handleDoubleImageTranslateX = (ratio: number, element: Ref<HTMLDivElement | null>) => {
  if (element.value !== null) {
    const translateInPx = 300 - 2 * 3 * ratio
    element.value.style.setProperty('--div-translation', `${translateInPx}px`)
  }
}
const handleContainersWidth = (
  ratio: number,
  firstRef: Ref<HTMLDivElement | null>,
  secondRef: Ref<HTMLDivElement | null>
) => {
  if (firstRef.value !== null && secondRef.value !== null) {
    if (ratio <= 25) {
      firstRef.value.style.setProperty('--first-div-width', `100%`)
      secondRef.value.style.setProperty('--second-div-width', `0%`)
    } else if (ratio >= 75) {
      firstRef.value.style.setProperty('--first-div-width', `0%`)
      secondRef.value.style.setProperty('--second-div-width', `100%`)
    } else {
      firstRef.value.style.setProperty(
        '--first-div-width',
        `${Math.floor(100 - (ratio - 25) * 2)}%`
      )
      secondRef.value.style.setProperty('--second-div-width', `${Math.ceil((ratio - 25) * 2)}%`)
    }
  }
}

export const useImagesOnMousemove = () => {
  const { elementRef } = useElementOnScroll({ threshold: 0.1, rootMargin: '0px' })
  const doubleImgRef = elementRef
  const firstImgContainerRef = ref<HTMLDivElement | null>(null)
  const secondImgContainerRef = ref<HTMLDivElement | null>(null)
  const windowWidth = ref(useWindowSize().windowSize.width)

  const handlePictureOnMouseMove = (e: MouseEvent) => {
    const ratioX = calcRatioX(e, windowWidth.value)
    handleDoubleImageTranslateX(ratioX, doubleImgRef)
    handleContainersWidth(ratioX, firstImgContainerRef, secondImgContainerRef)
  }
  onMounted(() => {
    window.addEventListener('mousemove', handlePictureOnMouseMove)
  })
  onUnmounted(() => {
    window.removeEventListener('mousemove', handlePictureOnMouseMove)
  })
  return {
    doubleImgRef,
    firstImgContainerRef,
    secondImgContainerRef
  }
}

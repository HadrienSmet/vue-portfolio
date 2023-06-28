import { ref, type Ref } from 'vue'
import { useWindowSize } from './useWindowSize'

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
      firstRef.value.style.setProperty('--first-div-width', `${100 - (ratio - 25) * 2}%`)
      secondRef.value.style.setProperty('--second-div-width', `${(ratio - 25) * 2}%`)
    }
  }
}

const useImagesOnMousemove = () => {
  const doubleImgRef = ref<HTMLDivElement | null>(null)
  const firstImgContainerRef = ref<HTMLDivElement | null>(null)
  const secondImgContainerRef = ref<HTMLDivElement | null>(null)
  const windowWidth = ref(useWindowSize().windowSize.width)
  const handlePictureOnMouseMove = (e: MouseEvent) => {}
}

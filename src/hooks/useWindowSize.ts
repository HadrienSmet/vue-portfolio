import { onMounted, onUnmounted, reactive } from 'vue'

export function useWindowSize() {
  const windowSize = reactive({
    width: window.innerWidth,
    height: window.innerHeight
  })

  const handler = () => {
    windowSize.width = window.innerWidth
    windowSize.height = window.innerHeight
  }

  onMounted(() => window.addEventListener('resize', handler))
  onUnmounted(() => window.removeEventListener('resize', handler))

  return { windowSize }
}

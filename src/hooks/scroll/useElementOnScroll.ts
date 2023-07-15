import { ref, onMounted } from 'vue'
import { useIntersectionObserver } from '@/hooks/scroll/useIntersectionObserver'

type HooksPropsType = {
  threshold: number
  rootMargin: string
}

export const useElementOnScroll = ({ threshold, rootMargin }: HooksPropsType) => {
  const elementRef = ref<HTMLDivElement | null>(null)
  const observer = useIntersectionObserver({
    threshold,
    rootMargin
  })
  onMounted(() => {
    observer.value!.observe(elementRef.value!)
  })

  return { elementRef }
}

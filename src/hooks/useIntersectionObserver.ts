import { ref } from 'vue'

type HooksPropsType = {
  threshold: number
  rootMargin: string
}

export const useIntersectionObserver = ({
  threshold: threshold,
  rootMargin: rootMargin
}: HooksPropsType) => {
  const observer = ref<IntersectionObserver | null>(null)
  const options = {
    root: null,
    threshold,
    rootMargin
  }
  const newObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      } else {
        entry.target.classList.remove('visible')
      }
    })
  }, options)
  observer.value = newObserver

  return observer
}

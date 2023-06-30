import { ref, watch, onUnmounted, type Ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useNavigationStore } from '@/stores/NavigationStore'

export const useHeaderOnScroll = (headerRef: Ref<HTMLDivElement | null>) => {
  const store = useNavigationStore()
  const { isNavOpen } = storeToRefs(store)
  const scrollY = ref(0)
  const handleScroll = () => {
    if (window.scrollY < scrollY.value) {
      headerRef.value!.style.top = '0'
    } else {
      headerRef.value!.style.top = '-104px'
    }
    scrollY.value = window.scrollY
  }
  watch(
    [scrollY, headerRef, isNavOpen],
    () => {
      if (!isNavOpen.value) window.addEventListener('scroll', handleScroll)
    },
    { immediate: true }
  )
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
}

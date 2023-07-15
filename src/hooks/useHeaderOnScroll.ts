import { ref, watch, onUnmounted, type Ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useNavigationStore } from '@/stores/NavigationStore'

export const useHeaderOnScroll = (headerRef: Ref<HTMLDivElement | null>) => {
  const scrollY = ref(0)
  const windowsWidth = ref(window.innerWidth)
  const store = useNavigationStore()
  const { isNavOpen } = storeToRefs(store)
  const handleWindowsWidth = () => (windowsWidth.value = window.innerWidth)
  const handleScroll = () => {
    if (window.scrollY < scrollY.value) {
      headerRef.value!.style.top = '0'
    } else {
      if (windowsWidth.value > 1024) headerRef.value!.style.top = '-104px'
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

  onMounted(() => {
    window.addEventListener('resize', handleWindowsWidth)
  })
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
}

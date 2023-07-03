import { useNavigationStore } from '@/stores/NavigationStore'
import { storeToRefs } from 'pinia'
import { ref, watch } from 'vue'

export const useAppNavigation = () => {
  const navRef = ref<HTMLDivElement | null>(null)
  const store = useNavigationStore()
  const { isNavOpen } = storeToRefs(store)
  const { toggleNavOpen } = store

  watch(
    isNavOpen,
    () => {
      if (isNavOpen.value === true) navRef.value?.classList.add('open')
      if (isNavOpen.value === false) navRef.value?.classList.remove('open')
    },
    { immediate: true }
  )

  return { navRef, toggleNavOpen }
}

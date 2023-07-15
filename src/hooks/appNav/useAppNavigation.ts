import { useNavigationStore } from '@/stores/NavigationStore'
import { storeToRefs } from 'pinia'
import { ref, watch } from 'vue'

export const useAppNavigation = () => {
  const navRef = ref<HTMLDivElement | null>(null)
  const buttonRef = ref<HTMLButtonElement | null>(null)
  const store = useNavigationStore()
  const { isNavOpen } = storeToRefs(store)
  const { toggleNavOpen } = store

  watch(
    isNavOpen,
    () => {
      if (isNavOpen.value === true) {
        buttonRef.value?.classList.add('open')
        navRef.value?.classList.add('open')
      } else {
        buttonRef.value?.classList.remove('open')
        navRef.value?.classList.remove('open')
      }
    },
    { immediate: true }
  )

  return { navRef, buttonRef, toggleNavOpen }
}

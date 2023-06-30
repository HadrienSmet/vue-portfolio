import { defineStore } from 'pinia'

export const useNavigationStore = defineStore('NavigationStore', {
  state: () => ({
    isNavOpen: false
  }),
  actions: {
    toggleNavOpen() {
      this.isNavOpen = !this.isNavOpen
    }
  }
})

import { defineStore } from 'pinia'

export const useHobbyIndexStore = defineStore('HobbyIndexStore', {
  state: () => ({
    activeIndex: -1
  }),
  actions: {
    resetActiveIndex() {
      this.activeIndex = -1
    },
    handleActiveIndex(e: MouseEvent) {
      const target = e.target as Element
      const targetIndex = target.id.split('-')[1]
      this.activeIndex = parseInt(targetIndex)
    }
  }
})

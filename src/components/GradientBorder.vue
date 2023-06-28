<template>
  <div class="gradient" ref="borderRef">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
export default {
  setup() {
    const borderRef = ref<HTMLDivElement | null>(null)
    function findDegree(element: HTMLDivElement | null, event: MouseEvent) {
      const rect = element!.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      const radianDegree = Math.atan2(y, x)
      const degree = (radianDegree * 180) / Math.PI + 180

      return degree
    }
    function handleMouseMove(e: MouseEvent) {
      const degree = findDegree(borderRef.value, e)
      borderRef.value!.style.setProperty('--gradient-rotation', `${degree + 110}deg`)
    }
    onMounted(() => {
      window.addEventListener('mousemove', handleMouseMove)
    })
    onUnmounted(() => {
      window.removeEventListener('mousemove', handleMouseMove)
    })
    return { borderRef }
  }
}
</script>
<style>
.gradient {
  background: linear-gradient(var(--clr-1), var(--clr-1)),
    linear-gradient(
      var(--gradient-rotation, 120deg),
      var(--clr-2-op6) 0%,
      var(--clr-2-op2) 70%,
      var(--clr-2) 100%
    );
  background-clip: padding-box, border-box;
  background-origin: border-box;
  box-shadow: 0px 2px 6px 1px var(--clr-2-op2);
}
</style>

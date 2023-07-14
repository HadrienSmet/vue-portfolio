<template>
  <div ref="elementRef" class="stacks-container">
    <v-icon name="vi-file-type-sass" />
    <v-icon name="vi-file-type-typescript-official" />
    <v-icon name="vi-file-type-reactjs" />
    <v-icon name="vi-file-type-light-next" />
    <v-icon name="vi-file-type-node" />
    <v-icon name="si-express" />
    <v-icon name="si-socketdotio" />
    <v-icon name="vi-file-type-mongo" />
    <v-icon name="co-postgresql" />
  </div>
</template>
<script setup lang="ts">
import { useElementOnScroll } from '@/hooks/useElementOnScroll'

const { elementRef } = useElementOnScroll({ threshold: 0.1, rootMargin: '0px' })
</script>
<style scoped>
@media screen and (min-width: 1025px) {
  svg {
    height: 90px;
    width: 90px;
  }
}
@media screen and (max-width: 1024px) {
  .stacks-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(9, 1fr);
  }
  svg {
    width: 100%;
    height: 100%;
  }
}
</style>

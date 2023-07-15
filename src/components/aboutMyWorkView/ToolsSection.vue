<template>
  <section ref="elementRef" class="tools-section">
    <v-icon name="vi-file-type-sass" />
    <v-icon name="vi-file-type-typescript-official" />
    <v-icon name="vi-file-type-reactjs" />
    <v-icon name="vi-file-type-vue" />
    <v-icon name="vi-file-type-light-next" />
    <v-icon name="si-threedotjs" />
    <v-icon name="vi-file-type-node" />
    <v-icon name="si-express" />
    <v-icon name="si-socketdotio" />
    <v-icon name="vi-file-type-mongo" />
    <v-icon name="co-postgresql" />
    <v-icon name="fa-github" />
    <v-icon name="vi-file-type-vscode" />
  </section>
</template>
<script setup lang="ts">
import { useElementOnScroll } from '@/hooks/useElementOnScroll'

const { elementRef } = useElementOnScroll({ threshold: 0.2, rootMargin: '0px' })
</script>
<style scoped>
@media screen and (min-width: 1025px) {
  svg {
    height: 90px;
    width: 90px;
  }
}
@media screen and (max-width: 1024px) and (min-width: 768px) {
  svg {
    height: 70px;
    width: 70px;
  }
}
@media screen and (max-width: 767px) {
  svg {
    height: 50px;
    width: 50px;
  }
}
.tools-section {
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>

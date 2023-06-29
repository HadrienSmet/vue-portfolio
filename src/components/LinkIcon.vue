<template>
  <a :aria-label="props.dynamicAria" :href="props.dynamicUrl" target="_blank">
    <span class="link-border"></span>
    <v-icon :name="props.iconName" :style="`height: ${size}px; width: ${size}px`" />
  </a>
</template>
<script setup lang="ts">
const props = defineProps({
  dynamicAria: String,
  dynamicUrl: String,
  iconName: String,
  size: String
})
</script>
<style scoped>
a {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  /* transform: translateY(10%);
  opacity: 0; */
}
a:hover .link-border {
  transform: scale(1);
  opacity: 1;
}
a:first-of-type .link-border {
  border-radius: 50% !important;
}
.link-border {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 3px solid var(--clr-2);
  border-radius: 4px;
  transition: transform 0.2s ease-in-out, opacity 0.25s ease-in;
  transform: scale(0.8);
  opacity: 0;
}
svg {
  color: var(--clr-2);
  /* height: 90px;
  width: 90px; */
}
</style>

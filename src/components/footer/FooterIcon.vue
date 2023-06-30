<template>
  <div class="footer-icon">
    <v-icon :name="props.iconName" :style="`color: ${props.iconColor}`" />
    <v-icon :name="props.iconName" />
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  iconName: String,
  iconColor: String
})
</script>
<style scoped>
svg {
  position: absolute;
  height: 90px;
  width: 90px;
  transition: 0.13s ease-in-out;
}
svg:first-child {
  transform: translateY(-110%);
}
svg:last-child {
  color: var(--clr-1);
}
.footer-icon {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100px;
  overflow: hidden;
  position: relative;
}
.footer-icon:hover svg:first-child {
  transform: translateY(0);
}
.footer-icon:hover svg:last-child {
  transform: translateY(110%);
}
</style>

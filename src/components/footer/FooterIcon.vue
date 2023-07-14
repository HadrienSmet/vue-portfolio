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
@media screen and (min-width: 1025px) {
  .footer-icon {
    height: 100px;
    width: 100px;
  }
  svg {
    height: 90px;
    width: 90px;
  }
  .footer-icon:hover svg:first-child {
    transform: translateY(0);
  }
  .footer-icon:hover svg:last-child {
    transform: translateY(110%);
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .footer-icon {
    height: 60px;
    width: 60px;
  }
  svg {
    width: 60px;
    height: 60px;
  }
}
@media screen and (max-width: 767px) {
  .footer-icon {
    width: 45px;
    height: 45px;
  }
  svg {
    width: 45px;
    height: 45px;
  }
}
svg {
  position: absolute;
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
  overflow: hidden;
  position: relative;
}
</style>

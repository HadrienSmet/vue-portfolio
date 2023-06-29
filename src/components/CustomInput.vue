<template>
  <div class="custom-input" :class="props.dynamicClass">
    <slot></slot>
    <label :for="props.labelFor">{{ props.labelContent }}</label>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  dynamicClass: string
  labelContent: string
  labelFor: string
}>()
</script>
<style scoped>
label {
  left: 25px;
  top: 15px;
  z-index: 1;
  position: absolute;
  text-transform: uppercase;
  transition: 0.2s ease-in-out;
  /* transform: translateY(-60%);
            opacity: 0; */
}
label.fill {
  scale: 0.5;
  translate: -35px -30px;
}

input:focus-within + label,
textarea:focus-within + label {
  scale: 0.5;
  translate: -35px -30px;
}

.custom-input {
  display: flex;
  align-items: center;
  position: relative;
}
</style>

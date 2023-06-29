<template>
  <div class="background-layout">
    <slot></slot>
  </div>
</template>
<script setup lang="ts"></script>
<style>
.background-layout {
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>

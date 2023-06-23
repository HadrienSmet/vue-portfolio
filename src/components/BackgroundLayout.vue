<template>
  <div class="background-layout">
    <slot></slot>
  </div>
</template>
<script setup lang=""></script>
<style>
.background-layout {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>

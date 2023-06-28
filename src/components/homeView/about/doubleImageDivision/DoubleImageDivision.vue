<template>
  <div class="double-image-division">
    <DetailsContainer />
    <DoubleImageContainer />
  </div>
</template>
<script setup lang="ts">
import DetailsContainer from './DetailsContainer.vue'
import DoubleImageContainer from './DoubleImageContainer.vue'
</script>
<style scoped>
.double-image-division {
  position: relative;
  height: calc(100vh - 149px);
}
</style>

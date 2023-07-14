<template>
  <footer>
    <v-icon name="fa-angle-double-up" @click="handleScrollToTop" />
    <div class="icons-container">
      <FooterIcon icon-color="#0172b1" icon-name="fa-github" />
      <FooterIcon icon-color="#0172b1" icon-name="fa-linkedin" />
      <FooterIcon icon-color="#df574b" icon-name="fa-regular-envelope" />
    </div>
    <span>Hadri</span>
  </footer>
</template>
<script setup lang="ts">
import FooterIcon from './FooterIcon.vue'
import { handleScrollToTop } from '@/functions/handleScrollTop'
</script>
<style scoped>
@media screen and (min-width: 768px) {
  footer {
    justify-content: space-between;
  }
}
@media screen and (max-width: 767px) {
  span,
  footer > svg {
    display: none;
  }
  footer {
    justify-content: center;
  }
}
footer {
  display: flex;
  align-items: center;
  background-color: var(--clr-2);
  padding: 30px calc(100vh / 12);
}
svg {
  cursor: pointer;
  height: 50px;
  width: 50px;
  color: var(--clr-1);
}
span {
  cursor: default;
  color: var(--clr-1);
  font-family: 'graff-fonts';
}
.icons-container {
  display: flex;
  gap: 25px;
}
</style>

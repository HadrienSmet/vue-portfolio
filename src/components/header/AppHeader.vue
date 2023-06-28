<script setup lang="ts">
import HeaderButton from './HeaderButton.vue'
</script>
<template>
  <header>
    <span>Hadri</span>
    <nav>
      <a href="#">Intro</a>
      <a href="#">Work</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </nav>
    <HeaderButton />
  </header>
</template>
<style scoped>
header {
  z-index: 10;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(0deg, var(--clr-2), var(--clr-2-op7));
  padding: 0 50px;
  transition: 0.2s ease-in-out;
}
header:hover {
  background-color: var(--clr-2);
}
span,
a {
  color: var(--clr-1);
}
span {
  font-family: 'graff-fonts';
}
nav {
  display: flex;
  gap: 15px;
}
a {
  text-transform: uppercase;
  position: relative;
  letter-spacing: 2px;
}
a::before {
  position: absolute;
  content: '';
  width: 100%;
  height: 2px;
  bottom: -2px;
  background-color: var(--clr-1);
  transition: 0.2s ease-in-out;
  transform: scaleX(0);
  transform-origin: left;
}
a:hover::before {
  transform: scaleX(1);
}
</style>

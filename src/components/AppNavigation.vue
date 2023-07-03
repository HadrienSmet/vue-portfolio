<template>
  <nav ref="navRef" class="app-nav">
    <ul>
      <li>
        <RouterLink to="/" @click="toggleNavOpen"> Home </RouterLink>
      </li>
      <li>
        <RouterLink to="/about-my-work" @click="toggleNavOpen"> About my work </RouterLink>
      </li>
      <li>
        <RouterLink to="/about-me" @click="toggleNavOpen"> About me </RouterLink>
      </li>
    </ul>
  </nav>
</template>
<script setup lang="ts">
import { useAppNavigation } from '@/hooks/appNav/useAppNavigation'

const { navRef, toggleNavOpen } = useAppNavigation()
</script>
<style scoped>
@media screen and (min-width: 1025px) {
  li {
    font-size: 8vh;
  }
  li:hover::after {
    transform: scaleX(1);
  }
  li:not(:nth-child(2))::after {
    transform-origin: left;
  }
  li:nth-child(2)::after {
    transform-origin: right;
  }
  li::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 3px;
    background-color: var(--clr-3);
    transform: scaleX(0);
    transition: 0.12s ease-in;
  }
}
.app-nav {
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  transition: 0.2s ease-in-out;
  transform: translateY(-100%);

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--clr-2);
}
.app-nav.open {
  transform: translateY(0);
}
ul {
  display: flex;
  flex-direction: column;
  gap: 25px;
}
li {
  position: relative;
  padding: 0 30px;
  font-weight: 900;
  text-transform: uppercase;
}
li:nth-child(1) a {
  animation: backgroundTitleAnim 22s linear alternate infinite;
}
li:nth-child(2) a {
  animation: backgroundTitleAnim 19s linear alternate-reverse infinite;
}
li:nth-child(3) a {
  animation: backgroundTitleAnim 25s linear alternate infinite;
}
li::after {
  content: '';
  position: absolute;
}
a {
  font-family: 'title-fonts';
  color: transparent;
  background: linear-gradient(
    90deg,
    var(--clr-1-op4),
    var(--clr-1-op9),
    var(--clr-1-op3),
    var(--clr-1),
    var(--clr-1-op5),
    var(--clr-1-op8),
    var(--clr-1-op3),
    var(--clr-1-op6),
    var(--clr-1)
  );
  background-position: 0%;
  background-size: 1000%;
  background-clip: text;
  -webkit-background-clip: text !important;
}
</style>

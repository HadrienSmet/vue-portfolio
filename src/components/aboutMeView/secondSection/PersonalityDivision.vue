<template>
  <div id="perso" class="personality-division" ref="elementRef">
    <h2>Personality</h2>
    <p>
      If you wants to learn more about what kind of person I am here are the results of my
      personality tests
    </p>
    <div class="personality-links">
      <a
        href="https://drive.google.com/file/d/1-QeTq0lufeknbFwk2UyQT3n9cbgYitUm/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        MBTI
      </a>
      <a
        href="https://drive.google.com/file/d/1t7oAlXpJPd9hf5D8XtfAjNhEVxJVACWR/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        Talents
      </a>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useElementOnScroll } from '@/hooks/useElementOnScroll'

const { elementRef } = useElementOnScroll({ threshold: 0.6, rootMargin: '0px' })
</script>
<style scoped>
@media screen and (min-width: 768px) {
  a {
    font-size: 2em;
    width: 25%;
  }
}
@media screen and (max-width: 767px) {
  a {
    font-size: 1.2em;
    width: 45%;
  }
}
h2 {
  transform: translateX(-10%);
  opacity: 0;
  transition: 0.5s ease-out;
  text-transform: uppercase;
  font-size: 2em;
  font-family: 'title-fonts';
  color: var(--clr-2-op8);
}
p {
  font-size: 1.2em;
  text-align: center;
  color: var(--clr-2-op7);
  transform: translateY(10%);
  opacity: 0;
}
.personality-division {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  padding: 50px calc(100vw / 12);
}
.personality-division.visible h2 {
  transform: translateX(0);
  opacity: 1;
}
.personality-division.visible p {
  animation: appearFromBottom 0.3s ease-out 0.3s forwards;
}
.personality-division.visible a:nth-child(1) {
  animation: appearFromLeft 0.3s ease-out 0.38s forwards;
}

.personality-division.visible a:nth-child(2) {
  animation: appearFromRight 0.3s ease-out 0.5s forwards;
}
.personality-links {
  margin-top: 15px;
  display: flex;
  justify-content: center;
  gap: 20px;
}
a {
  font-family: 'title-fonts';
  font-weight: 900;
  letter-spacing: 2px;
  padding: 10px 0;
  text-align: center;
  border: 2px solid var(--clr-2);
  border-radius: 4px;
  background-color: var(--clr-2);
  color: var(--clr-1);
  transition: 0.12s ease-in-out;
  opacity: 0;
}
a:nth-child(1) {
  transform: translateX(-10%);
  animation-delay: 0.35s !important;
}
a:nth-child(2) {
  transform: translateX(10%);
  animation-delay: 0.45s !important;
}
a:hover {
  background-color: transparent;
  color: var(--clr-2);
  scale: 1.05 0.98;
}
</style>

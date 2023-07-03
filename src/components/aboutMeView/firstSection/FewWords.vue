<template>
  <div class="few-words" ref="elementRef">
    <h2>Few words</h2>
    <div class="text-container">
      <p>
        Hi! I am a junior developer living in Brussels. My native language is French but I also
        speak fluently English and I understand Dutch.
      </p>
      <p>
        I am a passionate and enthusiastic fullstack junior developer, recently graduated from a web
        development program. I love traveling and discovering new cultures, and I hope to have the
        opportunity to live and work abroad one day. In addition to web development, I enjoy
        learning new things, and exploring philosophy. I am a positive, optimistic, and dynamic
        person, always ready to tackle new challenges and learn new things. I am excited to use my
        skills and enthusiasm to serve a company and work on exciting projects.
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useElementOnScroll } from '@/hooks/useElementOnScroll'

const { elementRef } = useElementOnScroll({ threshold: 0.2, rootMargin: '0px' })
</script>
<style scoped>
@media screen and (min-width: 1025px) {
  p {
    padding: 0 20%;
  }
}
@media screen and (max-width: 1024px) and (min-width: 768px) {
  p {
    padding: 0 12.5%;
  }
}
@media screen and (min-width: 768px) {
  p {
    font-size: 1.5em;
  }
}
@media screen and (max-width: 767px) {
  p {
    font-size: 1.1em;
    padding: 0 10%;
  }
}
h2 {
  text-align: center;
  font-family: 'title-fonts';
  text-transform: uppercase;
  font-size: 2em;
  color: var(--clr-2-op8);
  transform: translateX(-10%);
  opacity: 0;
}
p {
  width: 100%;
  text-align: center;
  color: var(--clr-2-op7);
}
p:nth-child(1) {
  transform: translateX(10%);
  opacity: 0;
}
p:nth-child(2) {
  transform: translateX(-10%);
  opacity: 0;
}
.few-words {
  position: relative;
  width: 100%;
  padding: 30px 0px;
  background-color: var(--clr-1-op8);
  display: flex;
  flex-direction: column;
  gap: 25px;
  transform: scale(0) translateY(5px);
  opacity: 0;
  transition: 0.3s;
}
.few-words.visible {
  transform: scale(1) translateY(0);
  opacity: 1;
}
.few-words.visible h2 {
  animation: appearFromLeft 0.3s ease-out 0.32s forwards;
}
.few-words.visible .text-container p:nth-child(1) {
  animation: appearFromRight 0.3s ease-out 0.4s forwards;
}
.few-words.visible .text-container p:nth-child(2) {
  animation: appearFromLeft 0.3s ease-out 0.48s forwards;
}
.text-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>

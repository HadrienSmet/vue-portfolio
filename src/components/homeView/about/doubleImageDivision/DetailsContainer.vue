<template>
  <div ref="elementRef" class="details-container">
    <a ref="workRef" href="#">
      <h3>More about my work</h3>
      <ul>
        <li>All my projects</li>
        <li>The tools I use</li>
      </ul>
    </a>
    <a ref="myRef" href="#">
      <h3>More about me</h3>
      <ul>
        <li>Soft skills</li>
        <li>Some pictures</li>
        <li>Some of my hobbies</li>
        <li>Personality tests</li>
      </ul>
    </a>
  </div>
</template>
<script setup lang="ts">
import { useElementOnScroll } from '@/hooks/scroll/useElementOnScroll'
import { useDetailsOnMousemove } from '@/hooks/homeView/aboutSection/useDetailsOnMousemove'

const { elementRef } = useElementOnScroll({ threshold: 0.1, rootMargin: '0px' })
const { myRef, workRef } = useDetailsOnMousemove()
</script>
<style scoped>
@media screen and (min-width: 1025px) {
  .details-container.visible {
    animation: increaseOpacity 0.2s ease-out 0.15s forwards;
  }
  a {
    height: 100%;
    width: 50%;
    transition: opacity 0.3s ease-in-out, transform 0.15s ease-in-out;
  }
  h3 {
    font-size: clamp(1.5em, 2.5vw, 3em);
  }
  ul {
    position: absolute;
    top: 130px;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  li {
    pointer-events: none;
    font-size: 1.5em;
    color: var(--clr-2-op7);
    position: relative;
    transform: translateY(-60%);
    opacity: 0;
  }
  li::before {
    content: '';
    position: absolute;
    top: 0;
    height: 100%;
    width: 3px;
    background: linear-gradient(var(--clr-1), var(--clr-2-op2));
    transform: scaleY(0);
    transform-origin: bottom;
  }
  .details-container > a.visible {
    opacity: 1;
    transform: translateX(0) !important;
  }
  .details-container > a.visible h3::after {
    animation: increaseScaleX 0.8s ease-in-out forwards;
  }
  .details-container > a.visible ul li {
    animation: appearFromTop 0.15s ease-out forwards;
  }
  .details-container > a.visible ul li::before {
    animation: increaseScaleY 0.6s ease-in-out forwards;
  }
  .details-container > a:first-of-type ul li {
    padding-left: 15px;
  }
  .details-container > a:first-of-type ul li::before {
    left: 0;
  }
  .details-container > a:last-of-type h3::after {
    transform-origin: right;
  }
  .details-container > a:last-of-type ul li {
    padding-right: 15px;
  }
  .details-container > a:last-of-type ul li::before {
    right: 0px;
  }
}
ul {
  padding-top: 25px;
}
.details-container {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  opacity: 0;
}
.details-container > a {
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  opacity: 0;
}
.details-container > a:first-of-type {
  border-radius: 25px 0 0 25px;
  transform: translateX(15%);
}
.details-container > a:first-of-type h3::after {
  transform-origin: left;
}
.details-container > a:last-of-type {
  align-self: last baseline;
  align-items: flex-end;
  text-align: right;
  border-radius: 0 25px 25px 0;
  transform: translateX(-15%);
}
h3 {
  font-family: 'title-fonts';
  margin-top: 20px;
  pointer-events: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  width: 100%;
  background: linear-gradient(
    90deg,
    var(--clr-2-op9),
    var(--clr-2-op6),
    var(--clr-2-op7),
    var(--clr-2-op4),
    var(--clr-2-op2),
    var(--clr-2-op6),
    var(--clr-2-op9)
  );
  background-size: 1000%;
  background-position: 0%;
  background-clip: text !important;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text !important;
  animation: backgroundTitleAnim 10s linear alternate infinite;
}
h3::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  height: 2px;
  width: 100%;
  background: linear-gradient(90deg, var(--clr-2-op9), var(--clr-2-op6), var(--clr-2-op7));
  transform-origin: left;
  transform: scaleX(0);
}
</style>
@/hooks/homeView/aboutSection/useDetailsOnMousemove @/hooks/scroll/useElementOnScroll

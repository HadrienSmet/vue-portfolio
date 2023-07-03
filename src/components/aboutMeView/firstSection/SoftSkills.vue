<template>
  <div class="soft-skills" ref="elementRef">
    <div class="progress" :style="{ '--i': '75' }">
      <h2>75<span>%</span></h2>
      <v-icon name="fa-book" />
      <h3>Learning</h3>
    </div>
    <div class="progress" :style="{ '--i': '72' }">
      <h2>72<span>%</span></h2>
      <v-icon name="fa-medapps" />
      <h3>Thinking</h3>
    </div>
    <div class="progress" :style="{ '--i': '62' }">
      <h2>62<span>%</span></h2>
      <v-icon name="fa-hands-helping" />
      <h3>Inclusive</h3>
    </div>
    <a href="#perso">
      How?
      <br />
      Come see the results from my personality tests!
    </a>
  </div>
</template>
<script setup lang="ts">
import { useElementOnScroll } from '@/hooks/useElementOnScroll'
const { elementRef } = useElementOnScroll({ threshold: 0.2, rootMargin: '0px' })
</script>
<style scoped>
@media screen and (min-width: 1025px) {
  .soft-skills {
    flex-direction: column;
  }
  .soft-skills:hover a {
    opacity: 1;
  }
  .progress {
    transition: 0.3s ease-out;
    color: var(--clr-2);
    background: linear-gradient(to right, transparent 50%, var(--clr-2) 0%);
  }
  .progress::before {
    transition: 0.3s ease-out;
    background-color: var(--clr-2);
  }
  .progress::after {
    background-color: var(--clr-1);
  }
  a {
    color: var(--clr-2);
    background-color: var(--clr-1);
  }
}
@media screen and (max-width: 1024px) {
  h2 {
    color: var(--clr-3);
  }
  a {
    color: var(--clr-1);
    background-color: var(--clr-2);
  }
  .progress {
    color: var(--clr-3);
    background: linear-gradient(to right, transparent 50%, var(--clr-3) 0%);
  }
  .progress::before {
    background-color: var(--clr-3);
  }
  .progress::after {
    background-color: var(--clr-2);
  }
}
@media screen and (min-width: 768px) {
  .soft-skills {
    justify-content: center;
    gap: 15px;
  }
  .progress {
    height: 150px;
    width: 150px;
  }
  .progress::after {
    inset: 10px;
  }
  h3 {
    top: 56%;
  }
}
.soft-skills {
  position: relative;
  display: flex;
}
.soft-skills.visible .progress {
  animation: appearFromLeft 0.3s ease-in-out forwards;
}
.progress {
  transition: opacity 0.22s ease-in;
  position: relative;
  border-radius: 50%;
  transform: translateX(-100%);
  opacity: 0;
}
.progress::before {
  content: '';
  display: block;
  height: 100%;
  margin-left: 50%;
  border-radius: 0 100% 100% 0/50%;
  transform-origin: left;
  transform: rotate(calc((var(--i) - 50) * 0.01turn));
}
.progress::after {
  content: '';
  position: absolute;
  border-radius: 50%;
}
h2 {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2.5em;
  z-index: 1;
  font-weight: normal;
}
h3 {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}
span {
  font-size: 0.65em;
}
svg {
  position: absolute;
  top: 76%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}
a {
  padding: 15px;
  position: absolute;
  opacity: 0;
  transition: 0.4s ease-in;
  font-weight: 900;
  font-size: 2em;
  text-align: center;
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 1;
}
</style>

<template>
  <div>
    <h1 class="hadrien-smet">Hadrien Smet</h1>
    <span class="web-developer">Web developer</span>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
div {
  display: flex;
  flex-direction: column;
  font-family: 'title-fonts';
  font-size: 4.5em;
}
.hadrien-smet {
  font-weight: 900;
  letter-spacing: 2px;
  line-height: 1;
  font-size: 1em;
  margin: 0;
  text-transform: uppercase;
  background: linear-gradient(
    90deg,
    var(--clr-1-op3),
    var(--clr-1),
    var(--clr-1-op5),
    var(--clr-1),
    var(--clr-1-op4),
    var(--clr-1),
    var(--clr-1-op5)
  );
  background-position: 0%;
  background-size: 1000%;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  transform: translateX(-20%);
  opacity: 0;
  animation: appearFromLeft 0.45s ease-out 0.1s forwards,
    backgroundTitleAnim 20s linear 0.45s alternate infinite;
}
.web-developer {
  font-size: 0.7em;
  background: linear-gradient(
    90deg,
    var(--clr-1-op3),
    var(--clr-1),
    var(--clr-1-op4),
    var(--clr-1),
    var(--clr-1-op3),
    var(--clr-1),
    var(--clr-1-op5)
  );
  background-position: 90%;
  background-size: 1000%;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  transform: translateX(-20%);
  opacity: 0;
  animation: appearFromLeft 0.45s ease-out 0.4s forwards,
    backgroundTitleAnim 17s linear 0.5s alternate-reverse infinite;
}
</style>

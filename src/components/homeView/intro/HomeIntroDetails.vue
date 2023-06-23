<template>
  <h1>
    <span class="hadrien-smet">Hadrien Smet</span>
    <span class="web-developer">Web developer</span>
  </h1>
</template>
<script setup lang="ts"></script>
<style>
h1 {
  font-family: 'title-fonts';
  font-weight: 900;
  display: flex;
  flex-direction: column;
  letter-spacing: 2px;
  line-height: 1;
  position: absolute;
  font-size: 4.5em;
  position: absolute;
}
.hadrien-smet {
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
  /* transform: translateX(-20%);
  opacity: 0; */
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
  /* transform: translateX(-20%);
  opacity: 0; */
}
</style>

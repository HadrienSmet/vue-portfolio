<template>
  <div class="links-container">
    <em>
      After a few years working in differents fields, I chose to follow my dream and I started
      studying to become a web developer.
      <br />
      Wants to know more about my work?
    </em>
    <div class="links-container-buttons">
      <div class="icons">
        <a aria-label="Link to my Github" href="https://github.com/HadrienSmet" target="_blank">
          <span class="link-border"></span>
          <v-icon name="fa-github" />
        </a>
        <a
          aria-label="Link to my linkedIn"
          href="https://www.linkedin.com/in/hadrien-smet-b80022207/"
          target="_blank"
        >
          <span class="link-border"></span>
          <v-icon name="fa-linkedin" />
        </a>
        <a
          aria-label="Link to send me a mail"
          href="mailto:hadriensmet96@gmail.com"
          target="_blank"
        >
          <span class="link-border"></span>
          <v-icon name="fa-regular-envelope" />
        </a>
      </div>
      <GradientBorder>
        <a
          href="https://i.ibb.co/KsCMMqL/CV-Frontend-developer.jpg"
          target="_blank"
          rel="noreferrer"
          class="{poppins.variable}"
        >
          See my CV
        </a>
      </GradientBorder>
    </div>
  </div>
</template>
<script setup lang="ts">
import GradientBorder from '../../GradientBorder.vue'
</script>
<style scoped>
@media screen and (min-width: 1025px) {
  .links-container {
    width: 450px;
    height: 100%;
    background-color: var(--clr-1-op5);
  }
  .links-container em {
    font-size: 1.5em;
    width: 75%;
  }
  .links-container-buttons {
    width: 100%;
  }
}

.links-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  position: relative;
  padding: 20px;
  border-radius: 8px;
  /* transform: scale(0) translateY(5px);
  opacity: 0; */
}
.links-container.visible {
  animation: toolsAppearsAnim 0.4s ease-out 0.1s forwards;
}
.links-container.visible em {
  animation: toolsAppearsAnim 0.35s ease-out 0.64s forwards;
}
em {
  position: relative;
  text-align: center;
  line-height: 1.5;
  color: var(--clr-2-op7);
  /* transform: scale(0) translateY(5px);
  opacity: 0; */
}
.links-container-buttons {
  display: flex;
  flex-direction: column;
  gap: 25px;
}
.icons {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.icons a {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  /* transform: translateY(10%);
  opacity: 0; */
}
.icons a:hover .link-border {
  transform: scale(1);
  opacity: 1;
}
.icons a:first-of-type .link-border {
  border-radius: 50% !important;
}
.link-border {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 3px solid var(--clr-2);
  border-radius: 4px;
  transition: transform 0.2s ease-in-out, opacity 0.25s ease-in;
  transform: scale(0.8);
  opacity: 0;
}
svg {
  color: var(--clr-2);
  height: 90px;
  width: 90px;
}
.gradient {
  border: 3px solid transparent;
  border-radius: 4px;
  width: calc(100% - 6px);
  transition: 0.2s;
  /* transform: translateX(10%);
  opacity: 0; */
}
.gradient:hover {
  background: linear-gradient(var(--clr-1), var(--clr-1)),
    linear-gradient(var(--clr-2), var(--clr-2));
  background-clip: padding-box, border-box;
  background-origin: border-box;
  translate: 0px -3px;
  scale: 1.05 0.95;
}
.gradient:hover a {
  /* background: var(--clr-2);
  background-clip: text; */
  /* color: black; */
  background: white;
  background-clip: initial !important;
}
.gradient a {
  padding: 8px 15px;
  width: 100%;
  height: 100%;
  font-weight: 900;
  /* text-transform: uppercase; */
  font-size: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(
    90deg,
    var(--clr-2-op3),
    var(--clr-2),
    var(--clr-2-op2),
    var(--clr-2),
    var(--clr-2-op5),
    var(--clr-2),
    var(--clr-2-op2)
  );
  background-position: 0%;
  background-size: 1000%;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: backgroundTitleAnim 20s linear alternate infinite;
}
</style>

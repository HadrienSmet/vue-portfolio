<template>
  <div ref="elementRef" class="links-container">
    <em>
      After a few years working in differents fields, I chose to follow my dream and I started
      studying to become a web developer.
      <br />
      Wants to know more about my work?
    </em>
    <div class="links-container-buttons">
      <div class="icons">
        <link-icon
          dynamic-aria="Link to my Github"
          dynamic-url="https://github.com/HadrienSmet"
          icon-name="fa-github"
          size="90"
        />
        <link-icon
          dynamic-aria="Link to my linkedIn"
          dynamic-url="https://www.linkedin.com/in/hadrien-smet-b80022207/"
          icon-name="fa-linkedin"
          size="90"
        />
        <link-icon
          dynamic-aria="Link to send me a mail"
          dynamic-url="mailto:hadriensmet96@gmail.com"
          icon-name="fa-regular-envelope"
          size="90"
        />
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
import LinkIcon from '@/components/LinkIcon.vue'
import { useElementOnScroll } from '@/hooks/scroll/useElementOnScroll'

const { elementRef } = useElementOnScroll({ threshold: 0.1, rootMargin: '0px' })
</script>
<style scoped>
@media screen and (min-width: 1025px) {
  em {
    font-size: 1.5em;
    width: 75%;
  }
  .links-container {
    width: 450px;
    height: 100%;
    background-color: var(--clr-1-op5);
  }
  .links-container-buttons {
    width: 100%;
  }
}
@media screen and (min-width: 1025px) and (max-width: 1233px) {
  .links-container {
    width: 100%;
    height: 70%;
  }
  em {
    width: 80%;
  }
  .links-container-buttons {
    width: 100%;
  }
}
@media screen and (max-width: 1024px) {
  .links-container {
    width: 100%;
    height: 70%;
    background-color: var(--clr-1);
  }
  em {
    width: 65%;
    font-size: 1.5em;
  }
  .links-container-buttons {
    width: 75%;
  }
}
@media screen and (min-width: 768px) {
  .icons a {
    height: 100px;
    width: 100px;
  }
}
@media screen and (max-width: 767px) {
  em {
    width: 100%;
    font-size: 1em;
  }
  .icons a {
    width: 50px;
    height: 50px;
  }
  .links-container-buttons {
    width: 100%;
  }
  .gradient {
    font-size: 1.2em;
  }
}
em {
  position: relative;
  text-align: center;
  line-height: 1.5;
  color: var(--clr-2-op7);
  transform: scale(0) translateY(5px);
  opacity: 0;
}
.links-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  position: relative;
  padding: 20px;
  border-radius: 8px;
  transform: scale(0) translateY(5px);
  opacity: 0;
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
.gradient {
  border: 3px solid transparent;
  border-radius: 4px;
  width: calc(100% - 6px);
  transition: 0.2s;
  transform: translateX(10%);
  opacity: 0;
}
.gradient:hover {
  background: linear-gradient(var(--clr-1), var(--clr-1)),
    linear-gradient(var(--clr-2), var(--clr-2)) !important;
  background-clip: padding-box, border-box !important;
  background-origin: border-box !important;
  translate: 0px -3px;
  scale: 1.05 0.95;
}
.gradient:hover a {
  background: var(--clr-2);
  background-clip: text !important;
  -webkit-background-clip: text !important;
}
.gradient a {
  font-family: 'title-fonts';
  padding: 8px 15px;
  width: 100%;
  height: 100%;
  font-weight: 900;
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
@/hooks/scroll/useElementOnScroll

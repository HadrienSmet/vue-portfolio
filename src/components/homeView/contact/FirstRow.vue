<template>
  <div class="first-row">
    <div class="first-row__header">
      <div class="title-container">
        <h2>Wants to work together?</h2>
        <h3>Get in touch with me via social media or email</h3>
      </div>
      <div class="initials-container">
        <span>H</span>
        <span>S</span>
      </div>
    </div>
    <div class="social-medias-container">
      <link-icon
        dynamic-aria="Link to my Github"
        dynamic-url="https://github.com/HadrienSmet"
        icon-name="fa-github"
        :size="iconSize"
      />
      <link-icon
        dynamic-aria="Link to my linkedIn"
        dynamic-url="https://www.linkedin.com/in/hadrien-smet-b80022207/"
        icon-name="fa-linkedin"
        :size="iconSize"
      />
      <link-icon
        dynamic-aria="Link to my Github with a facebook icon"
        dynamic-url="https://github.com/HadrienSmet"
        icon-name="fa-facebook-square"
        :size="iconSize"
      />
      <link-icon
        dynamic-aria="Link to my Github with a twitter icon"
        dynamic-url="https://github.com/HadrienSmet"
        icon-name="co-twitter"
        :size="iconSize"
      />
      <a
        class="cv-link"
        href="https://i.ibb.co/KsCMMqL/CV-Frontend-developer.jpg"
        target="_blank"
        rel="noreferrer"
      >
        See my CV
      </a>
    </div>
  </div>
</template>
<script setup lang="ts">
import LinkIcon from '@/components/LinkIcon.vue'
import { ref, onMounted, onUnmounted } from 'vue'
const iconSize = ref('')

const handleIconSize = () => {
  const windowsWidth = ref(window.innerWidth)
  iconSize.value = '80'
  if (windowsWidth.value > 767) {
    iconSize.value = '80'
  } else {
    iconSize.value = '50'
  }
}
handleIconSize()
onMounted(() => {
  window.addEventListener('resize', () => handleIconSize())
})
onUnmounted(() => {
  window.removeEventListener('resize', () => handleIconSize())
})
</script>
<style scoped>
@media screen and (min-width: 1025px) {
  span {
    font-size: 50px;
  }
  .first-row {
    width: 80%;
  }
  .initials-container {
    height: 150px;
    width: 150px;
  }
  .social-medias-container {
    position: relative;
  }
}
@media screen and (max-width: 1024px) {
  .first-row {
    width: 100%;
  }
  .initials-container {
    height: 130px;
    min-width: 130px;
  }
  span {
    font-size: 40px;
  }
}
@media screen and (min-width: 768px) {
  h2 {
    font-size: clamp(1.8em, 2.5vw, 3em);
  }
  .social-medias-container {
    display: flex;
  }
  a:not(:last-of-type) {
    position: relative;
    height: 80px;
    min-width: 80px;
  }
  a:last-of-type {
    width: calc(100% - 380px);
    max-width: 330px;
    height: 56px;
  }
}
@media screen and (max-width: 767px) {
  .initials-container {
    height: 90px;
    min-width: 90px;
  }
  span {
    font-size: 30px;
  }
  .social-medias-container svg {
    width: 40px !important;
    height: 40px !important;
  }
}
h2 {
  cursor: default;
  font-family: 'title-fonts';
  text-transform: uppercase;
  color: transparent;
  background: linear-gradient(
    90deg,
    var(--clr-2-op4),
    var(--clr-2-op9),
    var(--clr-2-op3),
    var(--clr-2),
    var(--clr-2-op5),
    var(--clr-2-op8),
    var(--clr-2-op3)
  );
  background-position: 0%;
  background-size: 1000%;
  background-clip: text;
  -webkit-background-clip: text !important;
  animation: backgroundTitleAnim 20s linear alternate infinite;
  transform: translateY(-10%);
  opacity: 0;
}
h3 {
  cursor: default;
  font-size: clamp(1em, 1.8vw, 2em);
  color: var(--clr-2-op7);
  transform: translateY(-10%);
  opacity: 0;
}
span {
  font-family: 'graff-fonts';
  cursor: default;
  color: var(--clr-1);
  transform: translateY(60%);
  opacity: 0;
}
.first-row {
  position: relative;
  display: flex;
  gap: 20px;
  flex-direction: column;
}
.first-row::after {
  content: '';
  position: absolute;
  width: 80%;
  height: 2px;
  left: 10%;
  bottom: -45px;
  background-color: var(--clr-2-op5);
  transform: scaleX(0);
  transform-origin: left;
  transition: 1.3s ease-in-out;
}
.first-row__header {
  display: flex;
  justify-content: space-between;
}
.title-container {
  z-index: 10;
  color: var(--clr-2);
  display: flex;
  flex-direction: column;
  gap: 25px;
}
.initials-container {
  border-radius: 50%;
  background-color: var(--clr-2);
  transform: translateX(-10%);
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.social-medias-container {
  flex-wrap: wrap;
  align-items: center;
  gap: 15px;
}
.cv-link {
  border: 2px solid var(--clr-2);
  text-transform: uppercase;
  border-radius: 8px;
  background-color: var(--clr-2);
  color: var(--clr-1);

  min-width: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.12s ease-in-out;
}
.cv-link:hover {
  translate: 0 -2px;
  scale: 1.05 0.95;
  background-color: var(--clr-1);
  color: var(--clr-2);
}
</style>

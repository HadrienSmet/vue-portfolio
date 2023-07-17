<template>
  <div ref="doubleImgRef" class="double-image-container">
    <div ref="firstImgContainerRef" class="first-image-container">
      <img
        src="/src/assets/images/photo-cv_pochoir-rsz.webp"
        alt="Picture of a developer that you should hire"
      />
    </div>
    <div ref="secondImgContainerRef" class="second-image-container">
      <img
        src="/src/assets/images/photo-cv_151222-bgless.webp"
        alt="Illustration of a developer that you really should hire"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useImagesOnMousemove } from '@/hooks/homeView/aboutSection/useDoubleImgMousemove'

const { doubleImgRef, firstImgContainerRef, secondImgContainerRef } = useImagesOnMousemove()
</script>
<style scoped>
@media screen and (min-width: 1025px) {
  img {
    top: unset !important;
    bottom: 0 !important;
    height: auto;
    width: 400px;
  }
  .double-image-container {
    transform: translateX(var(--div-translation));
    width: 400px;
    height: 100%;
  }
  .double-image-container div {
    height: 100%;
  }
  .first-image-container {
    width: var(--first-div-width) !important;
  }
  .second-image-container {
    width: var(--second-div-width) !important;
  }
}
@media screen and (max-width: 1024px) {
  .double-image-container {
    border-radius: 24px;
    overflow: hidden;
    height: 50vh;
    position: absolute !important;
    transform: translateY(calc(-50% - 100px));
    top: 50%;
  }
  .double-image-container > div {
    width: 100%;
  }
  .first-image-container {
    width: 100%;
  }
  .first-image-container img {
    top: 0;
  }
  .second-image-container {
    width: 0%;
  }
}
@media screen and (max-width: 1024px) and (min-width: 768px) {
  img {
    height: auto;
    width: calc((100vw - (100vw / 6)) * 0.75);
  }
  .double-image-container {
    width: 75%;
  }
  .double-image-container > div {
    padding-top: 70px;
  }
}
@media screen and (min-width: 768px) {
  .about.visible .first-image-container {
    animation: increaseWidth 1.2s ease-in-out forwards;
  }
  .about.visible .second-image-container {
    animation: decreaseWidth 1.2s ease-in-out forwards;
  }
  .first-image-container img {
    left: 0;
  }
  .second-image-container img {
    right: 0;
  }
}
@media screen and (max-width: 767px) {
  .double-image-container {
    height: 35vh;
    width: calc(100vw - (100vw / 6));
    flex-direction: column;
    transform: translateY(calc(-50% - 50px));
  }
  .double-image-container.visible > .first-image-container {
    animation: increaseHeight 0.8s ease-in-out forwards;
  }
  .double-image-container.visible > .second-image-container {
    animation: decreaseHeight 0.8s ease-in-out forwards;
  }
  .double-image-container > div > img {
    width: calc(100vw - (100vw / 6));
    height: 35vh;
  }
  .first-image-container img {
    top: 0;
  }
  .second-image-container img {
    bottom: 0;
  }
}
@media screen and (max-width: 320px) {
  .double-image-container {
    width: calc(100vw - 40px);
  }
  .double-image-container > div > img {
    width: calc(100vw - 40px);
  }
}
img {
  pointer-events: none;
  position: absolute;
  object-fit: cover;
}
.double-image-container {
  opacity: 0;
  position: relative;
  display: flex;
  transition: opacity 0.5s ease-in-out;
}
.about.visible .double-image-container {
  opacity: 1;
}
.double-image-container div {
  overflow: hidden;
  position: relative;
}
</style>
@/hooks/homeView/aboutSection/useDoubleImgMousemove

<template>
  <div ref="doubleImgRef" class="double-image-container">
    <div ref="firstImgContainerRef" class="first-image-container">
      <img
        src="src/assets/images/photo-cv_pochoir-rsz.webp"
        alt="Picture of a developer that you should hire"
      />
    </div>
    <div ref="secondImgContainerRef" class="second-image-container">
      <img
        src="src/assets/images/photo-cv_151222-bgless.webp"
        alt="Illustration of a developer that you really should hire"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useImagesOnMousemove } from '@/hooks/useDoubleImgMousemove'

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
@media screen and (max-width: 1024px) and (min-width: 768px) {
  img {
    height: auto;
    width: calc((100vw - (100vw / 6)) * 0.75);
  }
  .double-image-container {
    width: 75%;
  }
}
@media screen and (min-width: 768px) {
  .about.visible .first-image-container {
    animation: increaseWidth 1.2s ease-in-out forwards;
  }
  .about.visible .second-img-container {
    animation: decreaseWidth 1.2s ease-in-out forwards;
  }
  .first-image-container img {
    left: 0;
  }
  .second-image-container img {
    right: 0;
  }
}
img {
  pointer-events: none;
  position: absolute;
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

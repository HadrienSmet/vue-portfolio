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
          <!-- <GithubSVG color="#000" /> -->
        </a>
        <a
          aria-label="Link to my linkedIn"
          href="https://www.linkedin.com/in/hadrien-smet-b80022207/"
          target="_blank"
        >
          <span class="link-border"></span>
          <!-- <LinkedInSVG /> -->
        </a>
        <a
          aria-label="Link to send me a mail"
          href="mailto:hadriensmet96@gmail.com"
          target="_blank"
        >
          <span class="link-border"></span>
          <!-- <FaRegEnvelope /> -->
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
<style></style>

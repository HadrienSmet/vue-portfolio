<template>
  <section id="contact" class="contact">
    <div ref="elementRef" class="contact__content">
      <FirstRow />
      <ContactForm />
    </div>
  </section>
</template>
<script setup lang="ts">
import ContactForm from './ContactForm.vue'
import FirstRow from './FirstRow.vue'
import { useElementOnScroll } from '@/hooks/useElementOnScroll'

const { elementRef } = useElementOnScroll({ threshold: 0.1, rootMargin: '0px' })
</script>
<style scoped>
@media screen and (min-width: 1025px) {
  .contact {
    height: unset !important;
  }
}
@media screen and (min-width: 768px) {
  .contact__content {
    padding: 50px;
  }
}
@media screen and (max-width: 767px) {
  .contact {
    height: unset !important;
  }
  .contact__content {
    padding: 35px 25px;
  }
  h2 {
    font-size: clamp(1.2em, 2vw, 2em);
  }
}
section {
  min-height: 100vh;
  padding-top: 120px;
  padding-bottom: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(../../../assets/images/grunge-pattern-sm.webp);
}
.contact__content {
  border-radius: 25px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 65px;
  background-color: #fff;
  transform: scale(0) translateY(5px);
  opacity: 0;
  transition: 0.3s ease-out;
}
.contact__content.visible {
  transform: scale(1) translateY(0);
  opacity: 1;
}
</style>

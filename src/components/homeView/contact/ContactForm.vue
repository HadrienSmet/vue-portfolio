<template>
  <form>
    <CustomInput dynamic-class="name-division" label-content="Name" label-for="from_name">
      <input type="text" id="from_name" name="from_name" />
    </CustomInput>
    <CustomInput dynamic-class="adress-division" label-content="Email" label-for="email_id">
      <input type="email" id="email_id" name="email_id" />
    </CustomInput>
    <CustomInput dynamic-class="mail-division" label-content="Message" label-for="message">
      <textarea name="message" id="message" />
    </CustomInput>
    <GradientBorder>
      <input class="submit-button" type="submit" value="Send" />
    </GradientBorder>
  </form>
</template>
<script setup lang="ts">
import CustomInput from '@/components/CustomInput.vue'
import GradientBorder from '@/components/GradientBorder.vue'
</script>
<style scoped>
@media screen and (min-width: 1025px) {
  form {
    width: 60%;
  }
  .gradient {
    width: 50%;
  }
}
@media screen and (max-width: 1024px) and (min-width: 768px) {
  form {
    width: 80%;
  }
  .gradient {
    width: 60%;
  }
}
@media screen and (max-width: 767px) {
  form {
    width: 90%;
  }
  .gradient {
    width: 100%;
  }
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}
form > div {
  width: 100%;
}
input,
textarea {
  width: 100%;
  padding: 15px 25px;
  border: 2px solid var(--clr-2);
  border-radius: 4px;
  opacity: 0;
}
input {
  transform: translateX(10%);
}
textarea {
  resize: none;
  height: 180px;
  transform: translateX(-10%);
}
.gradient {
  border: 3px solid transparent;
  border-radius: 4px;
  transition: 0.2s;
  opacity: 0;
  transform: translateY(60%);
}
.gradient input {
  background: transparent;
  border: none;
  text-transform: uppercase;
  font-family: 'title-fonts';
  font-size: 1.2em;
  letter-spacing: 2px;
}
.gradient:hover {
  background: linear-gradient(var(--clr-1), var(--clr-1)),
    linear-gradient(var(--clr-2), var(--clr-2));
  background-clip: padding-box, border-box;
  background-origin: border-box;
  translate: 0px -3px;
  scale: 1.05 0.95;
}
.gradient:hover input {
  background: var(--clr-2);
  background-clip: text;
  -webkit-background-clip: text !important;
}
</style>

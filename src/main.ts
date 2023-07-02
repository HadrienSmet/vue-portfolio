import './styles/1.Base/_fonts.scss'
import './styles/index.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import {
  CoPostgresql,
  CoTwitter,
  FaAngleDoubleUp,
  FaBook,
  FaFacebookSquare,
  FaGithub,
  FaHandsHelping,
  FaLinkedin,
  FaMedapps,
  FaRegularEnvelope,
  SiExpress,
  SiSocketdotio,
  ViFileTypeLightNext,
  ViFileTypeMongo,
  ViFileTypeNode,
  ViFileTypeReactjs,
  ViFileTypeSass,
  ViFileTypeTypescriptOfficial
} from 'oh-vue-icons/icons'

import App from './App.vue'
import router from './router'

addIcons(
  CoPostgresql,
  CoTwitter,
  FaAngleDoubleUp,
  FaBook,
  FaFacebookSquare,
  FaGithub,
  FaHandsHelping,
  FaLinkedin,
  FaMedapps,
  FaRegularEnvelope,
  SiExpress,
  SiSocketdotio,
  ViFileTypeLightNext,
  ViFileTypeMongo,
  ViFileTypeNode,
  ViFileTypeReactjs,
  ViFileTypeSass,
  ViFileTypeTypescriptOfficial
)

const app = createApp(App)
app.component('v-icon', OhVueIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')

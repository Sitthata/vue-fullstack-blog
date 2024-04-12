import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaFlag, RiZhihuFill, BiGithub, BiGoogle  } from "oh-vue-icons/icons";
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

addIcons(FaFlag, RiZhihuFill, BiGithub, BiGoogle);

const app = createApp(App).use(autoAnimatePlugin)
app.component("v-icon", OhVueIcon);
app.use(createPinia())
app.use(router)

app.mount('#app')

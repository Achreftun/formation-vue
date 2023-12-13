import { createApp } from 'vue'
import { fr } from 'yup-locales'
import { setLocale } from 'yup'
import { configure } from 'vee-validate'
import { createPinia } from 'pinia'

import router from './router'
import './style.css'
import App from './App.vue'


import('./validators/min-max.js')

setLocale(fr)

// import HelloWorld from './components/HelloWorld.vue'

configure({
   validateOnInput: true,
   validateOnChange: true,
   validateOnBlur: true
})

const pinia = createPinia()

const app = createApp(App)

app.config.globalProperties.BASE_URL = 'http://localhost:5555'

// .component('HelloWorld', HelloWorld)
app.use(router)
   .use(pinia)
   .mount('#app')

import { createApp } from 'vue'
import { fr } from 'yup-locales'
import { setLocale } from 'yup'
import { configure } from 'vee-validate'

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


createApp(App)
   // .component('HelloWorld', HelloWorld)
   .use(router)
   .mount('#app')

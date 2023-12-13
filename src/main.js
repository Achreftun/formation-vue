import { createApp } from 'vue'
import router from './router'
import './style.css'
import App from './App.vue'
import { configure } from 'vee-validate'
import('./validators/min-max.js')
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

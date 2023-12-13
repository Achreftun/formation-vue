import { createApp } from 'vue'
import router from './router'
import './style.css'
import App from './App.vue'
import('./validators/min-max.js')
// import HelloWorld from './components/HelloWorld.vue'

createApp(App)
   // .component('HelloWorld', HelloWorld)
   .use(router)
   .mount('#app')

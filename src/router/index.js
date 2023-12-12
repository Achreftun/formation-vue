// fichier de mapping (path,component)
import { createRouter, createWebHistory } from "vue-router"
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PrimeurView from '../views/PrimeurView.vue'
import ReactiveValue from '../views/ReactiveValue.vue'
import PaysView from '../views/PaysView.vue'

const routes = [
    {
        path: '/',
        component: HomeView,
        name: 'home'
    },
    {
        path: '/about',
        component: AboutView,
        name: 'about'
    },
    {
        path: '/primeur',
        component: PrimeurView,
        name: 'primeur'
    },
    {
        path: '/reactive',
        component: ReactiveValue,
        name: 'reactive'
    },
    {
        path: '/pays',
        component: PaysView,
        name: 'pays'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
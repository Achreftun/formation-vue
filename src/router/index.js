// fichier de mapping (path,component)
import { createRouter, createWebHistory } from "vue-router"
// import HomeView from '../views/HomeView.vue'
// import AboutView from '../views/AboutView.vue'
// import PrimeurView from '../views/PrimeurView.vue'
// import ReactiveValue from '../views/ReactiveValue.vue'
// import PaysView from '../views/PaysView.vue'
import AdresseView from '../views/AdresseView.vue'
// import CompteurView from '../views/CompteurView.vue'
// import PersonneView from '../views/PersonneView.vue'
// import PersonneDetails from '../views/PersonneDetails.vue'
// import CalculView from '../views/CalculView.vue'
// import TableauView from '../views/TableauView.vue'
// import NotFound from '../views/NotFound.vue'

const routes = [
    {
        path: '/',
        component: () => import('../views/HomeView.vue'),
        name: 'home',
        alias: ['/accueil', '/home']
    },
    {
        path: '/about',
        component: () => import('../views/AboutView.vue'),
        name: 'about'
    },
    {
        path: '/adresse',
        component: () => import('../views/AdresseView.vue'),
        name: 'adresse'
    },
    {
        path: '/adresse/:ville/:cp',
        redirect: to => {
            return { name: 'adresse', query: { ...to.params }, params: {} }
        }
    },


    {
        path: '/primeur',
        component: () => import('../views/PrimeurView.vue'),
        name: 'primeur'
    },
    {
        path: '/reactive',
        component: () => import('../views/ReactiveValue.vue'),
        name: 'reactive'
    },
    {
        path: '/pays',
        component: () => import('../views/PaysView.vue'),
        name: 'pays'
    },
    {
        path: '/compteur',
        component: () => import('../views/CompteurView.vue'),
        name: 'compteur'
    },
    {
        path: '/personne',
        component: () => import('../views/PersonneView.vue'),
        name: 'personne'
    },
    {
        path: '/personne/:id(\\d)',
        component: () => import('../views/PersonneDetails.vue'),
        name: 'personne-details',
        props: true
    },
    {
        path: '/calcul',
        redirect: {
            name: 'calcul',
            params: { op: 'plus' },
            query: { value1: 10, value2: 2 }
        }
    },
    {
        path: '/calcul/:op',
        component: () => import('../views/CalculView.vue'),
        name: 'calcul'
    },

    {
        path: '/tableau',
        redirect: { name: 'tableau', params: { id: 0 } }
    },
    {
        path: '/tableau/:id(\\d)',
        component: () => import('../views/TableauView.vue'),
        name: 'tableau',
    },
    // {
    //     path: '/:catchAll(.*)*',
    //     name: 'not-found',
    //     component: NotFound
    // }
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: () => import('../views/NotFound.vue')
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'lien-actif'
})
export default router

// 145Ko
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Experience from '../views/Experience.vue'
import Contact from '../views/Contact.vue'
import Illustrations from '../views/Illustrations.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/experience',
        name: 'Experience',
        component: Experience
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/illustrations',
        name: 'Illustrations',
        component: Illustrations
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

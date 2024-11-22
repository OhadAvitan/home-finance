import Home from '@/views/Home.vue'
import Survey from '@/views/Survey.vue'
import Congrats from '@/views/Congrats.vue'
import Shay from '@/views/Shay.vue'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        }
    },
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/Survey',
            name: 'Survey',
            component: Survey
        },
        {
            path: '/Congrats',
            name: 'Congrats',
            component: Congrats
        },
        {
            path: '/Shay',
            name: 'Shay',
            component: Shay
        },
    ]
})

export default router
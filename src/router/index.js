import Home from '@/views/Home.vue'
import Survey from '@/views/Survey.vue'
import Congrats from '@/views/Congrats.vue'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
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
    ]
})

export default router
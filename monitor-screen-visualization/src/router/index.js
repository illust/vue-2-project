import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/fouth-screen'
    },
    {
        path: '/first-screen',
        name: 'first-screen',
        component: () => import('../views/shanghaiScreen/FirstScreen.vue')
    },
    {
        path: '/second-screen',
        name: 'second-screen',
        component: () => import('../views/shanghaiScreen/SecondScreen.vue')
    },
    {
        path: '/third-screen',
        name: 'third-screen',
        component: () => import('../views/shanghaiScreen/ThirdScreen.vue')
    },
    {
        path: '/fouth-screen',
        name: 'fouth-screen',
        component: () => import('../views/shanghaiScreen/FouthScreen.vue')
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router
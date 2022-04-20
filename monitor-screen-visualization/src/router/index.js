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
        component: () => import(/* webpackChunkName:"first-scr" */'../views/shanghaiScreen/FirstScreen.vue')
    },
    {
        path: '/second-screen',
        name: 'second-screen',
        component: () => import(/* webpackChunkName:"second-scr" */'../views/shanghaiScreen/SecondScreen.vue')
    },
    {
        path: '/third-screen',
        name: 'third-screen',
        component: () => import(/* webpackChunkName:"third-scr" */'../views/shanghaiScreen/ThirdScreen.vue')
    },
    {
        path: '/fouth-screen',
        name: 'fouth-screen',
        component: () => import(/* webpackChunkName:"fouth-scr" */'../views/shanghaiScreen/FouthScreen.vue')
    },
    {
        path: '/fifth-screen',
        name: 'fifth-screen',
        component: () => import(/* webpackChunkName:"fifth-scr" */'../views/shanghaiScreen/FifthScreen.vue')
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/first-screen'
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
    },
    {
        path: '/sixth-screen',
        name: 'sixth-screen',
        component: () => import(/* webpackChunkName:"sixth-scr" */'../views/shanghaiScreen/SixthScreen.vue')
    },
    {
        path: '/seventh-screen',
        name: 'seventh-screen',
        component: () => import(/* webpackChunkName:"seventh-scr" */'../views/shanghaiScreen/SeventhScreen.vue')
    },
    {
        path: '/eighth-screen',
        name: 'eighth-screen',
        component: () => import(/* webpackChunkName:"eighth-scr" */'../views/shanghaiScreen/EighthScreen.vue')
    },
    {
        path: '/ninth-screen',
        name: 'ninth-screen',
        component: () => import(/* webpackChunkName:"ninhth-scr" */'../views/shanghaiScreen/NinthScreen.vue')
    },
    {
        path: '/tenth-screen',
        name: 'tenth-screen',
        component: () => import(/* webpackChunkName:"tenth-scr" */'../views/shanghaiScreen/TenthScreen.vue')
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router
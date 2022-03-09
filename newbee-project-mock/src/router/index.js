import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)


const routes = [
    {
        path: '/',
        name: 'home',
        redirect: '/home'
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            index: 2
        },
        component: () => import('../views/Login.vue')
    },
    {
        path: '/home',
        name: 'home',
        meta: {
            index: 1
        },
        component: () => import('../views/Home.vue') // webpackChunkName: "home"???
    },
    {
        path: '/cart',
        name: 'cart',
        meta: {
            index: 1
        },
        component: () => import('../views/Cart.vue')
    },
    {
        path: '/about',
        name: 'about',
        meta: {
            index: 1
        },
        component: () => import('../views/About.vue')
    },
    {
        path: '/category',
        name: 'category',
        meta: {
            index: 1
        },
        component: () => import('../views/Category.vue')
    },
    {
        path: '/product',
        name: 'product',
        meta: {
            index: 1
        },
        component: () => import('../views/Product.vue')
    },
    {
        path: '/product-list',
        name: 'product-list',
        meta: {
            index: 1
        },
        component: () => import('../views/ProductList.vue')
    },
    {
        path: '/user',
        name: 'user',
        meta: {
            index: 1
        },
        component: () => import('../views/User.vue')
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router
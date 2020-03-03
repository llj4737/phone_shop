import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Index',
        meta: {
            showNav: true
        },
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        meta: {
            showNav: true
        },
        component: () =>
            import ('../views/Home.vue')
    },
    {
        path: '/category',
        name: 'Category',
        meta: {
            showNav: true
        },
        component: () =>
            import ('../views/Category.vue')
    },
    {
        path: '/order',
        name: 'Order',
        meta: {
            showNav: true
        },
        component: () =>
            import ('../views/Order.vue')
    },
    {
        path: '/profile',
        name: 'Profile',
        meta: {
            showNav: true
        },
        component: () =>
            import ('../views/Profile.vue')
    },
    {
        path: '/login',
        name: 'Login',
        meta: {
            showNav: false
        },
        component: () =>
            import ('../views/Login.vue'),


    },
    {
        path: '/register',
        name: 'Register',
        meta: {
            showNav: false
        },
        component: () =>
            import ('../views/Register.vue'),

    },
    {
        path: '/prodetail/:pid',
        name: 'ProductDetail',
        meta: {
            showNav: false
        },
        component: () =>
            import ('../views/ProductDetail.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
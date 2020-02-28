import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Index',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: () =>
            import ('../views/Home.vue')
    },
    {
        path: '/category',
        name: 'Category',
        component: () =>
            import ('../views/Category.vue')
    },
    {
        path: '/order',
        name: 'Order',
        component: () =>
            import ('../views/Order.vue')
    },
    {
        path: '/profile',
        name: 'Profile',
        component: () =>
            import ('../views/Profile.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
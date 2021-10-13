import Vue from 'vue'
import VueRouter from 'vue-router'
import indexPage from "../views/Index.vue";
import stylesPage from "../views/Styles.vue";
import algorithmsPage from "../views/Algorithms.vue";
Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "Index",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () =>
        //   import(/* webpackChunkName: "Index" */ "../views/Index.vue"),
        component: indexPage,
    },
    {
        path: "/stylesPage",
        name: "styles",
        component: stylesPage,
    },
    {
        path: "/algorithmsPage",
        name: "algorithms",
        component: algorithmsPage,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

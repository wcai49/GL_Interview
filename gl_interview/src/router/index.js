import { createRouter, createWebHistory } from "vue-router";
import indexPage from '../views/Index.vue';
const routes = [
  {
    path: "/",
    name: "Index",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "Index" */ "../views/Index.vue"),
    component: indexPage
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
// 5 TOP index pages: index, ilearn, style playground, and algorithm playground;
import indexPage from "../views/Index.vue";
import iLearnPage from "../views/iLearn.vue";
import stylesPage from "../views/Styles.vue";
import algorithmsPage from "../views/Algorithms.vue";

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
    path: "/iLearnPage",
    name: "iLearn",
    component: iLearnPage,
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

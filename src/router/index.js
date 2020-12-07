import Vue from "vue";
import VueRouter from "vue-router";

// const Home =  () => import('@/views/Home.vue')
const Listeners =  () => import('@/views/listeners/index.vue')

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Listeners",
    component: Listeners
  },
  {
    path: "/listeners",
    name: "Listeners",
    component: Listeners
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

import Vue from "vue";
import VueRouter from "vue-router";

// const Home =  () => import('@/views/Home.vue')
const Listeners =  () => import('@/views/listeners/index.vue')
const Mininx =  () => import('@/views/mininx/index.vue')

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Mininx",
    component: Mininx
  },
  {
    path: "/listeners",
    name: "Listeners",
    component: Listeners
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.NODE_ENV === 'production'
  ? '/production-sub-path/'
  : '/wts',
  routes
});

export default router;

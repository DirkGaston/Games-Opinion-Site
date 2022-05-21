import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    alias: ["/inicio", "/home"],
    component: HomeView,
  },
  {
    path: "/opiniones",
    name: "opiniones",
    component: () =>
      import(/* webpackChunkName: "Carrito" */ "../views/ReView.vue"),
  },
  {
    path: "/administracion",
    name: "administracion",
    component: () =>
      import(/* webpackChunkName: "Carrito" */ "../views/AdminView.vue"),
  },
  {
    path: "/editando/:id",
    name: "editando",
    props: true,
    component: () =>
      import(/* webpackChunkName: "Carrito" */ "../views/EditView.vue"),
  },
  {
    path: "/*",
    name: "notfound",
    component: () =>
      import(/* webpackChunkName: "Carrito" */ "../views/NotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

import Router from "vue-router";
import UserLayout from "../layouts/UserLayout.vue";
import AdminLayout from "../layouts/AdminLayout.vue";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import Vue from "Vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
    meta: { layout: DefaultLayout },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    meta: { layout: DefaultLayout },
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/Profile.vue"),
    meta: { layout: UserLayout, requiresAuth: true },
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../views/Admin.vue"),
    meta: { layout: AdminLayout },
  },
];

const router = new Router({
  routes: routes,
});

export default router;

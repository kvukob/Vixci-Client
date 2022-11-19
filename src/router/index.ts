import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/core/home/views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../core/account/AccountLoginView.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("../core/account/AccountSignUpView.vue"),
  },
  {
    path: "/sign-up/:code",
    name: "sign-up-finalize",
    component: () => import("../core/account/AccountSignUpFinalizeView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

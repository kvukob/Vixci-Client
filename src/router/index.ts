import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/core/home/views/HomeView.vue";
import { useAccountStore } from "@/core/account/store";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../core/account/views/AccountLoginView.vue"),
  },
  {
    path: "/sign-up",
    name: "sign-up",
    component: () => import("../core/account/views/AccountSignUpView.vue"),
  },
  {
    path: "/sign-up/:code",
    name: "sign-up-finalize",
    component: () =>
      import("../core/account/views/AccountSignUpFinalizeView.vue"),
  },
  {
    path: "/app",
    name: "app",
    component: () => import("../core/vixci/VixciView.vue"),
    children: [
      {
        path: "settings",
        name: "app-settings",
        component: () => import("../core/settings/views/SettingsView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
/*
router.beforeEach((to, from, next) => {
  console.log(to.name);
  const publicPages = ["/", "/sign-up", "/login"];
  const authRequired = !publicPages.includes(to.path);
  const accountStore = useAccountStore();
  if (authRequired && !accountStore.getIsLoggedIn) {
    next("login");
  } else {
    next();
  }
});
 */

export default router;

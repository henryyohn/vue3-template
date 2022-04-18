import {
  createRouter,
  createWebHistory,
  Router,
  RouteRecordRaw,
} from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Login",
    component: () => import("@/pages/login/Login.vue"),
  },
];

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

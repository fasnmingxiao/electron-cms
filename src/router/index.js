import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import LoginPage from "../views/LoginPage.vue";
import store from "@/store";

const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      layout: "main",
      requiredAuth: true,
    },
    component: HomePage,
  },
  {
    path: "/login",
    name: "login",
    meta: {
      layout: "auth",
      guest: true,
    },
    component: LoginPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = store.state.AUTH.auth.accessToken;
  if (to.matched.some((record) => record.meta.requiredAuth)) {
    if (token) {
      next();
    } else {
      next({ name: "login" });
    }
  } else if (to.matched.some((record) => record.meta.guest)) {
    if (!token) {
      next();
    } else {
      next({ name: "home" });
    }
  } else {
    next();
  }
});
export default router;

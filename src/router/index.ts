import Vue from "vue";
import store from "../store";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import VueRouter from "vue-router";

import { getView, getCommon } from "utils/tools";

Vue.use(VueRouter);
import allRoutes from "./routes";

const routes = [
  {
    path: "/login",
    name: "login",
    component: getView("Login")
  },
  ...allRoutes,
  {
    path: "/",
    redirect: "/total"
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  NProgress.start(3000);
  const isLogin = store.state.isLogin;
  if (isLogin) {
    if (to.name === "login") {
      next({ name: "home" });
    } else {
      next();
    }
  } else {
    if (to.name === "login") {
      next();
    } else {
      next({ name: "login" });
    }
  }
});
router.afterEach((route: any) => {
  NProgress.done();
});
export default router;

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "animate.css";
import "./assets/css/common.less";
import "./assets/css/index.less";

import BaseTitle from "@/components/BaseTitle";
Vue.component("base-title", BaseTitle);

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

import Vue from "vue";
import Vuex from "vuex";
import { setItem, getItem, postData, getData } from "utils/tools";

import { API } from "../utils/config";
Vue.use(Vuex);

const isLogin = Boolean(localStorage.getItem("isLogin")) || false;

interface CommonState {
  isCollapsed?: boolean;
  isLogin?: boolean;
}

export default new Vuex.Store({
  state: {
    isCollapsed: false,
    isLogin
  },
  mutations: {
    changeCollapsed(state: CommonState, params: boolean): void {
      state.isCollapsed = params;
    },
    checkIsLogin(state: CommonState, status: boolean): void {
      state.isLogin = status;
    }
  },
  actions: {
    async Login(context: any, params: object) {
      const res = await postData(API.Login, params);

      if (res.errcode === 0) {
        const { token } = res.data;
        context.commit("checkIsLogin", token);
        setItem("isLogin", token);
      }
      return res;
      // return await new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //     context.commit("checkIsLogin", true);
      //     setItem("isLogin", true);
      //     resolve("ok");
      //   }, 300);
      // });
    }
  },
  modules: {}
});

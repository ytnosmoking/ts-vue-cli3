import axios, { AxiosRequestConfig } from "axios";
import { Message, MessageBox } from "element-ui";
import store from "../store";
import { BaseUrl } from "./config";
import { removeItem } from "utils/tools";
const service = axios.create({
  baseURL: BaseUrl,
  timeout: 5000
  // withCredentials: true // send cookies when cross-domain requests
});

// Request interceptors
service.interceptors.request.use(
  config => {
    // Add X-Access-Token header to every request, you can add other custom headers here
    if (store.state.isLogin) {
      config.headers.Authorization = "Bearer " + store.state.isLogin;
      // config.headers["X-Access-Token"] = store.state.isLogin;
    }
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

// Response interceptors
service.interceptors.response.use(
  response => {
    const res = response.data;

    if (res.errcode !== 0) {
      Message({
        message: res.errmsg || "Error",
        type: "error",
        duration: 5 * 1000
      });
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        MessageBox.confirm(
          "你已被登出，可以取消继续留在该页面，或者重新登录",
          "确定登出",
          {
            confirmButtonText: "重新登录",
            cancelButtonText: "取消",
            type: "warning"
          }
        ).then(() => {
          removeItem("isLogin");
          location.reload(); // To prevent bugs from vue-router
        });
      }
      return Promise.reject(new Error(res.errmsg || "Error"));
    } else {
      return res;
    }
  },
  error => {
    Message({
      message: error.message,
      type: "error",
      duration: 5 * 1000
    });
    return Promise.reject(error);
  }
);

export default service;

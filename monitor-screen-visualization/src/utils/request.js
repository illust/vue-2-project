import axios from "axios";
// import store from "@/store";
// import { getStorage } from "@/lib/storage";

const instance = axios.create({
  //   baseURL: process.env.VUE_APP_BASE_URL, // 如果不配置代理,就用这个
  baseURL: "/", // 如果配置代理就用这个
  timeout: 8500
});

// 创建请求拦截
instance.interceptors.request.use(
  config => {
    // 每次请求的时候 都拿到一个取消请求的方法
    // const Cancel = axios.CancelToken; // 产生一个请求令牌
    // config.headers["userId"] =
    //   (getStorage("userInfo") && getStorage("userInfo").userId) || "";
    // config.headers["terminal-type"] = "APP";
    // config.cancelToken = new Cancel(c => store.commit("ajax/push", c));

    return config;
  },
  error => {
    Promise.reject(error);
  }
);

// 创建响应拦截
instance.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    console.log("error", error);
    Promise.reject(error);
  }
);

export default instance;

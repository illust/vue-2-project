import axios from "axios";

const instance = axios.create({
  //   baseURL: process.env.VUE_APP_BASE_URL, // 如果不配置代理,就用这个
  baseURL: "/", // 如果配置代理就用这个
  // baseURL: "http://10.4.5.210:18880",
  timeout: 10000
});

// 创建请求拦截
instance.interceptors.request.use(
  config => {
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

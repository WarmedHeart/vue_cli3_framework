import axios from "axios";

export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
  });

  // 2.axios的拦截器
  // 2.1.请求拦截的作用
  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (err) => {
      // console.log(err);
      return Promise.reject(err); //es6写法
    }
  );

  // 2.2.响应拦截
  instance.interceptors.response.use(
    (res) => {
      if (!res.data || res.data == "") {
        return '{"flag":"failure","msg":"未知错误"}';
      }
      return res.data;
    },
    (err) => {
      // console.log(err);
      return Promise.reject(err); //es6写法
    }
  );

  // 3.发送真正的网络请求
  return instance(config);
}

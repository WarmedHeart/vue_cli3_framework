import Vue from "vue";
import VueRouter from "vue-router";
// 1.安装VueRouter
Vue.use(VueRouter);

// 2.获取路由信息
// 动态加载views中所有的路由文件
const files = require.context("@/views", true, /router\.js$/);
const routes = files
  .keys()
  .map((key) => {
    const page = require("@/views" + key.replace(".", ""));
    return page.default;
  })
  .flat();

// 默认跳转到布局页面
const defaultDirectect = {
  show: false,
  clickable: false,
  menu: "",
  title: "Hang-Vue3脚手架",
  path: "/",
  redirect: "/home/hot",
  children: []
};
routes.unshift(defaultDirectect);

// 3.创建路由对象
const router = new VueRouter({
  // mode: 'history',
  routes: routes
});

// 4.导出
export default router;

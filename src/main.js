import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import 'lib-flexible';
// import "./styles/base.css"; // 全局公共样式
// import "./assets/icon_fonts/iconfont.css";  // 全局阿里图标库

import Common from "./utils/util.js"; // 全局公共方法


Vue.prototype.common = Common;
Vue.config.productionTip = process.env.NODE_ENV === 'production'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import 'lib-flexible';
import "./styles/base.css"; // 全局公共样式
import "./assets/icon_fonts/iconfont.css";  // 全局阿里图标库

import Common from "./utils/util.js"; // 全局公共方法

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

Vue.prototype.common = Common;
Vue.use(ElementUI);
Vue.use(Antd);
Vue.config.productionTip = process.env.NODE_ENV === 'production'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

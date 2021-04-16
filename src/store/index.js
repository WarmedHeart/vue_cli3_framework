import Vue from 'vue'
import Vuex from 'vuex'

// import * as types from './types';

Vue.use(Vuex)

// 动态加载modules
const modules = {}
const files = require.context('@/views', true, /store\.js$/);

files.keys().map(key => { 
  const module = require('@/views' + key.replace('.', '')).default;
  // 获取名字(store.js中有moduleName字段才进行store注册)
  if (module["moduleName"]) {
    const moduleName = module["moduleName"];
    delete module["moduleName"];
    modules[`${moduleName}`] = module;
  }
})

const store = new Vuex.Store({
  state: {
    naem: "hang"
  },
  mutations: {

  },
  actions: {

  },
  getters: {

  },
  modules: modules
})

export default store

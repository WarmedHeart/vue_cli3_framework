import { GET_NAME } from "./type.js";

export default {
  moduleName: "homeStore",
  namespaced: true,
  state: {
    age: 100
  },
  mutations: {},
  actions: {},
  getters: {
    [GET_NAME](state) {
      return state.age;
    }
  }
};

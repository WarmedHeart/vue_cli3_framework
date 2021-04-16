import { ABOUT_TEST_VARIABLE } from "./type.js"

export default {
  namespaced: true,
  state: {
    name: "about"
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    [ABOUT_TEST_VARIABLE](state){
      return state.name;
    }
  }
}
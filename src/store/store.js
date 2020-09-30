import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

console.log(222);

export default new Vuex.Store({
  state: {
    username: localStorage.getItem('username') || ''
  },
  mutations: {
    INCREMENT: (state,params) => state.username = params
  },
  actions: {
    increment ({ commit }, payload) {
      console.log(payload);
      localStorage.setItem('username', payload)
      commit('INCREMENT',payload)
    }
  }
})
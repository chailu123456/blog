import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: ''
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
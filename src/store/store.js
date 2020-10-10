import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    username: localStorage.getItem('username') || '',
    currentTab: localStorage.getItem('tabs') || 'article'
  },
  mutations: {
    INCREMENT: (state,params) => state.username = params,
    TAB: (state,params) => state.tab = params
  },
  actions: {
    increment ({ commit }, payload) {
      console.log(payload);
      localStorage.setItem('username', payload)
      commit('INCREMENT',payload)
    },
    tabselect ({ commit }, payload) {
      console.log(payload);
      localStorage.setItem('tabs', payload)
      commit('TAB',payload)
    }
  }
})
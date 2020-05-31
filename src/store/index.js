import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    updateUser(state, userName) {
      state.user = userName;
    }
  },
  actions: {
    updateUser({commit}, userName){
      commit('updateUser', userName);
    }
  },
  modules: {
  }
})

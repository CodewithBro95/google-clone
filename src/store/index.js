import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    responseData: []
  },
  mutations: {
    setResponseData(state, payload){
      state.responseData = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})

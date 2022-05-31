import { createStore } from 'vuex'

export default createStore({
  state: {
    options: []
  },
  getters: {
  },
  mutations: {
    OPTIONS_UPDATE(state, maj) {
      state.options = maj;
    }
  },
  actions: {
  },
  modules: {
  }
})

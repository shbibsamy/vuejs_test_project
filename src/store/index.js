import { createStore } from 'vuex'

export default createStore({
  state: {
    options: [],
    data: [],
    info: [],
  },
  getters: {
  },
  mutations: {
    OPTIONS_UPDATE(state, maj) {
      state.options = maj;
    },
    DATA_UPDATE(state, maj) {
      state.data = maj;
    },
    INFO_UPDATE(state, maj) {
      state.info = maj;
    }
  },
  actions: {
  },
  modules: {
  }
})

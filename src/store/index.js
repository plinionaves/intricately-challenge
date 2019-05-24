import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  companies: [],
  error: undefined,
  loading: false,
  search: undefined
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})

import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export function createStore() {
  return new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    plugins: [createPersistedState()],
    state: {
      tabs: [],
      barActive: false,
      placement: 'bottom-right',
      viewState: 'active',
      route: null
    },
    actions,
    mutations,
    getters
  })
}

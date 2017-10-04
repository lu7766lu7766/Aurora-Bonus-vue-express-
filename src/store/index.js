import Vue from 'vue'
import Vuex from 'vuex'
import Api from './modules/api'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Api
  }
})

import Vue from 'vue'
import Vuex from 'vuex'
import Api from './modules/api'
import Users from './modules/users'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Api, Users
  }
})

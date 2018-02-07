import Vue from 'vue'
import Vuex from 'vuex'
import alert from '@/views/dashboard/store/alert'
import routers from '@/views/dashboard/store/routers'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    alert,
    routers
  },
  getters
})

export default store

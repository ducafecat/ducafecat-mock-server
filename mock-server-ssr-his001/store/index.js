import Vue from 'vue'
import Vuex from 'vuex'

import alert from './alert'
import routers from './routers'
import getters from './getters'

Vue.use(Vuex)

const store = () => new Vuex.Store({
    modules: {
        alert,
        routers
    },
    getters
})

export default store

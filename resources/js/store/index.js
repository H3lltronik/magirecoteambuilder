import Vue from 'vue'
import Vuex from 'vuex'

import Memorias from './memorias'
import Inventario from './inventario'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        Memorias,
        Inventario,
    }
})

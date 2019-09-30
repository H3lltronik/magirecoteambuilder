import axios from 'axios'

export default({
  state: {
      inventory: {
          memorias: [],
      }
  },
  mutations: {
      addMemoria (state, memoria) {
          state.inventory.memorias.push(memoria)
      }
  },
  actions: {
  },
  getters: {
      getInventory (state) {
          return state.inventory
      }
  }
})

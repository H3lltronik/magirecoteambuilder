import axios from 'axios'

export default({
  state: {
      inventory: {
          memorias: [],
          magicalGirls: [],
      }
  },
  mutations: {
      addMemoria (state, memoria) {
          state.inventory.memorias.push(memoria)
      },
      addMagicalGirl (state, magicalGirl) {
        state.inventory.magicalGirls.push(magicalGirl)
    },
  },
  actions: {
  },
  getters: {
      getInventory (state) {
          return state.inventory
      }
  }
})

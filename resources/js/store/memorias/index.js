import axios from 'axios'

export default({
  state: {
      memorias: [
          {
              id: 1,
              name: 'Back to Back',
              type: 'pasive',
              personal: false,
              thumbnail: "https://vignette.wikia.nocookie.net/magiarecord-en/images/1/18/Memoria_1345_s.png/revision/latest/scale-to-width-down/120?cb=20190524094939",
              image: "https://vignette.wikia.nocookie.net/magiarecord-en/images/5/5f/Memoria_1345_c.png/revision/latest?cb=20190524094912",
              rarity: 4,
              minHp: 808,
              maxHp: 2020,
              minAtk: 806,
              maxAtk: 2015,
              maxLvl: 50,
          },
          {
              id: 2,
              name: 'Dive into Summer',
              type: 'pasive',
              personal: false,
              thumbnail: "https://vignette.wikia.nocookie.net/magiarecord-en/images/d/d3/Memoria_1367_s.png/revision/latest/scale-to-width-down/120?cb=20190701102128",
              image: "https://vignette.wikia.nocookie.net/magiarecord-en/images/1/11/Memoria_1367_c.png/revision/latest?cb=20190701102116",
              rarity: 4,
              minHp: 731,
              maxHp: 1827,
              minAtk: 882,
              maxAtk: 2205,
              maxLvl: 50,
          },
          {
              id: 3,
              name: 'Hearts, Shared',
              type: 'pasive',
              personal: false,
              thumbnail: "https://vignette.wikia.nocookie.net/magiarecord-en/images/3/31/Memoria_1301_s.png/revision/latest/scale-to-width-down/120?cb=20190121192539",
              image: "https://vignette.wikia.nocookie.net/magiarecord-en/images/8/81/Memoria_1301_c.png/revision/latest?cb=20190121192539",
              rarity: 3,
              minHp: 548,
              maxHp: 1370,
              minAtk: 668,
              maxAtk: 1670,
              maxLvl: 40,
          },
          {
              id: 4,
              name: 'Encounter With a Hero',
              type: 'active',
              personal: true,
              thumbnail: "https://vignette.wikia.nocookie.net/magiarecord-en/images/9/9a/Memoria_1102_s.png/revision/latest/scale-to-width-down/120?cb=20170905205236",
              image: "https://vignette.wikia.nocookie.net/magiarecord-en/images/5/53/Memoria_1102_c.png/revision/latest?cb=20170905205236",
              rarity: 3,
              minHp: 426,
              maxHp: 1065,
              minAtk: 506,
              maxAtk: 1265,
              maxLvl: 40,
          },
          {
              id: 5,
              name: 'Max Effort One-Shot Gag',
              type: 'pasive',
              personal: false,
              thumbnail: "https://vignette.wikia.nocookie.net/magiarecord-en/images/3/3c/Memoria_1039_s.png/revision/latest/scale-to-width-down/120?cb=20170826113724",
              image: "https://vignette.wikia.nocookie.net/magiarecord-en/images/1/16/Memoria_1039_c.png/revision/latest?cb=20170826122803",
              rarity: 2,
              minHp: 424,
              maxHp: 1060,
              minAtk: 384,
              maxAtk: 960,
              maxLvl: 35,
          },
          {
              id: 6,
              name: 'A Bit of True Hope',
              type: 'active',
              personal: true,
              thumbnail: "https://vignette.wikia.nocookie.net/magiarecord-en/images/e/eb/Memoria_1245_s.png/revision/latest/scale-to-width-down/120?cb=20180821161542",
              image: "https://vignette.wikia.nocookie.net/magiarecord-en/images/9/9d/Memoria_1245_c.png/revision/latest?cb=20180821161542",
              rarity: 3,
              minHp: 450,
              maxHp: 1125,
              minAtk: 490,
              maxAtk: 1225,
              maxLvl: 40,
          },
          {
              id: 7,
              name: 'Minion of the Sheep Witch',
              type: 'pasive',
              personal: false,
              thumbnail: "https://vignette.wikia.nocookie.net/magiarecord-en/images/9/9b/Memoria_1015_s.png/revision/latest/scale-to-width-down/120?cb=20170826034650",
              image: "https://vignette.wikia.nocookie.net/magiarecord-en/images/1/1f/Memoria_1015_c.png/revision/latest?cb=20170923235510",
              rarity: 1,
              minHp: 220,
              maxHp: 550,
              minAtk: 200,
              maxAtk: 500,
              maxLvl: 30,
          },
      ],
      selectedMemoria: null,
  },
  mutations: {
    setSelectedMemoria (state, memoria) {
        console.log("ward2", memoria)
        state.selectedMemoria = memoria
    }
  },
  actions: {
  },
  getters: {
      getMemorias (state) {
          return state.memorias
      },
      getSelectedMemoria (state) {
          return state.selectedMemoria
      }
  }
})

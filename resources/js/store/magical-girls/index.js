import axios from 'axios'

export default({
  state: {
      magicalGirls: [
          {
              id: 1,
              name: 'Tamaki Iroha',
              type: 'Light',
              thumbnail: "https://magiarecord.gamepress.gg/sites/magiarecord/files/styles/thumbnail/public/magical-girl-sprites/Iroha.png?itok=sMtdT1IS",
              image: [ "https://vignette.wikia.nocookie.net/magiarecord-en/images/7/70/Tamaki_Iroha_01.png/revision/latest/scale-to-width-down/280?cb=20170823201839", "https://vignette.wikia.nocookie.net/magiarecord-en/images/6/68/Tamaki_Iroha_02.png/revision/latest/scale-to-width-down/280?cb=20170823201846", "https://vignette.wikia.nocookie.net/magiarecord-en/images/1/12/Tamaki_Iroha_03.png/revision/latest/scale-to-width-down/280?cb=20170823201847" , "https://vignette.wikia.nocookie.net/magiarecord-en/images/b/bb/Tamaki_Iroha_04.png/revision/latest/scale-to-width-down/280?cb=20180115152016", "https://vignette.wikia.nocookie.net/magiarecord-en/images/6/61/Tamaki_Iroha_05.png/revision/latest/scale-to-width-down/280?cb=20190326010206"],
              rarity: 1,
              hp: [
                    {
                        min: 3.068,
                        max: 9.204,
                    },
                    {
                        min: 3.323,
                        max: 10.633,
                    },
                    {
                        min: 3.963,
                        max: 13.474,
                    },
                    {
                        min: 4.930,
                        max: 17.748,
                    },
                    {
                        min: 5.505,
                        max: 22.020,
                    },
              ],
              atk: [
                    {
                        min: 878,
                        max: 2634,
                    },
                    {
                        min: 948,
                        max: 3.033,
                    },
                    {
                        min: 1.132,
                        max: 3.848,
                    },
                    {
                        min: 1.405,
                        max: 5.058,
                    },
                    {
                        min: 1.569,
                        max: 6.276,
                    },
                ],
              def: [
                    {
                        min: 1.157,
                        max: 3.471,
                    },
                    {
                        min: 1.255,
                        max: 4.016,
                    },
                    {
                        min: 1.497,
                        max: 5.089,
                    },
                    {
                        min: 1.865,
                        max: 6.714,
                    },
                    {
                        min: 2.083,
                        max: 8.332,
                    },
               ],
               idPersonalMemoria: 8,
               discs: 'AABBC',
          },
          {
            id: 1,
            name: 'Fate T. Harlaown',
            type: 'Light',
            thumbnail: "https://magiarecord.gamepress.gg/sites/magiarecord/files/styles/thumbnail/public/2019-08/Fate%20Icon.png?itok=UNkE1nY8",
            image: [ "https://vignette.wikia.nocookie.net/magiarecord-en/images/7/7b/Fate_T._Harlaown_04.png/revision/latest/scale-to-width-down/280?cb=20190625130958", "https://vignette.wikia.nocookie.net/magiarecord-en/images/4/4c/Fate_T._Harlaown_05.png/revision/latest/scale-to-width-down/280?cb=20190625131018"],
            rarity: 4,
            hp: [
                  {
                      min: 4.950,
                      max: 17.948,
                  },
                  {
                      min: 5.607,
                      max: 22.596,
                  },
            ],
            atk: [
                  {
                      min: 2.219,
                      max: 7.132,
                  },
                  {
                      min: 2.526,
                      max: 10.028,
                  },
              ],
            def: [
                  {
                      min: 1.577,
                      max: 5.759,
                  },
                  {
                      min: 1.787,
                      max: 7.255,
                  },
             ],
             idPersonalMemoria: 9,
             discs: 'ABBCC',
        },
      ],
      selectedMagicalGirl: null,
  },
  mutations: {
    setSelectedMagicalGirl (state, magicalGirl) {
        console.log("ward2", magicalGirl)
        state.selectedMagicalGirl = magicalGirl
    }
  },
  actions: {
  },
  getters: {
      getMagicalGirls (state) {
          return state.magicalGirls
      },
      getSelectedMagicalGirl (state) {
          return state.selectedMagicalGirl
      }
  }
})

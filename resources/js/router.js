import Vue from 'vue'
import Router from 'vue-router'
import MainPage from './views/MainPage.vue';

import MainBase from './views/MainInventory.vue'; // Contiene el segundo router
import PopulateMemoriaInventory from './views/CreateInventory.vue';
import MemoriaInventory from './views/MemoriaInventory.vue';

import PopulateMagicalGirlsInventory from './views/MGPopulateInventory.vue';
import MagicalGirlsInventory from './views/MGInventory.vue';

Vue.use(Router)

const router = new Router({
    routes: [
      {
        path: '/',
        name: 'Main page',
        component: MainPage
      },
      {
        path: '/app/inventory',
        component: MainBase,
        children: [
            {
                path: 'memorias/select',
                name: 'Populate memoria inventory',
                component: PopulateMemoriaInventory
            },
            {
                path: 'memorias/show',
                name: 'Memoria Inventory',
                component: MemoriaInventory
            },
            {
                path: 'magical-girls/select',
                name: 'Populate Magical Girls inventory',
                component: PopulateMagicalGirlsInventory
            },
            {
                path: 'magical-girls/show',
                name: 'Magical Girls Inventory',
                component: MagicalGirlsInventory
            },
        ]
      },
    ],
    mode: 'history'
  })


  export default router

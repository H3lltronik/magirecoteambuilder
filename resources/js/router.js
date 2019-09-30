import Vue from 'vue'
import Router from 'vue-router'
import MainPage from './views/MainPage.vue';
import CreateInventory from './views/CreateInventory.vue';

Vue.use(Router)

const router = new Router({
    routes: [
      {
        path: '/',
        name: 'Main page',
        component: MainPage
      },
      {
        path: '/createInvetory',
        name: 'Create inventory',
        component: CreateInventory
      },
    ],
    mode: 'history'
  })


  export default router

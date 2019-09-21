import Vue from 'vue'
import Router from 'vue-router'
import MainPage from './components/MainPage.vue';
import CreateInventory from './components/CreateInventory.vue';

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

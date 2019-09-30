require('./bootstrap');
import Vue from 'vue';
import ElementUI from 'element-ui'
import Vuex from 'vuex';
import router from './router'
import { store } from './store'

import 'element-ui/lib/theme-chalk/index.css';

import Main from './views/Main.vue';


Vue.use(Vuex);
Vue.use(ElementUI);

Vue.component('main-component', Main);


const app = new Vue({
    el: '#app',
    router,
    store,
    delimiters: ["<%","%>"],
});

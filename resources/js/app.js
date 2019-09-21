require('./bootstrap');
import Vue from 'vue';
import Vuex from 'vuex';
import router from './router'

import Main from './components/Main.vue';


Vue.use(Vuex);
Vue.component('main-component', Main);


const app = new Vue({
    el: '#app',
    router,
    delimiters: ["<%","%>"],
});

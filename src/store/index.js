import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import login from './modules/login';

import getters from './getters';


const store = new Vuex.Store({
  modules: {
    login
  },
  getters
})

export default store;
//main.js中需要额外引入
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);



import axios from 'axios';


export default new Vuex.Store({
  state: {
    t: {
      name: 1
    }
  },
  getters: {},
  mutations: {},
  actions: {}
})

//main.js中需要额外引入
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//样式初始化
import '../static/css/reset.css';
//引入axios请求
import axios from './axios/http';
Vue.prototype.$http = axios;
Vue.config.productionTip = false

//引入顶部提示消息
import notie from 'notie';
import '../static/css/notie.css';
Vue.prototype.$notie = notie;

import store from './vuex/store';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})

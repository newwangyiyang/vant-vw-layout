import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: resolve => require(['@/views/login/login'], resolve)
    },
    {
      path: '*',
      component: resolve => require(['@/views/page404/page404'], resolve)
    }
  ]
})

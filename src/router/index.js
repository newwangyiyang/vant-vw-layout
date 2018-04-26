import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve => require(['@/views/index'], resolve)
    },
    {
      path: '/page404',
      name: 'page404',
      component: resolve => require(['@/views/page404'], resolve)
    },
    {
      path: '*',
      component: resolve => require(['@/views/page404'], resolve)
    }
  ]
})

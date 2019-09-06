import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '@/pages/common/Main'
import Login from '@/pages/common/login'

import Store from './store' //门店
import Supply from './supply' //供应

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/main',
      name: 'main',
      component: Main,
      children: [...Store, ...Supply]
    }
  ]
})

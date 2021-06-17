import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/mainList',
      name: 'mainList',
      component: () => import('../page/PageMain')
    },
    {
      path: '/add/payment/:category',
      name: 'AddPayment',
      component: () => import('../page/PageAddPayment')
    }
  ]
})
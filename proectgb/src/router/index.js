import Vue from 'vue'
import Router from 'vue-router'

import PageMain from '../page/PageMain'
import PageAddPayment from '../page/PageAddPayment'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/mainList',
      name: 'mainList',
      component: PageMain
    },
    {
      path: '/add/payment/:category',
      name: 'AddPayment',
      component: PageAddPayment
    }
  ]
})
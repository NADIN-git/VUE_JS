import Vue from 'vue'
import App from './App.vue'

import store from './assets/store'
import router from './router'
import modal from './plugins/ModalWindow'
import context from './plugins/ModalWindow/ContextMenu'

Vue.config.productionTip = false
Vue.use(modal)
Vue.use(context)

new Vue({
  render: h => h(App),
  store,
  router,
  modal,
  context
}).$mount('#app')
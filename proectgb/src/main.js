import Vue from 'vue'
import App from './App.vue'

import store from './assets/store'
import router from './router'
import modal from './plugins/ModalWindow'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(modal)

new Vue({
  render: h => h(App),
  store,
  router,
  modal,
  vuetify
}).$mount('#app')
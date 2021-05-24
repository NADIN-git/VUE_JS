import Vue from 'vue'
import App from './App.vue'

import store from './assets/store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
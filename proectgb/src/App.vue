<template>
  <v-app>
    <v-app-bar app flat>
      <v-btn :ripple="false" plain to="/mainList">Мои личные расходы</v-btn>
      <v-btn :ripple="false" plain to="/add/payment/Образование?value=5000">Образование-5000</v-btn>
      <v-btn :ripple="false" plain to="/add/payment/Спорт?value=2400">Спорт-2400</v-btn>
      <v-btn :ripple="false" plain to="/add/payment/Транспорт?value=1000">Транспорт-1000</v-btn>
    </v-app-bar>
    <transition name="fade">
      <Modal v-if="modalShow" :name="modalShow"/>
    </transition>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
    Modal: () => import('./components/modalwindow/Modal')
  },
  data () {
    return {
      category: 'AddPayment',
      modalShow: false
    }
  },
  methods: {
    onShow ({ name }) {
      this.modalShow = name
    },
    onClose () {
      this.modalShow = ''
    }
  },
  mounted () {
    this.$modal.EventBus.$on('show', this.onShow)
    this.$modal.EventBus.$on('close', this.onClose)
  },
  beforeDestroy () {
    this.$modal.EventBus.$off('show', this.onShow)
    this.$modal.EventBus.$off('close', this.onClose)
  }
}
</script>

<style lang="scss" module>
:global(.fade-enter-active), :global(.fade-leave-active) {
  transition: opacity 1s;
}
:global(.fade-enter), :global(.fade-leave-to) {
  opacity: 0;
}
</style>

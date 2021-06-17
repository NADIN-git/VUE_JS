<template>
  <div id="app">
    <transition name="fade">
      <Modal v-if="modalShow" :name="modalShow" :settings="modalSettings"/>
    </transition>
    <header class="myHeader">
      <router-link  to="/mainList">Мои личные расходы</router-link>
      <router-link  to="/add/payment/Образование?value=5000">Образование-5000</router-link>
      <router-link  to="/add/payment/Спорт?value=2400">Спорт-2400</router-link>
      <router-link  to="/add/payment/Транспорт?value=1000">Транспорт-1000</router-link>
      <br/>
    </header>
    <main>
      <router-view />
    </main>
    <transition name="fade">
      <ContextMenu />
    </transition>
  </div>
</template>

<script>
import ContextMenu from './components/ContextMenu'
export default {
  name: 'App',
  components: {
    Modal: () => import('./components/modalwindow/Modal'),
    ContextMenu
  },
  data () {
    return {
      category: 'AddPayment',
      modalShow: false,
      modalSettings: {}
    }
  },
  methods: {
    onShow ({ name, settings }) {
      this.modalShow = name
      this.modalSettings = settings
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
  transition: opacity 2s;
}
:global(.fade-enter), :global(.fade-leave-to) {
  opacity: 0;
}
</style>

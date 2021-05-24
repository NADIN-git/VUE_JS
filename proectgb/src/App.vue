<template>
  <div id="app">
    <header :class="[$style.header]">
      Мои личные расходы
    </header>
    <main>
      <paymentsList />
    </main>
  </div>
</template>

<script>
import PaymentsList from './components/PaymentsList'
import { mapActions } from 'vuex'
export default {
  name: 'App',
  components: {
    PaymentsList
  },
  data () {
    return {
    }
  },
  methods: {
    ...mapActions([
      'fetchData'
    ])
  },
  mounted () {
    this.fetchData()
  }
}
</script>

<style lang="scss" module>
.header {
  color: black;
  font-size: 25px;
  padding-left: 250px
}
</style>

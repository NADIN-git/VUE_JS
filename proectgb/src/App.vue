<template>
  <div id="app">
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
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      category: 'AddPayment'
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" module>
</style>

<template>
<div class="table">
  <paymentForm @add="onDataAdded" />
    <tr>
      <table id="myTable">
        <td class="strTable"> № п/п </td>
        <td class="strTable"> Дата </td>
        <td class="strTable"> Категория </td>
        <td class="strTable"> Цена </td>
      </table>
    </tr>
    <div v-for="(item,index) in currentElements" :key="index">
      <table id="myTable">
        <tr>
          <td class="strTable">{{ item.id }}</td>
          <td class="strTable">{{ item.date }}</td>
          <td class="strTable">{{ item.category }}</td>
           <td class="strTable">{{ item.price }}</td>
        </tr>
      </table>
    </div>
    <paymentPage
    @changePage="onChangePage"
    :length="12"
    :n="n" />
  </div>
</template>

<script>
import PaymentPage from './PaymentPage'
import PaymentForm from './PaymentForm'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    PaymentPage,
    PaymentForm
  },
  data () {
    return {
      page: 1,
      n: 3
    }
  },
  methods: {
    ...mapActions([
      'fetchData'
    ]),
    onChangePage (p) {
      this.page = p
      this.fetchData(p)
    }
  },
  mounted () {
    this.fetchData(this.page)
  },
  computed: {
    ...mapGetters([
      'getPaymentslist'
    ]),
    currentElements () {
      const { n, page } = this
      return this.getPaymentslist.slice(n * (page - 1), n * (page - 1) + n)
    }
  }
}
</script>
<style scoped lang="scss">

</style>

<template>
<div class="table">
  <paymentForm :length="getPaymentslist.length" />
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
    <paymentPage @changePage="onChangePage" :length="getPaymentslist.length" :n="n" />
  </div>
</template>

<script>
import PaymentPage from './PaymentPage'
import PaymentForm from './PaymentForm'
import { mapGetters } from 'vuex'
export default {
  components: {
    PaymentPage,
    PaymentForm
  },
  data () {
    return {
      page: 5,
      n: 10
    }
  },
  methods: {
    onChangePage (p) {
      this.page = p
    }
  },
  computed: {
    ...mapGetters([
      'getPaymentslist',
      'validPaymentslist'
    ]),
    currentElements () {
      const { n, page } = this
      return this.validPaymentslist.slice(n * (page - 1), n * (page - 1) + n)
    }
  }
}
</script>
<style scoped lang="scss">

</style>

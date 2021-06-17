<template>
<div class="table">
  <Modal v-if="modalFlag" modal='PaymentForm' />
  <button :length="getPaymentslist.length" @click="showPaymentForm">Открыть модальное окно</button>
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
          <td @click="onContextMenuClick($event, item.id)" class="strMenu">⋮</td>
        </tr>
      </table>
    </div>
    <paymentPage @changePage="onChangePage" :length="getPaymentslist.length" :n="n" />
  </div>
</template>

<script>
import PaymentPage from './PaymentPage'
import Modal from './modalwindow/Modal'
import { mapGetters, mapMutations } from 'vuex'
export default {
  components: {
    PaymentPage,
    Modal
  },
  data () {
    return {
      page: 5,
      n: 10,
      modalFlag: false
    }
  },
  methods: {
    ...mapMutations([
      'deleteItem'
    ]),
    onChangePage (p) {
      this.page = p
    },
    showPaymentForm () {
      this.$modal.show('PaymentForm')
    },
    closePaymentForm () {
      this.$modal.close()
    },
    onContextMenuClick (event, id) {
      const items = [
        { text: 'Delete', action: () => { this.deleteItem(id) } },
        { text: 'Edit', action: () => { this.$modal.show('PaymentForm', { id }) } }
      ]
      this.$context.show({ event, items })
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
<style lang="scss" module>
</style>

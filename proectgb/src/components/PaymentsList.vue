<template>
<div>
  <!--button @click="closePaymentForm">Закрыть модальное окно</button-->
  <!--paymentForm :length="getPaymentslist.length" /-->
  <v-data-table
    :headers="tableHeaders"
    :items="getPaymentslist"
    :items-per-page="10"
    class="elevation-1">
  </v-data-table>
    <!--tr>
      <table id="myTable">
        <td class="strTable"> № п/п </td>
        <td class="strTable"> Дата </td>
        <td class="strTable"> Категория </td>
        <td class="strTable"> Цена </td>
      </table>
    </tr>
    <div v-for="(item,index) in currentElements"
      :key="index"
      :item="item"
      :editMethod="editMethod">
      <table id="myTable">
        <tr>
          <td class="strTable">{{ item.id }}</td>
          <td class="strTable">{{ item.date }}</td>
          <td class="strTable">{{ item.category }}</td>
          <td class="strTable">{{ item.price }}</td>
          <Modal v-on="oprPrice(item.price)" v-if="modalFlag" modal='ContextMenu' :itemAttr="item.price" />
        </tr>
      </table>
    </div-->
    <!--paymentPage @changePage="onChangePage" :length="getPaymentslist.length" :n="n" /-->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      masKat: ['Образование', 'Спорт', 'Коммунальные услуги'],
      page: 5,
      n: 10,
      modalFlag: true,
      item: null,
      tableHeaders: [
        { text: '#', value: 'id' },
        { text: 'Дата', value: 'date' },
        { text: 'Категория', value: 'category' },
        { text: 'Цена', value: 'price' }
      ]
    }
  },
  props: {
    showForm: Boolean
  },
  methods: {
    onChangePage (p) {
      this.page = p
    },
    showPaymentForm () {
      this.$modal.show('ContextMenu')
    },
    closePaymentForm () {
      this.$modal.close()
    },
    oprPrice (op) {
      this.$emit('onOprPrice', op)
      console.log(op)
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
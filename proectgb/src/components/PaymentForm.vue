<template>
  <div class="addRecord">
    <input class="operButton" placeholder="Дата" v-model="date" />
      <select class="operButton" v-model="category">
        <option disabled value="">Выберите один из вариантов</option>
        <option>Образование</option>
        <option>Коммунальные услуги</option>
        <option>Спорт</option>
        <option>Транспорт</option>
      </select>
      <input class="operButton" placeholder="Цена" v-model.number="price" />
      <button class="operButton" @click="addTable">Сохранить</button>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  data () {
    return {
      id: '',
      date: '',
      category: '',
      price: '',
      formaAdd: false
    }
  },
  props: {
    length: Number,
    itemID: Number
  },
  methods: {
    ...mapMutations([
      'addRecord',
      'updateRecord',
      'addNewRecord'
    ]),
    ...mapGetters([
      'getPaymentslist',
      'validPaymentslist'
    ]),
    closePaymentForm () {
      this.$modal.close()
    },
    sw () {
      if (this.formaAdd === false) {
        this.formaAdd = true
      } else {
        this.formaAdd = false
      }
    },
    addTable () {
      this.formaAdd = true
      const { date, category, price } = this
      const payload = { date, category, price }
      if (this.itemID) {
        payload.id = this.itemID
        this.updateRecord(payload)
      } else {
        this.addNewRecord(payload)
      }
    }
  },
  computed: {
    ...mapGetters([
      'getPaymentslist'
    ])
  },
  mounted () {
    this.category = ''
    this.category = this.$route.params.category
    this.price = this.$route.query.value
    const nDate = new Date()
    const nMonth = nDate.getMonth() + 1
    this.date = nDate.getDate() + '.' + nMonth + '.' + nDate.getFullYear()
    if (this.itemID) {
      const item = this.getPaymentslist.find(p => p.id === this.itemID)
      if (item) {
        this.date = item.date
        this.category = item.category
        this.price = item.price
      }
    }
  }
}
</script>
<style scoped lang="scss">

</style>

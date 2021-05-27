<template>
  <div class="addTable">
    <input class="operButton" placeholder="Дата" v-model="date" />
      <select class="operButton" v-model="category">
        <option disabled value="">Выберите один из вариантов</option>
        <option>Образование</option>
        <option>Коммунальные услуги</option>
        <option>Спорт</option>
        <option>Транспорт</option>
      </select>
      <input class="operButton" placeholder="Цена" v-model.number="price" />
      <button class="operButton" @click="addTable">Добавить</button>
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
    length: Number
  },
  methods: {
    ...mapMutations([
      'addRecord'
    ]),
    ...mapGetters([
      'getPaymentslist',
      'validPaymentslist'
    ]),
    sw () {
      if (this.formaAdd === false) {
        this.formaAdd = true
      } else {
        this.formaAdd = false
      }
    },
    addTable () {
      this.formaAdd = true
      this.addRecord({
        date: this.date,
        category: this.category,
        price: this.price,
        id: this.length + 1
      })
      this.price = this.category = ''
    }
  },
  mounted () {
    this.id = this.length + 1
    this.category = ''
    this.category = this.$route.params.category
    this.price = this.$route.query.value
    const nDate = new Date()
    const nMonth = nDate.getMonth() + 1
    this.date = nDate.getDate() + '.' + nMonth + '.' + nDate.getFullYear()
  }
}
</script>
<style scoped lang="scss">

</style>

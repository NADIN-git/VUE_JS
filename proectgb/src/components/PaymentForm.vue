<template>
  <div class="addTable">
    <button class="operButton" @click="sw">Форма добавления расходов</button>
    <div v-if="formaAdd">
      <input class="operButton" placeholder="Дата" v-model="date" />
      <!--input class="operButton" placeholder="Категория" v-model="category" /-->
      <select class="operButton" v-model="category">
        <option disabled value="">Выберите один из вариантов</option>
        <option>Образование</option>
        <option>Коммунальные услуги</option>
        <option>Спорт</option>
      </select>
      <input class="operButton" placeholder="Цена" v-model.number="price" />
      <button class="operButton" @click="addTable">Добавить</button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  data () {
    return {
      id: this.getPaymentslist.length + 1,
      date: '',
      category: '',
      price: '',
      formaAdd: false
    }
  },
  methods: {
    ...mapMutations([
      'addRecord'
    ]),
    ...mapGetters([
      'getPaymentslist'
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
        id: this.id
      })
      this.date = this.price = this.category = ''
    }
  }
}
</script>
<style scoped lang="scss">

</style>

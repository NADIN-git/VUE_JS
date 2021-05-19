<template>
  <div class="addTable">
    <button class="operButton" @click="sw">Форма добавления расходов</button>
    <div v-if="formaAdd">
      <input class="operButton" placeholder="Дата" v-model="date" />
      <input class="operButton" placeholder="Категория" v-model="category" />
      <input class="operButton" placeholder="Цена" v-model.number="price" />
      <button class="operButton" @click="addTable">Добавить</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      date: '',
      category: '',
      price: '',
      formaAdd: false
    }
  },
  props: {
    items: Array
  },
  methods: {
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
      this.$emit('add', { date, category, price })
    }
  }
}
</script>
<style scoped lang="scss">

</style>

<template>
  <div>
    <!--input class="operButton" placeholder="Дата" v-model="date" />
      <select class="operButton" v-model="category">
        <option disabled value="">Выберите один из вариантов</option>
        <option>Образование</option>
        <option>Коммунальные услуги</option>
        <option>Спорт</option>
        <option>Транспорт</option>
      </select>
      <input @oprPrice="onOprPrice" class="operButton" placeholder="Цена" v-model.number="price" />
      <button class="operButton" @click="addTable">Сохранить</button>
      <button class="operButton" @click="closeWindowForm">Выйти без сохранения</button-->
      <v-col
        cols="12"
        sm="6"
        md="4">
        <v-menu
          v-model="data"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto">
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              label="Дата"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on">
            </v-text-field>
          </template>
          <v-date-picker
            v-model="date"
            @input="menu2 = false">
          </v-date-picker>
        </v-menu>
      </v-col>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="category"
        label="Категория"
        required>
      </v-text-field>
      <v-text-field
        v-model.number="price"
        label="Цена"
        required>
      </v-text-field>
      <v-btn @click="addTable">Сохранить</v-btn>
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
      formaAdd: true
    }
  },
  props: {
    length: Number,
    n: Number,
    showForm: Boolean,
    itemAttr: Number
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
    },
    closeWindowForm () {
      this.$emit('closeForm')
    },
    onOprPrice (p) {
      this.price = p
      this.itemAttr = p
      console.log(this.itemAttr)
    }
  },
  mounted () {
    this.id = this.length + 1
    this.category = ''
    this.category = this.$route.params.category
    this.price = ''
    this.price = this.$route.query.category
  }
}
</script>
<style scoped lang="scss">

</style>

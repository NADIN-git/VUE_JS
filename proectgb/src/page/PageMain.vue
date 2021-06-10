<template>
<div>
  <div class="text-h5 text-md-h3 my-8 text-center">
  Мои личные расходы
  </div>
<v-row>
  <v-col>
    <v-dialog v-model="showForm">
        <template v-slot:activator="{ on }">
        <v-btn
          color="teal"
          dark
          v-on="on">
          Открыть модальное окно
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
        </template>
        <v-card>
          <paymentForm />
        </v-card>
      </v-dialog>
      <PaymentsList /></v-col>
    <v-col>
      <PieChartjs />
    </v-col>
</v-row>
</div>
</template>

<script>
import PaymentsList from '../components/PaymentsList'
import PaymentForm from '../components/PaymentForm'
import PieChartjs from '../components/PieChartjs'
import { mapActions } from 'vuex'

export default {
  components: {
    PaymentsList,
    PaymentForm,
    PieChartjs
  },
  data () {
    return {
      showForm: false
    }
  },
  methods: {
    ...mapActions([
      'fetchData'
    ])
  },
  mounted () {
    this.fetchData()
  }
}
</script>

<style>
</style>
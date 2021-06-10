<template>
  <div>
    <!--PaymentForm /-->
    <v-card>
      <PaymentForm v-if="showForm" @closeForm="onCloseForm" />
    </v-card>
  </div>
</template>

<script>
import PaymentForm from '../components/PaymentForm'
export default {
  components: {
    PaymentForm
  },
  data () {
    return {
      showForm: true
    }
  },
  methods: {
    onCloseForm () {
      this.showForm = false
    }
  },
  mounted () {
    this.PaymentForm.required()
  }
}
</script>

<style>
</style>
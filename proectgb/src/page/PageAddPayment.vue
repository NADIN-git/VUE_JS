<template>
  <div>
    <PaymentForm />
  </div>
</template>

<script>
import PaymentForm from '../components/PaymentForm'
export default {
  components: {
    PaymentForm
  },
  mounted () {
    this.PaymentForm.required()
  }
}
</script>

<style>
</style>
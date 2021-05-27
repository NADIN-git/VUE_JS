<template>
  <div>
    <PaymentsList />
  </div>
</template>

<script>
import PaymentsList from '../components/PaymentsList'
import { mapActions } from 'vuex'
export default {
  components: {
    PaymentsList
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
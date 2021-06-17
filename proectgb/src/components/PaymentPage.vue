<template>
  <div class="itemsTable">
    <button class="operButton"
      @click="numberPage(nPage)" v-for="nPage in amount" :key="nPage"> {{nPage}} </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    length: Number,
    n: Number
  },
  computed: {
    amount () {
      return Math.ceil(this.length / this.n)
    }
  },
  methods: {
    numberPage (op) {
      this.$emit('changePage', op)
    }
  }
}
</script>
<style scoped lang="scss">

</style>

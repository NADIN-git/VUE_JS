<template>
  <div class="itemsTable">
    <button class="operButton"
      @click="numberPage(nPage)" v-for="nPage in colPage" :key="nPage"> {{nPage}} </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      listN: 0,
      listK: 0
    }
  },
  props: {
    items: Array,
    colPage: Number
  },
  methods: {
    numberPage (op) {
      const { listN, listK } = this
      this.listN = op * 5 - 5
      this.listK = this.listN + 5
      this.$emit('changePage', { listN, listK })
    }
  }
}
</script>
<style scoped lang="scss">

</style>

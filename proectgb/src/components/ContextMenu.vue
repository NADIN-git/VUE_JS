<template>
  <div>
    <nav>
      <transition name="fade" mode="out-in">
        <i menu v-if="!show" @click="show = !show" key="menu">...</i>
        <i clear v-else  @click="closeContext" key="clear">...</i>
      </transition>
      <transition name="fade">
        <ul class="contextMenu" v-if="show">
          <li @oprPrice="onOprPrice" @click="showForm = !showForm" class="contextMenuPunct">Редактировать</li>
          <li class="contextMenuPunct">Удалить</li>
        </ul>
      </transition>
     </nav>
     <paymentForm class="formRed" v-if="showForm" @closeForm="onCloseForm" />
  </div>
</template>

<script>
import PaymentForm from './PaymentForm'
import { mapGetters } from 'vuex'
export default {
  components: {
    PaymentForm
  },
  data () {
    return {
      show: false,
      showForm: false
    }
  },
  props: {
    length: Number,
    itemAttr: Number
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
      this.addRecord({
        date: this.date,
        category: this.category,
        price: this.price,
        id: this.length + 1
      })
      this.price = this.category = ''
    },
    closeContext () {
      this.show = false
      this.showForm = false
    },
    onCloseForm () {
      this.showForm = false
    },
    onOprPrice (p) {
      this.itemAttr = p
      console.log(this.itemAttr)
    }
  },
  mounted () {
    this.id = this.length + 1
    this.category = ''
    this.category = this.$route.params.category
    const nDate = new Date()
    const nMonth = nDate.getMonth() + 1
    this.date = nDate.getDate() + '.' + nMonth + '.' + nDate.getFullYear()
  },
  computed: {
    ...mapGetters([
      'validPaymentslist'
    ]),
    currentElements () {
      const n = this
      return this.validPaymentslist.slice(n)
    }
  }
}
</script>
<style scoped lang="scss">

</style>

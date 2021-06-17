<template>
  <div :class="[$style.wrapper]">
    <div :class="[$style.overlay]">
      <div :class="[$style.content]">
        <PaymentForm v-if="name === 'PaymentForm'" :itemID="settings && settings.id" />
        <button @click="onClose">Закрыть модальное окно</button>
      </div>
    </div>
  </div>
</template>

<script>
import PaymentForm from '../PaymentForm'
export default {
  components: {
    PaymentForm
  },
  props: {
    name: String,
    settings: Object
  },
  methods: {
    onClose () {
      this.$modal.close()
    }
  }
}
</script>

<style module>
.wrapper {
  margin-top: 15px;
  position: absolute;
  width: 100%;
  height: 50vh;
  .overlay {
    z-index: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba (50,50,50,0.5);
  }
  .content {
    position: relative;
    z-index: 100;
    width: 600px;
    height: 55px;
    background: rgb(141, 221, 173);
    color: rgb;
    text-align: center;
  }
}
</style>
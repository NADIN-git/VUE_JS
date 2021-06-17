<template>
  <div v-if="shown" :class="[$style.context]" :style="styles">
    <div v-for="item in items"
    :key="item.text"
    :class="[$style.context_item]"
    @click="onClick(item)">
      {{ item.text }}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [],
      shown: false,
      xPos: 0,
      yPos: 0
    }
  },
  props: {
  },
  methods: {
    onClick (item) {
      item.action()
      this.onClose()
    },
    onShow ({ items, caller }) {
      this.items = items
      this.shown = true
      this.setPosition(caller)
    },
    onClose () {
      this.shown = false
      this.items = []
    },
    setPosition (caller) {
      const computed = caller.getBoundingClientRect()
      this.xPos = computed.left
      this.yPos = computed.top
    }
  },
  computed: {
    styles () {
      return {
        top: `${this.yPos}px`,
        left: `${this.xPos + 10}px`
      }
    }
  },
  mounted () {
    this.$context.EventBus.$on('show', this.onShow)
    this.$context.EventBus.$on('close', this.onClose)
  },
  beforeDestroy () {
    this.$context.EventBus.$off('show', this.onShow)
    this.$context.EventBus.$off('close', this.onClose)
  }
}
</script>

<style module lang="scss">
.context {
  width: 60px;
  background: #fff;
  background-color: rgb(141, 221, 173);
  padding: -20px;
  min-height: 20px;
  position: absolute;
  border: 1mm solid rgb(141, 221, 173);
  margin: 1px 5px 5px 20px;
  text-align: center;
  border-radius: 0.5em 0.5em 0.5em 0.5em;
}

.context:after {
  content: '';
  width: 7px;
  height: 7px;
  display: block;
  position: absolute;
  top: 7px;
  right: 68px;
  border-top: 1mm solid rgb(141, 221, 173);
  border-left: 1mm solid rgb(141, 221, 173);
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  background:#fff;
  background-color: rgb(141, 221, 173);
}

</style>

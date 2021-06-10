<template>
  <div>
    <div :class="[$style.wrapper]">
      <div :class="[$style.overlay]">
      <div :class="[$style.content]">
        <ContextMenu v-if="modalFlag" modal='ContextMenu' />
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContextMenu from '../ContextMenu'
export default {
  components: {
    ContextMenu
  },
  data () {
    return {
      modalFlag: true
    }
  },
  props: {
    name: String,
    itemAttr: Number
  }
}
</script>

<style module>
.wrapper {
  position: absolute;
  width: 100px;
  height: 100 vh;
  border: 1px solid transparent;
  border-radius: 3px;
  .overlay {
    border: 1px solid;
    z-index: -0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(141, 221, 173);
    border-radius: 3px;
  }
  .content {
    position: relative;
    z-index: -0;
    text-decoration: none;
     border-radius: 3px;
  }
}
</style>
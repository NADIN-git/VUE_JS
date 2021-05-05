<template>
  <div class="windButton">
    <input class="windText" v-model.number="result" placeholder="0" />
    <button class="numberButton" @click="numberInput(numb)" v-for="numb in numButton" :id="numb" :key="numb"> {{numb}} </button>
    <button class="numberButton" @click="operInput(oper)" v-for="oper in numOperation" :id="oper" :key="oper"> {{oper}} </button>
    <button class="numberReset" @click="reset">CE</button>
    <button class="numberResult" @click="operInput('=')">=</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    arg1: 0,
    arg2: 0,
    totalResult: 0,
    operation: '',
    result: '',
    prom: '',
    numButton: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    numOperation: ['+', '-', '/', '*', '^', '%', 'int/'],
    operationClick: true
  }),
  props: {},
  methods: {
    numberInput (up) {
      this.result += up
      this.prom += up
    },
    operInput (up) {
      if (up !== '=') {
        this.result += up
      }
      if (this.operation !== '') {
        if (this.operationClick) {
          this.arg1 = this.arg2
        }
        this.operationClick = false
        this.arg2 = parseInt(this.prom)
        switch (this.operation) {
          case '+':
            this.totalResult = this.arg1 + this.arg2
            break
          case '-':
            this.totalResult = this.arg1 - this.arg2
            break
          case '*':
            this.totalResult = this.arg1 * this.arg2
            break
          case '/':
            this.totalResult = this.arg1 / this.arg2
            break
          case '^':
            this.totalResult = this.arg1 ** this.arg2
            break
          case '%':
            this.totalResult = this.arg1 % this.arg2
            break
        }
        this.result = this.totalResult + up
        this.arg1 = this.totalResult
        this.arg2 = 0
        if (up === '=') {
          this.result = '= ' + this.totalResult
          this.arg2 = 0
          this.prom = ''
          this.totalResult = 0
        }
      }
      this.arg2 = parseInt(this.prom)
      this.prom = ''
      this.operation = up
      if (up === '=') {
        this.operation = ''
        this.arg2 = 0
      }
    },
    reset () {
      this.result = ''
      this.operation = ''
      this.operationClick = true
      this.arg1 = 0
      this.arg2 = 0
      this.prom = ''
      this.totalResult = 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>

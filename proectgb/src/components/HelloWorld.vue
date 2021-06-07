<template>
  <div class="windButton">
    <div class="operButton">
      <input class="inputOperand1" v-model.number="operand1" name="operand1" ref="op1" />
      <input class="inputOperand2" v-model.number="operand2" name="operand2" ref="op2" />
      <input class="windText" v-model.number="result" />
      <button class="numberButton" @click="calculate(oper)" v-for="oper in numOperation"
      :id="oper" :key="oper" :name="oper"> {{oper}} </button>
      <button class="numberReset" @click="reset">CE</button>
    </div>
    <div class="hideKeyboard">
      <input type="checkbox" id="displayKeyboard" value="Отобразить экранную клавиатуру" v-model="checkedNames">
      <label for="displayKeyboard">Отобразить экранную клавиатуру</label>
    </div>
    <div v-if="checkedNames" class="clava">
      <button class="numberButton"
      @click="numberInput(numb)" v-for="numb in 10" :key="numb" :clava="numb"
      > {{numb}} </button>
      <button class="udalButton"
      @click="udSymbol()"> {{udalSymb}} </button>
      <div class="radioButton">
        <input @click="onChoose(1)" type="radio" id="one" value="Операнд 1" v-model="picked">
        <label for="one">Операнд 1</label>
        <input @click="onChoose(2)" type="radio" id="two" value="Операнд 2" v-model="picked">
        <label for="Операнд 2">Операнд 2</label>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  data: () => ({
    checkedNames: true,
    operation: '',
    operand1: 0,
    operand2: 0,
    udalSymb: '←',
    arg1: '',
    arg2: '',
    result: '',
    picked: 'Операнд 1',
    numOperation: ['+', '-', '/', '*', '^', '%']
  }),
  props: {},
  methods: {
    onChoose (op) {
      const op1 = this.$refs.op1
      const op2 = this.$refs.op2
      console.log(op1)
      console.log(op1)
      if (op === 1) {
        op1.focus()
      } else {
        op2.focus()
      }
    },
    calculate (oper) {
      const { operand1, operand2 } = this
      const calcOperations = {
        '+': () => operand1 + operand2,
        '-': () => operand1 - operand2,
        '/': () => operand1 / operand2,
        '*': () => operand1 * operand2,
        '^': () => operand1 ** operand2,
        '%': () => operand1 % operand2
      }
      this.result = calcOperations[oper]()
    },
    udSymbol () {
      if (this.picked === 'Операнд 1') {
        this.arg1 = this.arg1.substring(0, this.arg1.length - 1)
        if (this.arg1.length > 0) {
          this.operand1 = parseInt(this.arg1)
        } else {
          this.operand1 = 0
        }
      } else {
        this.arg2 = this.arg2.substring(0, this.arg2.length - 1)
        if (this.arg2.length > 0) {
          this.operand2 = parseInt(this.arg2)
        } else {
          this.operand2 = 0
        }
      }
    },
    numberInput (up) {
      if (this.picked === 'Операнд 1') {
        this.arg1 += up
        this.operand1 = parseInt(this.arg1)
      } else {
        this.arg2 += up
        this.operand2 = parseInt(this.arg2)
      }
    },
    reset () {
      this.result = ''
      this.operand1 = 0
      this.operand2 = 0
      this.arg1 = ''
      this.arg2 = ''
    }
  }
}
</script>
<style scoped lang="scss">

</style>

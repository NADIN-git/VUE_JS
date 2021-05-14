<template>
  <div class="windButton">
    <div class="operButton">
      <input class="inputOperand1" v-model.number="operand1" placeholder="0" />
      <input class="inputOperand2" v-model.number="operand2" placeholder="0" />
      <input class="windText" v-model.number="result" placeholder="0"/>
      <button class="numberButton" @click="calculate(oper)" v-for="oper in numOperation" :id="oper" :key="oper"> {{oper}} </button>
      <button class="numberReset" @click="reset">CE</button>
    </div>
    <div class="hideKeyboard">
      <input type="checkbox" id="jack" value="Отобразить экранную клавиатуру" v-model="checkedNames">
      <label for="jack">Отобразить экранную клавиатуру</label>
    </div>
    <div v-if="checkedNames" class="clava">
      <button class="numberButton"
      @click="numberInput(numb)" v-for="numb in numButton" :id="numb" :key="numb"
      > {{numb}} </button>
      <button class="udalButton"
      @click="numberInput(udalSymb)"> {{udalSymb}} </button>
      <div class="radioButton">
        <input type="radio" id="one" value="Операнд 1" v-model="picked">
        <label for="one">Операнд 1</label>
        <input type="radio" id="two" value="Операнд 2" v-model="picked">
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
    totalResult: 0,
    operation: '',
    operand1: 0,
    operand2: 0,
    udalSymb: '←',
    arg1: '',
    arg2: '',
    result: '',
    prom: '',
    picked: 'Операнд 1',
    udalSimb: '←',
    numButton: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    numOperation: ['+', '-', '/', '*', '^', '%'],
    operationClick: true
  }),
  props: {},
  methods: {
    calculate (op) {
      const { operand1, operand2 } = this
      const calcOperations = {
        '+': () => operand1 + operand2,
        '-': () => operand1 - operand2,
        '/': () => operand1 / operand2,
        '*': () => operand1 * operand2,
        '^': () => operand1 ** operand2,
        '%': () => operand1 % operand2
      }
      this.result = calcOperations[op]()
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>

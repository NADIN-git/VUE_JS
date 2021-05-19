<template>
  <div id="app">
    <header :class="[$style.header]">
      Мои личные расходы
    </header>
    <main>
      <paymentForm @add="onDataAdded" />
      <paymentsList :items="paymentsList" :listN="listStart" :listK="listEnd"/>
      <BR/>
      <paymentPage @changePage="onChangePage" :colPage="parseInt(paymentsList.length / 5)"/>
    </main>
  </div>
</template>

<script>
import PaymentsList from './components/PaymentsList'
import PaymentForm from './components/PaymentForm'
import PaymentPage from './components/PaymentPage'
export default {
  name: 'App',
  components: {
    PaymentsList,
    PaymentForm,
    PaymentPage
  },
  data () {
    return {
      listStart: 0,
      listEnd: 5,
      paymentsList: [
        {
          num: 1,
          date: '01.06.2020',
          category: 'Образование',
          price: 200
        },
        {
          num: 2,
          date: '12.07.2020',
          category: 'Образование',
          price: 300
        },
        {
          num: 3,
          date: '17.08.2020',
          category: 'Образование',
          price: 400
        },
        {
          num: 4,
          date: '16.09.2020',
          category: 'Образование',
          price: 500
        },
        {
          num: 4,
          date: '16.10.2020',
          category: 'Образование',
          price: 500
        },
        {
          num: 4,
          date: '16.11.2020',
          category: 'Образование',
          price: 500
        },
        {
          num: 4,
          date: '16.12.2020',
          category: 'Образование',
          price: 500
        },
        {
          num: 4,
          date: '16.01.2021',
          category: 'Образование',
          price: 500
        },
        {
          num: 4,
          date: '16.02.2021',
          category: 'Образование',
          price: 500
        },
        {
          num: 4,
          date: '16.03.2021',
          category: 'Образование',
          price: 500
        },
        {
          num: 4,
          date: '16.04.2021',
          category: 'Образование',
          price: 500
        },
        {
          num: 4,
          date: '16.05.2021',
          category: 'Образование',
          price: 500
        }
      ],
      PaymentPage: 0
    }
  },
  methods: {
    onDataAdded (data) {
      this.paymentsList.push(data)
    },
    onChangePage (data) {
      this.listStart = data.listN
      this.listEnd = data.listK
    }
  }
}
</script>

<style lang="scss" module>
.header {
  color: black;
  font-size: 25px;
  padding-left: 250px
}
</style>

<template>
  <div>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
import { Pie } from 'vue-chartjs'
import { mapGetters } from 'vuex'

export default {
  extends: Pie,
  data () {
    return {
      masKat: ['Образование', 'Спорт', 'Коммунальные услуги', 'Транспорт']
    }
  },
  mounted () {
    this.renderChart({
      labels: this.masKat.map(c => c),
      datasets: [
        {
          label: 'Расходы по категориям',
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 1,
          data: this.masKat.map(c => {
            return this.getPaymentslist.reduce((total, r) => {
              if (r.category === c) {
                total += r.price
              }
              return total
            }, 0)
          })
        }
      ]
    }, {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    })
  },
  computed: {
    ...mapGetters([
      'getPaymentslist',
      'validPaymentslist'
    ])
  }
}
</script>

<style scoped lang="scss">

</style>
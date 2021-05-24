import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentsList: []
  },
  mutations: {
    setPaymentsListData (state, payload) {
      state.paymentsList = payload
    },
    addRecord (state, newRecord) {
      state.paymentsList.push(newRecord)
    }
  },
  getters: {
    getPaymentslist: state => state.paymentsList,
    getPaymentslistFullPrice: state => {
      return state.paymentsList
        .reduce((res, cur) => res + cur.price, 0)
    },
    validPaymentslist (state) {
      return state.paymentsList.filter(p => {
        return p.date && p.category && p.price
      })
    }
  },
  actions: {
    fetchData ({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const items = []
          for (let i = 1; i < 105; i++) {
            items.push({
              id: i,
              date: '01.06.2020',
              num: 1,
              category: 'Образование',
              price: i * 10
            })
          }
          resolve(items)
        }, 1000)
      })
        .then(res => {
          commit('setPaymentsListData', res)
        })
    }
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const localDB = {
  page1: [
    { id: 1, date: '20.03.2020', category: 'Food', value: 169 },
    { id: 2, date: '21.03.2020', category: 'Navigation', value: 50 },
    { id: 3, date: '22.03.2020', category: 'Sport', value: 450 }
  ],
  page2: [
    { id: 4, date: '23.03.2020', category: 'Entertaiment', value: 969 },
    { id: 5, date: '24.03.2020', category: 'Education', value: 1500 },
    { id: 6, date: '25.03.2020', category: 'Food', value: 200 }
  ],
  page3: [
    { id: 7, date: '23.03.2020', category: 'Entertaiment', value: 969 },
    { id: 8, date: '24.03.2020', category: 'Education', value: 1500 },
    { id: 9, date: '25.03.2020', category: 'Food', value: 200 }
  ],
  page4: [
    { id: 10, date: '23.03.2020', category: 'Entertaiment', value: 969 },
    { id: 11, date: '24.03.2020', category: 'Education', value: 1500 },
    { id: 12, date: '25.03.2020', category: 'Food', value: 200 }
  ]
}

export default new Vuex.Store({
  state: {
    paymentsList: [],
    paymentsListIDS: []
  },
  mutations: {
    setPaymentsListData (state, payload) {
      state.paymentsList = payload
    },
    addPaymentsListData (state, payload) {
      const newUniqObjs = payload.filter(obj => {
        return state.paymentsListIDS.indexOf(obj.id) < 0
      })
      const UniqIDS = newUniqObjs.map(obj => obj.id)
      state.paymentsListIDS.push(...UniqIDS)
      state.paymentsList.push(...newUniqObjs)
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
    fetchData ({ commit }, page) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const items = localDB[`page${page}`]
          resolve(items)
        }, 1000)
      })
        .then(res => {
          commit('addPaymentsListData', res)
        })
    }
  }
})

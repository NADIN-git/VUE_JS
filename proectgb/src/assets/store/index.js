import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

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
    addNewRecord (state, payload) {
      const id = state.paymentsListIDS.length > 40 ? state.paymentsListIDS.length : state.paymentsList.length + 1
      state.paymentsListIDS.push(id)
      payload.id = id
      state.paymentsList.push(payload)
    },
    deleteItem (state, payload) {
      state.paymentsListIDS = state.paymentsListIDS.filter(id => id !== payload)
      state.paymentsList = state.paymentsList.filter(item => item.id !== payload)
    },
    updateRecord (state, payload) {
      const item = state.paymentsList.find(item => item.id === payload.id)
      if (item) {
        Object.assign(item, payload)
      }
    }
  },
  getters: {
    getPaymentslist: state => state.paymentsList,
    getPaymentslistFullPrice: state => {
      return state.paymentsList
        .reduce((res, cur) => res + cur.price, 0)
    },
    bottomPaymentslistID: state => {
      return state.paymentsList.Math.max((cur) => cur.id)
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
          for (let i = 1; i < 11; i++) {
            items.push({
              id: i,
              date: '01.06.2020',
              num: 1,
              category: 'Образование',
              price: 10000
            })
          }
          for (let i = 11; i < 21; i++) {
            items.push({
              id: i,
              date: '01.06.2020',
              num: 1,
              category: 'Транспорт',
              price: 1000
            })
          }
          for (let i = 21; i < 31; i++) {
            items.push({
              id: i,
              date: '01.06.2020',
              num: 1,
              category: 'Спорт',
              price: 2400
            })
          }
          for (let i = 31; i < 41; i++) {
            items.push({
              id: i,
              date: '01.06.2020',
              num: 1,
              category: 'Коммунальные услуги',
              price: 5600
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
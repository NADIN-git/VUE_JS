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
    },
    updateRecord (state, updRecord) {
      const updateIndex = state.paymentsList.findIndex(obj => obj.id === updRecord.id)
      state.paymentsList = [
        ...state.paymentsList.slice(0, updateIndex),
        updRecord,
        ...state.paymentsList.slice(updateIndex + 1)
      ]
    },
    deleteRecord (state, delRecord) {
      const deleteIndex = state.paymentsList.findIndex(obj => obj.id === delRecord.id)
      if (deleteIndex > -1) {
        state.paymentsList = [
          ...state.paymentsList.slice(0, deleteIndex),
          ...state.paymentsList.slice(deleteIndex + 1)
        ]
      }
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
    },
    async updateDataAction ({ commit }, item) {
      const result = await item.update(item.id)
      const data = await result.json()
      commit('updateRecord', data)
    },
    async deleteDataAction ({ commit }, item) {
    }
  }
})

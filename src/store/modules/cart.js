/*
 * @Author: your name
 * @Date: 2020-08-29 17:49:07
 * @LastEditTime: 2020-09-03 10:46:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \projectname\src\store\modules\cart.js
 */
const cart = {
  state: {
    user: null,
    token: '17620969505'
  },

  // {name:lijia,phone:17620969505}
  mutations: {
    SET_USER: (state, info) => {
      console.log(state.user)
      state.user = info
    },
    SET_TOKEN: (state, info) => {
      state.token = info
    }
  },
  actions: {
    acSetToken({ commit }, token) {
      commit('SET_TOKEN', token)
    }
  }
}

export default cart

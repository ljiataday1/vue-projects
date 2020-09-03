/*
 * @Author: your name
 * @Date: 2020-08-29 17:41:24
 * @LastEditTime: 2020-09-01 14:24:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \projectname\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import cart from './modules/cart'
Vue.use(Vuex)

const store = new Vuex.Store({
  getters,
  modules: {
    cart
  }
})

export default store

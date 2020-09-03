/*
 * @Author: your name
 * @Date: 2020-08-27 10:45:54
 * @LastEditTime: 2020-09-03 10:24:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \projectname\src\main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/permission.js'
import store from './store/index.js'
import { rem } from './utils/rem'
rem()
import 'babel-polyfill'
import es6Promise from 'es6-promise'
require('es6-promise').polyfill()
es6Promise.polyfill()
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

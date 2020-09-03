/*
 * @Author:Mr.Aiden
 * @Date: 2020-08-29 14:43:28
 * @LastEditTime: 2020-09-03 10:46:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \projectname\src\permission.js
 * ctrl + alt + i head
 * ctrl + alt + t function
 * koroFileHeader
 * @注释图案：https://github.com/OBKoro1/koro1FileHeader/wiki/%E4%BD%9B%E7%A5%96%E4%BF%9D%E4%BD%91%E6%B0%B8%E6%97%A0BUG%E3%80%81%E7%A5%9E%E5%85%BD%E6%8A%A4%E4%BD%93%E3%80%81%E6%B3%A8%E9%87%8A%E5%9B%BE%E6%A1%88
 */
import has from 'has'
import router from './router/index.js'

/**
 * @description:路由权限管理 全局钩子 在跳转前执行
 * @param to
 * @param from
 * @param next
 */
router.beforeEach((to, from, next) => {
  console.log(has(to.query, 's'))
  if (to.name === 'projects' && to.query.s === undefined) {
    const s = '1'
    next({ path: '/try-projects/projects', query: { s }})
  } else {
    next()
  }
})

/**
 * @description:全局钩子 在路由跳转后执行
 * @param {to}
 * @param {from}
 * @param {next}
 */
router.afterEach((to, from) => {
})

/**
 * @description: 组件内钩子 在离开当前路由时触发
 * @param {to}
 * @param {from}
 * @param {next}
 * @return beforeRouterLeave(to, from, next){}
 */

/**
 * @description: 组件内钩子 在渲染前调用 不能或取this
 * @param {to}
 * @param {from}
 * @param {next}
 * @return beforeRouterEenter(to, from, next){}
 */

/**
 * @description: 组件内钩子 在当前路由改变但是改组件被复用时触发 可以访问this
 * @param {to}
 * @param {from}
 * @param {next}
 * @return beforeRouterUpdate(to, from, next){}
 */

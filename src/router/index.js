
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const routerMap = [{
  path: '/try-projects/projects',
  name: 'projects',
  component: () => import('@/view/try-projects/projects.vue'),
  meta: {
    keepAlive: false
  }
},
{ name: 'HelloWorld',
  path: '/HelloWorld',
  component: () => import('@/components/HelloWorld.vue'),
  meta: {
    keepAlive: false
  }
},
{
  path: '*',
  redirect: '/try-projects/projects'
}
]

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: routerMap
})

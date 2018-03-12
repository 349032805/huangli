import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const demo = r => require.ensure([], () => r(require('../views/demo')), 'demo')
export default new Router({
  routes: [
    {
      path: '/',
      component: demo
    }
  ]
})
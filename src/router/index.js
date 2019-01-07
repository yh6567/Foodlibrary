import Vue from 'vue'
import Router from 'vue-router'
import foodall from '@/components/foodall'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'foodall',
      component: foodall
    }
  ]
})

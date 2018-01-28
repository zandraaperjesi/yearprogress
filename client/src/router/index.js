import Vue from 'vue'
import Router from 'vue-router'
import Progressb from '@/components/Progressb'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Progress',
      component: Progressb
    }
  ]
})

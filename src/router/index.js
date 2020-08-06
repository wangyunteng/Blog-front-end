import Vue from 'vue'
import Router from 'vue-router'
import homePage from '../views/homePage'
import houtai from './houtai/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'homePage',
      component: homePage
    },
    ...houtai
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import homePage from '../views/homePage'
import PageContent from '../views/FirstPage/PageContent'
import label from '../views/label/index'
import houtai from './houtai/index'

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/PageContent',
      name: 'PageContent',
      component: PageContent,
      title: '页面内容'
    },
    {
      path: '/label',
      name: '标签',
      component: label,
      title: '标签'
    },
    ...houtai
  ]
})

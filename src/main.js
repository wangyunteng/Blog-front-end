// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
// 添加md5加密
import md5 from 'js-md5'
// 全局css
import './assets/style/index.css'
// 阿里图标
import './assets/icon/iconfont.css'
// 引入插件
import './unit/showAllWord'
// 引入element-ui
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引入mavon-editor markdown
import mavonEditor from 'mavon-editor'
// markdown-it对象：md.s_markdown, md => mavonEditor实例
//                 or
//                 mavonEditor.markdownIt
import 'mavon-editor/dist/css/index.css'

Vue.config.productionTip = false
/* axios.defaults.withCredentials = true // 这种方式不太可行,可以继续尝试 */
axios.interceptors.response.use(config => {
  return config
})

/* 使用 */
// 使用Element
Vue.use(Element)
Vue.use(mavonEditor)
/* 原型 */
// 使用md5加密
Vue.prototype.$md5 = md5
axios.defaults.headers.post['Content-Type'] = 'Content-Type:application/x-www-form-urlencoded; charset=UTF-8'
Vue.prototype.$axios = axios // 全局注册，使用方法为:this.$axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

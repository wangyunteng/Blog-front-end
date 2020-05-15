import VueRoter from 'vue-router';
import vue from 'vue'

vue.use(VueRoter);

// 路由懒加载 component: () => import('../view/index.vue'),
const router = new VueRoter({
  routes: [
    {
      path: '/',
      component: () => import('../view/index.vue'),
    },
  ],
})

export default router


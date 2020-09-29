<template>
  <div id="app">
    <img class="app-background" src="./assets/img/showcardImg.jpg" />
    <menu1></menu1>
    <keep-alive v-if="$route.meta.keepAlive">
      <router-view class="showContent"></router-view>
    </keep-alive>
    <router-view class="showContent" v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>
<script>
import menu1 from '@/components/menu.vue'
export default {
  name: 'App',
  components: {
    menu1
  }
}
</script>

<style lang="less" scoped>
  .app-background {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  .showContent {
    position: relative;
    padding: 66px 0px;
  }
</style>

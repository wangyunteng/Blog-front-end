<template>
  <div id="app">
    <menu1></menu1>
    <keep-alive><router-view></router-view></keep-alive>
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

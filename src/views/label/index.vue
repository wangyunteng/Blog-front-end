<template>
  <section>
    <div class="card">
      <h1 class="title">文章标签</h1>
      <div class="label"><span v-for="i in 20" :key="i">{{parseInt(Math.random()*10)+i}}</span></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {

    }
  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.card {
  width: 800px;
  margin: 20px auto 0;
  background: rgba(255,255,255,.6);
  .title {
    text-align: center;
    font-size: 20px;
    line-height: 40px;
  }
  .label {
    text-align: center;
    padding: 10px 40px;
    color: #000000b3;
    span {
      padding: 10px 25px;
      background: #2196f378;
      margin-left: 25px;
      display: inline-block;
      margin-bottom: 21px;
      border-radius: 9px;
      color: #000000b3;
      &:hover {
        background: #2196f3ab;
        cursor: pointer;
      }
    }
  }

}
</style>

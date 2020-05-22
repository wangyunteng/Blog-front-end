<template>
<section>
  <div class="leftNav">

  </div>
  <div class="middle">

  </div>
  <div class="rightNav">
    <h2 class="title">
      浏览量最高文章TOP5
    </h2>
    <p class="showPage" v-for="i in 5" :key="i">
      <span class="showNum">1</span>
      <span class="showContent showAllWord">好好学习呃呃呃呃呃呃呃呃呃呃呃呃呃呃</span>
    </p>
  </div>
</section>
</template>

<script>
export default {
  name: 'homePage'
}
</script>

<style scoped lang="less">
  .middle {
    width: 800px;
    height: 900px;
    background: #9e9e9e1a;
    margin: 0 auto;
  }

  .rightNav {
    position: fixed;
    width: 240px;
    height: fit-content;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
    right: 50px;
    top: 150px;
    h2 {
      font-size: 18px;
      line-height: 36px;
      background: #9e9e9e73;
      color: #444;
      text-align: center;
    }
    .showPage {
      cursor: pointer;
      padding-left: 15px;
      .showNum {
        display: inline-block;
        color: red;
        width: 18px;
        height: 18px;
        margin-right: 5px;
        background: #2c3e50;
        vertical-align: middle;
        text-align: center;
        margin-right: 5px;
      }
      .showContent {
        white-space: nowrap;
        overflow: hidden;
        display: inline-block;
        vertical-align: middle;
        font-size: 14px;
        line-height: 40px;
        width: 197px;
        text-overflow: ellipsis;
      }
    }
  }

</style>

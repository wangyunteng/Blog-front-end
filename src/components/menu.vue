<template>
  <section class="nav">
    <div class="showName">
      <span class="showTop"></span>
      <span class="showName1">云中仙</span>
      <span class="showBottom"></span>
    </div>
    <ul class="navbox">
      <li @click="first(1)" :class="indextab===1? 'active': ''"><span class="iconfont icon-shouye"></span>首页</li>
      <li @click="changeTitle(2)" :class="indextab===2? 'active': ''"><span class="iconfont icon-iconset0169"></span>标签</li>
      <li @click="changeTitle(3)" :class="indextab===3? 'active': ''"><span class="iconfont icon-guidang"></span>日常</li>
      <li @click="changeTitle(4)" :class="indextab===4? 'active': ''"><span class="iconfont icon-hudong"></span>互动</li>
      <li @click="changeTitle(5)" :class="indextab===5? 'active': ''"><span class="iconfont icon-guanyuwomen"></span>关于</li>
      <li @click="changeTitle(6)" :class="indextab===6? 'active': ''"><span class="iconfont icon-guanyuwomen"></span>登录</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'menu1',
  data () {
    return {
      indextab: 1
    }
  },
  methods: {
    first (data) {
      this.$router.push('/')
      this.indextab = data
    },
    changeTitle: function (data) {
      this.indextab = data
      if (data === 2) {
        this.$router.push('/label')
      } else if (data === 6) {
        this.$router.push({path: './login'})
      }
    }
  }
}
</script>

<style scoped lang="less">
  .nav {
    position: relative;
    width: 100%;
    position: fixed;
    z-index: 10;
    /*background: rgba(242, 244, 248, 0.7);*/
    // background: #9e9e9e94;
    overflow: hidden;
    height: 60px;
    .showName {
      text-align: center;
      margin-left: 40%;
      margin-top: 10px;
      overflow: hidden;
      width: 70px;
      height: fit-content;
      display: inline-block;
      @keyframes showTop {
        0% {
          width: 0px;
        }
        100% {
          width: 70px;
        }
      }
      .showTop {
        width: 70px;
        display: block;
        background: black;
        height: 2px;
        animation:showTop 2s linear;
      }
      @keyframes showName1{
        0% {
          color: transparent;
        }
        80% {
          color: rgba(0, 0, 0, 0.33);
        }
        100% {
          color: black;
        }
      }
      .showName1 {
        line-height: 31px;
        font-size: 14px;
        color: black;
        animation: showName1 2s linear;
      }
      @keyframes showBottom {
        0% {
          width: 0px;
          right: 0;
        }
        100% {
          width: 70px;
        }
      }
      .showBottom {
        width: 70px;
        display: block;
        background: transparent;
        height: 2px;
        position: relative;
        &:after {
          content: '';
          animation: showBottom 2s linear;
          background: black;
          display: block;
          height: 2px;
          position: absolute;
          right: 0px;
          bottom: 0px;
          width: 70px;
        }
      }
    }

    .navbox {
      position: relative;
      margin-top: 10px;
      overflow: hidden;
      list-style-type: none;
      width: fit-content;
      margin-left: 10%;
      display: inline-block;
      .active {
        background: #c39aad;
      }
      li {
        cursor: pointer;
        float: left;
        line-height: 27px;
        font-size: 14px;
        width: 70px;
        text-align: center;
      }
      li:hover {
        background: #c39aad;
      }
    }
    &:before {
      content: '';
      position: absolute;
      top: 0; bottom: 0;
      left: 0; right: 0;
      filter: blur(96px);
      background: url(../assets/img/navbackground.jpg) no-repeat center/cover;
      z-index: -1;
    }
  }
</style>

<template>
<section class="backAndTop">
  <div class="back" @click="back()"><span class="iconfont icon-houtui"/></div>
  <div class="top" ref="top" @click="goTop()"><span class="iconfont icon-shang"/></div>
</section>
</template>

<script>
export default {
  name: 'backAndTop',
  data () {
    return {
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    back () {
      window.history.back()
    },
    handleScroll () {
      let _this = this
      if (window.document.getElementsByTagName('html')[0].scrollTop === 0) {
        _this.$refs.top.className = 'topOut'
      } else {
        _this.$refs.top.className = 'topIn'
      }
    },
    goTop () {
      let a = setInterval(function () {
        if (window.document.getElementsByTagName('html')[0].scrollTop > 0) {
          window.document.getElementsByTagName('html')[0].scrollTop = window.document.getElementsByTagName('html')[0].scrollTop - 2
        } else clearTimeout(a)
      }, 4)
    }
  }
}
</script>

<style lang="less" scoped>
  .backAndTop {
    position: fixed;
    right: 81px;
    bottom: 80px;
    height: 102px;
    overflow: hidden;
    width: 50px;
    div {
      height: 45px;
      width: 45px;
      text-align: center;
      font-size: 16px;
      line-height: 45px;
      background: #03a9f487;
      border-radius: 50%;
      cursor: pointer;
      box-shadow: 0px 1px 3px #0000007a;
      margin: 0 auto;
    }
    .back {
      margin-bottom: 8px;
    }
    .top {
      display: none;
    }
    .topIn {
      animation: topIn .5s linear;
    }
    .topOut {
      position: relative;
      top: 50px;
      animation: topOut .5s linear;
    }
    @keyframes topIn
    {
      0% {
        position: relative;
        top: 50px;
      }
      100% {
        position: relative;
        top: 0px;
      }
    }
    @keyframes topOut
    {
      0% {
        position: relative;
        top: 0px;
      }
      100% {
        position: relative;
        top: 50px;
      }
    }
  }
</style>

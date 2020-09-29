<template>
<section>
  <div class="leftNav">
  </div>
  <div class="middle">
    <div class="showCard">
        <p class="isTop">置顶</p>
        <h1 class="showCard-title" @click="changePage()"><span>原创</span>活到老学到老</h1>
      <div class="showImgContent">
        <div class="showCard-img">
          <img src="@/assets/img/showcardImg.jpg" alt="">
          <div class="imgAnimotion"></div>
        </div>
        <p class="showCard-content">
          -webkit-animation-name:'myAnimation';
        </p>
      </div>
      <p class="showCard-bq"><span class="iconfont icon-iconset0169"></span> 心情<span class="bq-line"></span></p>
      <p class="showCard-footer"><span>时间：2020-02-10</span>
        <span class="showCard-pl"><span class="iconfont icon-pinglun"></span>16</span>
        <span class="showCard-watch"><span class="iconfont icon-kanguo"></span>2020</span>
      </p>
    </div>
  </div>
  <div class="rightNav">
    <h2 class="title">
      浏览量最高文章TOP5
    </h2>
    <p class="showPage" v-for="i in 5" :key="i">
      <span class="showNum">1</span>
      <span class="showContent showAllWord">好好学习</span>
    </p>
  </div>
<backAndTop></backAndTop>
</section>
</template>

<script>
import backAndTop from '../components/backAndTop'
export default {
  name: 'homePage',
  data () {
    return {
    }
  },
  components: {
    backAndTop
  },
  mounted () {

  },
  methods: {
    changePage () {
      this.$router.push('/PageContent')
    }
  },
  watch: {
  }
}
</script>

<style scoped lang="less">
  .middle {
    width: 800px;
    height: 900px;
    margin: 0 auto;

    .showCard {
      padding: 30px 50px 0px;
      box-sizing: border-box;
      // margin: 20px auto 0;
      width: 800px;
      height: 318px;
      overflow: hidden;
      position: relative;
      background: #ffffff9e;
      border-radius: 5px;
      box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.16);
      cursor: pointer;
      .isTop {
        width: 108.4px;
        text-align: center;
        font-size: 15px;
        position: absolute;
        top: 50px;
        left: 0px;
        color: #fff;
        background: red;
        line-height: 26px;
        transform: rotate(-45deg);
        transform-origin: 0 100%;
      }
      .showCard-title {
        font-size: 20px;
        color: #555;
        line-height: 40px;
        border-bottom: 1px solid #99999947;
        &:hover {
          color: rgba(30, 144, 255, 0.58);
        }
        span {
          font-size: 14px;
          padding: 2px 4px;
          font-weight: 300;
          margin-right: 20px;
          color: #e33e33;
          background-color: rgba(227,62,51,0.1);
        }
      }
      .showCard-img {
        float: left;
        /*width: 100px;*/
        height: 150px;
        margin-top: 15px;
        position: relative;
        overflow: hidden;
        width: 251px;
        img {
          height: 150px;
          width: 100%;
        }
        .imgAnimotion {
          height: 150px;
          width: 20px;
          position: absolute;
          left: -180px;
          top: 0px;
          transform: skew(-45deg);
          background: white;
          transform-origin: 0 100%;
          transition: left linear 1s;
          opacity: .5;
        }
        &:hover {
          .imgAnimotion {
            left: 300px;
          }
        }
      }
      .showCard-content {
        margin-top: 15px;
        float: left;
        width: 420px;
        font-size: 16px;
        height: 150px;
        margin-left: 20px;
        overflow-wrap: break-word;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 7;
        -webkit-box-orient: vertical;
      }
      .showImgContent:after {
        content: '';
        clear: both;
        display: block;
        height: 0;
        visibility: hidden;
      }
      .showCard-bq {
        font-size: 15px;
        line-height: 40px;
        .bq-line {
          display: inline-block;
          width: 637px;
          margin-left: 10px;
          height: 0px;
          border: 1px solid #99999947;;
          vertical-align: middle;
        }
      }
      .showCard-footer {
        font-size: 15px;
        line-height: 30px;
        .showCard-watch {
          float: right;
          margin-right: 30px;
          &:hover {
            color: rgba(30, 144, 255, 0.58);
          }
          span {
            margin-right: 5px;
          }
        }
        .showCard-pl {
          float: right;
          &:hover {
            color: rgba(30, 144, 255, 0.58);
          }
          span {
            margin-right: 5px;
          }
        }
      }

    }
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
        color: #fff;
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
        color: #444;
      }
      &:hover {
        .showContent {
          color: rgba(30, 144, 255, 0.58);
        }
      }
    }
  }

</style>

<template>
  <section>
    <div class="showArticle">
      <h1 class="title">活到老学到老</h1>
       <p class="time">
         <span class="publishTime">发布时间：2020-09-29 10:20</span>
         <span class="updateTime">更新时间: 2020-09-29 10:20</span>
       </p>
      <div class="article">
        <p>副技能：抽空在学习设计、产品的知识，如果逮住合适的机会，也会培养运营和营销的技能。

          娱乐：爱阅读，但不包括文学名著；二次元爱好者，但不是 C 圈的宅男；喜欢 MMORPG 游戏，但更想把时间花在好好奋斗上。

          心态：爱生活、爱阅读、爱编程、爱学习、爱拼搏、爱大自然。

          原则：常怀感恩的心。

          社交：一个人走得快，一群人走得远。

          理财：人生就像滚雪球。最重要之事是发现够湿的雪和长长的山坡。</p>
        <p>副技能：抽空在学习设计、产品的知识，如果逮住合适的机会，也会培养运营和营销的技能。

          娱乐：爱阅读，但不包括文学名著；二次元爱好者，但不是 C 圈的宅男；喜欢 MMORPG 游戏，但更想把时间花在好好奋斗上。

          心态：爱生活、爱阅读、爱编程、爱学习、爱拼搏、爱大自然。

          原则：常怀感恩的心。

          社交：一个人走得快，一群人走得远。

          理财：人生就像滚雪球。最重要之事是发现够湿的雪和长长的山坡。</p>
        <p>副技能：抽空在学习设计、产品的知识，如果逮住合适的机会，也会培养运营和营销的技能。

          娱乐：爱阅读，但不包括文学名著；二次元爱好者，但不是 C 圈的宅男；喜欢 MMORPG 游戏，但更想把时间花在好好奋斗上。

          心态：爱生活、爱阅读、爱编程、爱学习、爱拼搏、爱大自然。

          原则：常怀感恩的心。

          社交：一个人走得快，一群人走得远。

          理财：人生就像滚雪球。最重要之事是发现够湿的雪和长长的山坡。</p>
        <p>副技能：抽空在学习设计、产品的知识，如果逮住合适的机会，也会培养运营和营销的技能。

          娱乐：爱阅读，但不包括文学名著；二次元爱好者，但不是 C 圈的宅男；喜欢 MMORPG 游戏，但更想把时间花在好好奋斗上。

          心态：爱生活、爱阅读、爱编程、爱学习、爱拼搏、爱大自然。

          原则：常怀感恩的心。

          社交：一个人走得快，一群人走得远。

          理财：人生就像滚雪球。最重要之事是发现够湿的雪和长长的山坡。</p>
        <p>副技能：抽空在学习设计、产品的知识，如果逮住合适的机会，也会培养运营和营销的技能。

          娱乐：爱阅读，但不包括文学名著；二次元爱好者，但不是 C 圈的宅男；喜欢 MMORPG 游戏，但更想把时间花在好好奋斗上。

          心态：爱生活、爱阅读、爱编程、爱学习、爱拼搏、爱大自然。

          原则：常怀感恩的心。

          社交：一个人走得快，一群人走得远。

          理财：人生就像滚雪球。最重要之事是发现够湿的雪和长长的山坡。</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PageContent'
}
</script>

<style lang="less" scoped>
.showArticle {
  width: 800px;
  background: rgba(255,255,255,.8);
  margin: 25px auto 0;
  border-radius: 10px;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: url("../../assets/img/wang.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: -1;
    filter: blur(2px);
  }
  .title {
    font-size: 23px;
    padding-top: 10px;
    line-height: 40px;
    text-align: center;
  }
  .time {
    border-bottom: 1px solid #00000047;
    line-height: 35px;
    margin-bottom: 10px;
    .publishTime {
      margin-left: 20px;
    }
    .updateTime {
      margin-left: 20px;
    }
  }
  .article {
    padding: 0px 15px;
    p {
      text-indent: 2em;
      font-size: 16px;
      line-height: 30px;
    }
  }
}
</style>

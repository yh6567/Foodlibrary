<template>
  <div class="app">
    <div id="evaluating">
      <div class="inside">
        <div class="head_nav_evaluating">
          <div class="head_evaluating">
                <p><img src="../../../assets/img/icon_fh@2x.png" @click="$router.push('/shopping')"><span>咨询详情</span> </p>
            </div>
        </div>
           
        <div class="wrapper box" ref="box">
          <div class="content">
            <div class="rankingTitle">各类海鲜蛋白质含量排行榜</div>
            <p class="original">原创：食物派&nbsp;
              <span class="original-span">NICE健康</span>&nbsp;2016-03-25
            </p>
            <p></p>
            <p
              class="txt"
            >7、8月份，上海最炎热的季节，在南方闷热的艳阳里晒得胃口都没了，每天只想喝点儿小粥，啃点儿蔬菜度日，看见油腻的肉菜就犯公主病，可不吃肉蛋白质摄入不够啊，好不容易练出来的肌肉该刷拉拉地掉了，恐怖！</p>
            <p class="txt">不吃肉不行，那我们整点儿清新爽口的海鲜吧，大多数海鲜都是高蛋白、低脂肪的食材，太适合夏天了，一说到海鲜瞬间感觉整个人都变得清新凉爽了，舒服！</p>
            <div class="sceneryImg">
              <img src="../../../assets/img/pc_tp2@2x.png">
            </div>
            <p class="txt">海鲜呢，主要包括鱼类、虾类和贝类，我们先来看看鱼蛋白质含量</p>
            <div class="logoImg"></div>
            <div class="fish">青花鱼</div>
            <div class="fishImg">
              <img src="../../../assets/img/pc_tp1@2x.png">
            </div>
            <div class="proteinTxt">
              <div class="protein">蛋白质：20.7克/100克</div>
              <div class="fat">脂肪：12.1克/100克</div>
              <div class="intro">青花鱼，学名鲐鱼，分布于太平洋西部。主要吃法有味增青花鱼、盐烤青花鱼、甘露煮青花鱼、酱煮青花鱼等。</div>
            </div>
            <div class="source">
              <p>所有背后真相食物数据均来自</p>
              <p>食物派APP</p>
              <p>感谢你的支持</p>
            </div>
            <div>
              <ul class="foot">
                <li class="share">分享</li>
                <li class="collect">收藏</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  mounted() {
    this.scroll = new Bscroll(this.$refs.box, {
      scrollY: true
    });
    console.log(this.scroll);
  }
};
</script>

<style>
.app{
    height:100%;
}
#evaluating {
  /* overflow-y: auto; */
  height: 100%;
}
.box {
  height: 100%;

}
.inside {
  height: 100%;
}
.head_nav_evaluating{
  height: .8rem;
  background: #fff;
  z-index: 999;
}
.head_evaluating{
    position:fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9;
    background: #fff;
    }
.head_evaluating>p{
    display: block;
    height: 100%;
    width: 100%;
}
.head_evaluating>p>img{
    float: left;
    margin-top: .2rem;
    width: .32rem;
    height: .32rem;
    margin-left: 20px;
}
.head_evaluating>p>span{
    font-size: 34px;
    line-height: .86rem;
    text-align: center;
    display: block;
}
/* .head_evaluating>p>img{
  float: left;
  margin-top: 20px;
  margin-left: 20px;
} */
.head_head_evaluating{
  height: 0.86rem;
  line-height: 0.86rem;
  font-size: 0.32rem;
  text-align: center;
  z-index: 11;
  background: url(../../../assets/img/icon_fh@2x.png) no-repeat 0.32rem 0.26rem;
}
.content {
  background: #f6f6f6;
  padding: 0 0.32rem;
  /* height: 10rem; */
  padding-bottom:1rem;
}
.content > .rankingTitle {
  font-size: 0.34rem;
  line-height: 0.8rem;
}
.content > .original {
  font-size: 0.22rem;
  color: #bbbbbb;
  line-height: 0.42rem;
}
.content > .original > .original-span {
  color: #eeaa87;
}
.content > .txt {
  font-size: 0.26rem;
  line-height: 0.36rem;
  text-indent: 0.4rem;
  /* margin-bottom: .30rem; */
}
.content > .sceneryImg {
  margin-bottom: 0.6rem;
}
.content > .sceneryImg > img {
  width: 100%;
  height: 100%;
}
.content > .logoImg {
  height: 0.4rem;
  background: url(../../../assets/img/ms_xq-2@2x.png) no-repeat 2.8rem 0;
}
.content > .fish {
  font-size: 0.34rem;
  line-height: 0.36rem;
  text-align: center;
  padding: 0.2rem 0;
}
.content > .fishImg {
  display: flex;
  justify-content: center;
  margin-bottom: 0.6rem;
}
.content > .proteinTxt > .protein {
  width: 2.64rem;
  height: 0.32rem;
  line-height: 0.32rem;
  font-size: 0.02rem;
  background: #eb8b51;
  border-radius: 3px;
  text-indent: 0.2rem;
}
.content > .proteinTxt > .fat {
  font-size: 0.22rem;
  text-indent: 0.2rem;
  line-height: 0.36rem;
}
.content > .proteinTxt > .intro {
  font-size: 0.22rem;
  text-indent: 0.5rem;
  line-height: 0.36rem;
}
.content > .source {
  margin-top: 0.6rem;
}
.content > .source > p {
  font-size: 0.16rem;
  text-align: center;
  line-height: 0.36rem;
  color: #9a9a9a;
}
.foot {
  height: 0.96rem;
  border-top: 1px solid #f0f0f0;
}
.foot > li {
  list-style: none;
  font-size: 0.26rem;
  color: #111111;
  display: block;
  float: left;
  height: 0.96rem;
  width: 50%;
  text-align: center;
  line-height: 0.96rem;
}
.foot > .share {
  text-indent: 0.8rem;
  background: url(../../../assets/img/icon-fx@2x.png) no-repeat 1.6rem 0.36rem;
}
.foot > .collect {
  text-indent: -0.4rem;
  background: url(../../../assets/img/icon-sc@2x.png) no-repeat 1rem 0.36rem;
}
</style>
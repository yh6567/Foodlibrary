<template>
<div id="page_son">
    <div class="page_son">
        <div class="perch">
            <div class="head_page">
                <p><img src="../../../assets/img/icon_fh@2x.png" @click="$router.push('/shopping')"><span>咨询详情</span> </p>
            </div>
        </div>
        <div class="infarction">
            <h3>你离心机耕有多远</h3>
            <p>教你选对食物原理心肌梗<span>减低风险</span></p>
        </div>
        <div class="conner_page_son">
            <div class="conner_middle">
                <div class="conner_text">
                     <p>营养|师团<span>大堂2018-09-20</span></p>
                     <p><span>文图|文糖</span></p>
                     <h3>举头三尺无神明，掌心三寸是人间。这是耳根继《仙逆》《求魔》《我欲封天》《一念永恒》后，创作的第五部长篇小说《三寸人间》。
本站提示：各位书友要是觉得《三寸人间》还不错的话请不要忘记向您QQ群和微博里的朋友推荐哦！</h3>
               </div>
               <div class="titles">
                       <p></p> 
                      <div class="title">危险因子</div>
                      <p></p>
                </div>
                <ul class="age_txt">
                    <li><img src="../../../assets/img/yuanxing@2x.png">年龄</li>
                    <li><img src="../../../assets/img/yuanxing@2x.png">微博里的朋友推荐哦！耳根继《仙逆》《求魔》《我欲封天》《一念永恒》后，创作的第五部长篇小说《三寸人间》。
本站提示：各位书友要是觉得《三寸人间》还不错的话请</li>
                </ul>
                <div class="titles">
                       <p></p> 
                      <div class="title">可控因素</div>
                      <p></p>
                </div>
                <div class="factor">
                    <ul>
                        <li><img src="../../../assets/img/yuanxing@2x.png">年龄</li>
                        <li><img src="../../../assets/img/yuanxing@2x.png">年龄</li>
                        <li><img src="../../../assets/img/yuanxing@2x.png">年龄</li>
                        <li><img src="../../../assets/img/yuanxing@2x.png">年龄</li>
                    </ul>
                </div>
                <div class="page_conter_img">
                    <img src="../../../assets/img/zs_icon_1@2x.png" >
                </div>
                <div class="nutrition_describe">
                    <h3>营养师团</h3>
                    <p>耳根继《仙逆》《求魔》《我欲封天》《一念永恒》后，创作的第五部长篇小说《三寸人间》。
本站提示：各位书友要是觉得《三寸人间》还不错的话请不要忘记向您QQ群和微博里的</p>
                    <p>三寸人间</p>
                </div>
                
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
</template>

<script type="text/javascript">
export default {
  mounted() {
    // this.scroll = new Bscroll(this.$refs.box, {
    //   scrollY: true
    // })
    // console.log(this.scroll);
  },
  methods:{
		
	}
};
</script>


<style>
#page_son{
    width: 100%;
    height: 100%;
    overflow-y: auto;
}
#page_son>.page_son{
    height: 10rem;
}
.perch{
    height:.8rem ;
}
#page_son>.page_son>.perch>.head_page{
    position:fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9;
    background: #fff;
    }
#page_son>.page_son>.perch>.head_page>p{
    display: block;
    height: 100%;
    width: 100%;
}
#page_son>.page_son>.perch>.head_page>p>img{
    float: left;
    margin-top: .2rem;
    width: .32rem;
    height: .32rem;
    margin-left: .2rem;
}
#page_son>.page_son>.perch>.head_page>p>span{
    font-size: .34rem;
    line-height: .86rem;
    text-align: center;
    display: block;
}
.infarction{
    background: #eb8b51;
    height: 1.4rem;
    text-indent: .34rem;
    color: #fff;
}
.infarction>h3{
    line-height: .6rem;
    font-size: .34rem;
    font-weight: 100;
}
.infarction>p{
    line-height: .6rem;
    font-size: .28rem;
}
.conner_page_son{
    height: 100%;
    width: 100%; 

}
.conner_middle{
  padding-left:.2rem;
  padding-right:.2rem; 
  background: #f6f6f6; 
}
.conner_page_son>.conner_middle>.conner_text{
    font-size: .24rem;
    line-height: .44rem;
}
.conner_page_son>.conner_middle>.conner_text>p{
    color: red;
}
.conner_page_son>.conner_middle>.conner_text>p>span{
    color: #000;
    margin-left:.1rem; 
}
.conner_page_son>.conner_middle>.conner_text>h3{
    color: #000;
    font-weight: 100;
    text-indent: .35rem;
}
.titles{
    font-size: .24rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.titles>.title{
    width: 1.5rem;
    height: .5rem;
    line-height: .5rem;
    text-align: center;
    font-size: .22rem;
    color: #fff;
    background: #eb8b51;
}
.titles>p{
    width: 2.27rem;
    height: 0;
    border: 1px solid #eb8b51;
}
.age_txt{
    margin-top: .4rem;
    line-height: .52rem;
    font-size: .26rem;
    color: #000;
}
.age_txt>li>img{
    margin-top: .25rem;
    float: left;
    margin-right: .1rem;
}
.age_txt>li>p{
    margin-bottom: .2rem;
}
.factor>ul{
    margin-top: .4rem;
    line-height: .52rem;
    font-size: .26rem;
    color: #000;
}
.factor>ul>li>img{
    margin-top: .25rem;
    float: left;
    margin-right: .1rem;
}
.page_conter_img{
    width: 2rem;
    height: 2rem;
    margin: 0 auto;
}
.page_conter_img>img{
    width: 100%;
    height: 100%;
}
.nutrition_describe{
    margin-top: .2rem;
}
.nutrition_describe>h3{
    text-align: center;
    line-height: .5rem;
    font-size: .3rem;
}
.nutrition_describe>p{
    text-indent: .3rem;
}
.foot {
  height: 0.96rem;
  border-top: 1px solid #f0f0f0;
  background: #fff;
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
	background-size: 10% 30%;
}
.foot > .collect {
  text-indent: -0.4rem;
  background: url(../../../assets/img/icon-sc@2x.png) no-repeat 1rem 0.36rem;
	background-size: 10% 30%;
}
</style>
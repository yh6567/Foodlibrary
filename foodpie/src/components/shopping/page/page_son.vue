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
#page_son>.page_son>.head_page{
    position:fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9;
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
    margin-left: 20px;
}
#page_son>.page_son>.perch>.head_page>p>span{
    font-size: 34px;
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
    font-size: 34px;
    font-weight: 100;
}
.infarction>p{
    line-height: .6rem;
    font-size: 28px;
}
.conner_page_son{
    height: 100%;
    width: 100%; 
    background: #f6f6f6; 
}
.conner_middle{
  padding-left:20px;
  padding-right:20px; 
}
.conner_page_son>.conner_middle>.conner_text{
    font-size: 24px;
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
    font-size: 24px;
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
    font-size: 26px;
    color: #000;
}
.age_txt>li>img{
    margin-top: .25rem;
    float: left;
    margin-right: 10px;
}
.age_txt>li>p{
    margin-bottom: 20px;
}
.factor>ul{
    margin-top: .4rem;
    line-height: .52rem;
    font-size: 26px;
    color: #000;
}
.factor>ul>li>img{
    margin-top: .25rem;
    float: left;
    margin-right: 10px;
}
</style>
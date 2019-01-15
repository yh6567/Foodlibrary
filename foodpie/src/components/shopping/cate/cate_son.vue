<template>
    <div id="cate_son">
        <div class="cate_son">
            <nav class="nav_cate_son">
                <img src="./../../../assets/img/icon-rili-1@2x.png" @click="$router.push('/shopping')" class="nav_cate_son_listimg">
                <h3>图片详情</h3>
            </nav>
            <div class="cate_son_conter">
                <div class="cate_son_pet">
                    <img src="../../../assets/img/gc_sy-tx-1@2x.png" class="cate_son_pet_listimg">
                    <div>
                         <h3>昵称昵称</h3>
                         <p>1个月前</p>
                    </div>
                </div> 
            </div> 
            <div class="cate_son_conter_listimg">
                     <img src="../../../assets/img/gc_tp_1@3x.png" >
            </div>
            <div class="cate_son_conter_buttom">
                <ul class="conter_buttom_ul">
                    <li v-for="(item,index) in msg"><span>{{item}}</span></li>
                </ul>
                <div class="conter_buttom_text_describe">
                    <h4>今日早餐</h4>
                    <p>jjehjwejhrejh</p>
                    <p>jjehjwejhrejh</p>
                    <p>jjehjwejhrejh</p>
                    <p>jjehjwejhrejh</p>
                </div>
                <div class="conter_buttom_like">
                    <div class="conter_buttom_left">
<<<<<<< HEAD
<<<<<<< HEAD
                        <p><span>+99</span></p>    
                     </div>
=======
                        <p><span>+99</span></p>     
                    </div>
                     <div class="conter_buttom_right">
                        <p><span>+99</span></p>     
                    </div>
>>>>>>> yuanyuan
=======
                        <p><span>+99</span></p>
                           
                </div>
>>>>>>> zhou
            </div> 
            </div>
        </div>
    </div>
</template>
<script>
export default{
	data(){
		return{
            msg:[
                "美食炒蛋",
                "美食炒蛋",
                "美食炒蛋",
                "美食炒蛋"
            ]
		}
	},
	methods:{
		kap(){
			this.$router.push('/shopping');
        },
        clickColor(){
            this.color = 'red';
        }
    },
    mounted(){
        this.$axios.get("/mo/mock/5c356fc6879a3554aca75b8b/api/register_check#!method=get")
        .then(({data})=>{
            console.log(data[0].id);
            
        })
    }
}
</script>

<style scoped>
#cate_son{
    height: 100rem;
    width: 100%;
    overflow-y: auto; 
}
.cate_son{
    width: 100%;
    height: 100%;
    background: #fff;
}
.nav_cate_son{
    height: .8rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.nav_cate_son_listimg{
    margin-left: .3rem; 
    width: .34rem;
    height: .34rem;
}
.nav_cate_son>h3{
    font-weight: 100;
    text-align: center;
    line-height: .8rem;
    font-size: 28px;
    margin-right: 3.25rem;
}
.cate_son_pet_listimg{
    float: left;
    margin-right:.3rem; 
}
.cate_son_pet>div{
    margin-left: .1rem;
}
.cate_son_pet>div>h3{
    font-size: 26px;
    font-weight: 100;
}
.cate_son_pet>div>p{
    font-size: 20px;
    font-weight: 100;
    line-height:.4rem;
}
.cate_son_conter{
    background: #f6f6f6;
    height: 1.16rem;
    overflow: hidden;
}
.cate_son_pet{
    margin-top:.3rem; 
}
.cate_son_conter.cate_son_pet>p{
    font-size: 20px;
}
.cate_son_conter_listimg{
    width: 7.5rem;
    height:7.5rem;
}
.cate_son_conter_listimg>img{
    width: 100%;
    height: 100%;
}
.cate_son_conter_buttom{
    width: 100%;
    height: 2.86rem;
    background: #ededed;
}
.conter_buttom_ul{
    margin-left:2.6rem; 
    background: #f6f6f6;
}
.cate_son_conter_buttom>.conter_buttom_ul>li{
    float: left;
    margin-left: .14rem;
    margin-top: .36rem;
     width: 1rem;
    height: .36rem;
    border-radius: .15rem .15rem;
    text-align: center;
}
.cate_son_conter_buttom>.conter_buttom_ul>li>span{
    font-size: 16px;
    line-height: .36rem;
}
.conter_buttom_text_describe{
    text-indent: .34rem;
    line-height: .30rem;
    font-size: 20px;
}
.conter_buttom_text_describe>h3{
    font-size: 26px;
}
.conter_buttom_left{
    width: 30%;
    height: 1.2rem;
    margin-top:.65rem;
<<<<<<< HEAD
<<<<<<< HEAD
=======
    float: left;
>>>>>>> yuanyuan
=======
>>>>>>> zhou
    background: url(../../../assets/img/icon_dz@3x.png) no-repeat 40%;
}
.conter_buttom_left>p{
    line-height: 1.2rem;
    text-align: center;
    font-size: 26px;
    margin-left: .5rem;
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
.conter_buttom_right>p{
    float: right;
    width: 30%;
    height: 1.2rem;
    margin-top:.65rem;
}
.conter_buttom_right>p{
    line-height: 1.2rem;
    text-align: center;
    font-size: 26px;
    margin-left: .5rem;
}
>>>>>>> yuanyuan
=======
>>>>>>> zhou
</style>
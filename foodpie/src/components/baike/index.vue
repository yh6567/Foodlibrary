<template>
    <div id="main">
        <header>
            <h2>食物派</h2>
            <h3>查询食物信息</h3>
            <div class="search">
                <!-- <i>💗</i> -->
                <input  @click="$router.push('/searchcompare')" type="text" placeholder="搜索">
            </div>
        </header>
       <nav>
           <dl @click="handleanalysis()">
               <!-- $router.push('/analysis') -->
               <dd>
                   <img src="../../assets/img/sy_icon_zs@2x.png" alt="">
                </dd>
               <dt>饮食分析</dt>
           </dl>
            <dl @click="$router.push('/searchcompare')">
               <dd>
                   <img src="../../assets/img/sy_icon_zs@2x.png" alt="">
               </dd>
               <dt>搜索对比</dt>
           </dl>
            <dl @click="$router.push('/sweep')">
               <dd>
                   <img src="../../assets/img/sy_icon_zs@2x.png" alt="">
               </dd>
               <dt>扫码对比</dt>
           </dl>
       </nav>
       <div class="food-family">
          <p class="nav-title">食物分类</p>
          <ul>
              <li @click="$router.push('/detail'+'/'+item.name)" v-for="item in foodFamilylist">
                <dl>
                    <dt><img  :src="item.imgUrl" alt="this is a picture"></dt>
                    <dd>{{item.name}}</dd>
                </dl>
              
              </li>
          </ul>
       </div>
       
    </div>
</template>

<script>
export default {
    data(){
        return{
            foodFamilylist:[
               
              
                {imgUrl:require("../../assets/img/sy_icon_zs@2x.png"),name:"主食类"},
                {imgUrl:require("../../assets/img/sy_icon_rd@2x.png"),name:"肉蛋类"},
                {imgUrl:require("../../assets/img/sy_icon_dz@2x.png"),name:"大豆及制品"},           
                {imgUrl:require("../../assets/img/sy_icon_sc@2x.png"),name:"蔬菜菌藻类"},
                {imgUrl:require("../../assets/img/sy_icon_sg@2x.png"),name:"水果类"},
                {imgUrl:require("../../assets/img/sy_icon_nn@2x.png"),name:"奶类"},
                {imgUrl:require("../../assets/img/sy_icon_yz@2x.png"),name:"油脂类"},
                {imgUrl:require("../../assets/img/sy_icon_jg@2x.png"),name:"坚果类"},
                {imgUrl:require("../../assets/img/sy_icon_tw@2x.png"),name:"调味品"},
                {imgUrl:require("../../assets/img/sy_icon_yl@2x.png"),name:"饮料类"},
                {imgUrl:require("../../assets/img/sy_icon_dx@2x.png"),name:"零食,点心及冷饮"},
                {imgUrl:require("../../assets/img/sy_icon_qt@2x.png"),name:"其他"} 
               ],
      value:''
        } 
        
    },
    methods:{
      handleanalysis(){
          if(!this.$store.state.baike.admin){
             this.$router.push('/login')
              
          }else{
              this.$router.push('/analysis')
          }
      }

    },
    computed:{
      
    },
    mounted(){
        
        
    //     this.$axios.get("http://localhost:3000/data").then((data)=>{
    //    console.log(data);
    //     this.foodFamilylist=data;
        
  // })
    }
}
</script>

<style scoped>
#main{
    background: #f2f2f2;
}

ul{
    display: flex;
     justify-content: space-around;
     flex-wrap: wrap;
}
li{
   
    width: 30vw;
    height: 30vw;
    list-style: none; 
}
li dl{
   display: flex;
   flex-direction: column;
   justify-content: space-around;
    align-items: center;
    font-size: 4vw;
}

li dl dt img{
    width: 25vw;
    height: 20vw;
}
.nav-title{
    text-align: center;
    font-size: 5vw;
    line-height: 10vw;
    border-bottom: #ddd 1px solid;
}
.food-family{
    background: #fff;
    margin: 3vw;
    

}
#main header{
    height: 40vw;
    background: orange;
    color: #fff;
}
 #main h2{
     text-align: center;
     line-height:10vw;
     font-size: 5vw;
     font-weight: 600;
 }
 #main h3{
      text-align: center;
      margin-top: 8vw;
      
      font-size: 4vw;
      font-weight: 400;
 }
 #main nav{
     height: 20vw;
    align-items: center;
     display: flex;
     justify-content: space-around;
     font-size: 4vw;
     background: #fff;
     margin: 3vw;
 }
 nav img{
     margin-left: 3VW;
     width: 10vw;
     height: 10vw;
 }
.search{
    margin: 2vw;
    border-radius: 3vw;
   
    height: 8vw;
    font-size: 4vw;
    background: #fff;
}
.search input{
    margin:2vw 0 0 2vw;
    display: inline-block; 
    border:none;
    outline:none;
    
}

</style>

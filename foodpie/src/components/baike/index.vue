<template>
    <div id="main">
        <header>
            <h2>食物派</h2>
            <h3>查询食物信息</h3>
            <div class="search">
                <i>💗</i>
                <input type="text" placeholder="搜索">
            </div>
        </header>
       <nav>
           <dl @click="$router.push('/analysis')">
               <dd>
                   <img src="" alt="">
                </dd>
               <dt>饮食分析</dt>
           </dl>
            <dl @click="$router.push('/search')">
               <dd>
                   <img src="" alt="">
               </dd>
               <dt>搜索对比</dt>
           </dl>
            <dl @click="$router.push('/sweep')">
               <dd>
                   <img src="" alt="">
               </dd>
               <dt>扫码对比</dt>
           </dl>
       </nav>
       <!-- <img src="@/assets/logo.png" alt=""> -->
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
               { "name":"主食类","imgUrl":"@/assets/logo.png"},
               { "name":"肉蛋类","imgUrl":"@/assets/img/"},
               { "name":"大豆及制品","imgUrl":"@/assets/img/"},
               { "name":"蔬菜菌藻类","imgUrl":"@/assets/img/"},
               { "name":"水果类","imgUrl":"@/assets/img/"},
               { "name":"奶类","imgUrl":"@/assets/img/"},
               { "name":"油脂类","imgUrl":"@/assets/img/"},
               { "name":"坚果类","imgUrl":"@/assets/img/"},
               { "name":"调味品","imgUrl":"@/assets/img/"},
               { "name":"饮料类","imgUrl":"@/assets/img/"},
               { "name":"零食，点心及冷饮","imgUrl":"@/assets/img/"},
               { "name":"其他","imgUrl":"@/assets/img/"},
               ],
      value:''
        } 
        
    },
    methods:{
        // getfoodFamilylist(){
        //     $axios.get("")
        // }

    },
    mounted(){

    }
}
</script>

<style scoped>

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
}

li dl dt img{
    width: 25vw;
    height: 25vw;
}
.nav-title{
    text-align: center;
    font-size: 5vw;
    line-height: 8vw;
}
#main header{
    height: 40vw;
    background: orange;
    color: #fff;
}
 #main h2{
     text-align: center;
     line-height:10vw;
     font-size: 1rem;
     font-weight: 600;
 }
 #main h3{
      text-align: center;
      margin-top: 1.5rem;
      line-height:1rem;
      font-size: 0.9rem;
      font-weight: 400;
 }
 #main nav{
     height: 10vw;
    align-items: center;
     display: flex;
     justify-content: space-around;
     font-size: 4vw;
 }
 
.search{
    margin: 1rem;
    border-radius: 3vw;
    width: 92vw;
    height: 2rem;
    background: #fff;
}
.search input{
    margin-top:2vw; 
    border:none;
    outline:none;
    
}

</style>

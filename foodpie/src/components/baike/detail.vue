<template>
  <div>
    <mt-header fixed>
      <router-link to="/" slot="left">
        <mt-button icon="back" :title="title">{{title}}</mt-button>
        
      </router-link>
      <select slot="right">
          <option value="1">全部</option>
            <option v-for="i in foodFamilylist">{{i.name}}</option>
      </select>
    
    </mt-header>
    <p class="yingyang">营养素排序</p>
    <div class="foodlist">
        <ul>
            <li v-for="i in 10">
                <div class="foodimg"> 
                    <img src="../../assets/img/sy_icon_zs.png" />
                </div>
                <div class="foodname">
                    <div class="foodname-title">玉米{{i | currency}}</div>
                    <div class="values"><span>{{112 | kcal}}</span>/<span>{{100 | gram}}</span></div>
                </div>
                <div class="dian">
                    <img src="../../assets/img/zs_icon_dian@2x.png" />
                </div>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      foodFamilylist:[
               
              
                // {imgUrl:require("../../assets/img/sy_icon_zs@2x.png"),name:"主食类"},
                // {imgUrl:require("../../assets/img/sy_icon_rd@2x.png"),name:"肉蛋类"},
                // {imgUrl:require("../../assets/img/sy_icon_dz@2x.png"),name:"大豆及制品"},           
                // {imgUrl:require("../../assets/img/sy_icon_sc@2x.png"),name:"蔬菜菌藻类"},
                // {imgUrl:require("../../assets/img/sy_icon_sg@2x.png"),name:"水果类"},
                // {imgUrl:require("../../assets/img/sy_icon_nn@2x.png"),name:"奶类"},
                // {imgUrl:require("../../assets/img/sy_icon_yz@2x.png"),name:"油脂类"},
                // {imgUrl:require("../../assets/img/sy_icon_jg@2x.png"),name:"坚果类"},
                // {imgUrl:require("../../assets/img/sy_icon_tw@2x.png"),name:"调味品"},
                // {imgUrl:require("../../assets/img/sy_icon_yl@2x.png"),name:"饮料类"},
                // {imgUrl:require("../../assets/img/sy_icon_dx@2x.png"),name:"零食,点心及冷饮"},
                // {imgUrl:require("../../assets/img/sy_icon_qt@2x.png"),name:"其他"} 
               ],
    };
  },
  mounted() {
    this.title = this.$route.params.i;
    console.log(this.title);
    this.$axios.get("http://localhost:3000/data").then((data)=>{
        console.log(data);
        this.foodFamilylist=data;
        
    })
  }
};
</script>

<style>
.mint-header{
    background-color: #fff;
    color: black;
}
select{
   
    border: none;
    outline: none;
}
.yingyang{
    margin-top: 10vw;
    font-size: 4vw;
    line-height: 10vw;
    height: 10vw;
    border-top:solid 2px gray;
    background: #fff;
}
.foodlist ul li{
    height: 20vw;
    background: #f4f4f4;
    border-top:solid 1px #ddd;
    display: flex;

}
.foodimg{
    width: 20vw;
    height: 20vw;
    margin: 3vw;
}
.foodname{
    
    width: 60vw;
}

.foodname-title{
    line-height: 10vw;
    border: none;
    font-size: 4vw;
}
.values{
     line-height: 10vw;
    
    font-size: 4vw;
}
.dian{
    margin: 6vw
    

}
</style>

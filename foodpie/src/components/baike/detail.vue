<template>
  <div >
    <mt-header fixed>
      <router-link to="/" slot="left">
        <mt-button icon="back" :title="title">{{title}}</mt-button>
        
      </router-link>
      <select slot="right">
          <option value="1">全部</option>
            <option v-for="i in foodFamilylist">{{i.foodname}}</option>
      </select>
     
    </mt-header>
   
  <div class="yingyang">
<p >营养素排序</p>
    </div>
       <div class="wrapper scrollHome" ref="homeWrapper">
<div class="content">
    
        <ul>
            <li v-for="i in foodsList">
                <div class="foodimg"> 
                    <img :src="i.foodPic" />
                </div>
                <div class="foodname">
                    <div class="foodname-title">{{i.foodName}}</div>
                    <div class="values"><span>{{i.content | kcal}}</span>/<span>{{100 | gram}}</span></div>
                </div>
                <div class="dian">
                    <img src="../../assets/img/zs_icon_dian@2x.png" />
                </div>
            </li>
        </ul>
    </div>
  </div>
   </div>
 
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      title: "",
      foodFamilylist:[],
      foodsList:[]
    };
  },
  methods:{
      //下拉选框数据
      getSelect(){
          this.$axios.get("/mo/mock/5c356fc6879a3554aca75b8b/api/select#!method=get").then(({data})=>{
        //console.log(data);
        this.foodFamilylist=data;
      })
      },
      //手机屏幕滑动
        scroll(){
              this.scroll = new BScroll(this.$refs.homeWrapper,{
            //只有设置成true pullingUp才能使用
            pullUpLoad:true,
            click:true,
            probeType:2
        });
          this.scroll.on("pullingUp",()=>{
            this.getFoodsInfo();
        })
        },
        getFoodsInfo(){
            this.$axios.get("/mo/mock/5c356fc6879a3554aca75b8b/api/foodsName#!method=get").then((data)=>{
        console.log(data);
        this.foodsList=data.data;
        })
        }
  },
  mounted() {
       
    this.title = this.$route.params.i;
    this.scroll();
    this.getSelect();
    this.getFoodsInfo();
  }
};
</script>

<style scoped>

.scrollHome{
        height: 100%;
        width: 100%;
        position: fixed;
        top:25vw;
    }
  .scrollHome>.content{
      height: 1800px;
        margin-bottom: 18vw;
    }


    .mint-header{
  background-color: #fff;
  height: 15vw;
  color: #000;
  font-size: 5vw;
}
i{
  display: inline-block;
  width: 4vw;
  margin-left: 2vw;

}
.mint-button-icon i{
  font-size: 4vw;
}


select{
    padding: 2vw;
   font-size: 4vw;
    border: none;
    outline: none;
}
.yingyang{
    margin-top: 15vw;
    font-size: 4vw;
    line-height: 10vw;
    height: 10vw;
    border-top:solid 2px gray;
     border-bottom:solid 2px gray;
    background: #fff;
}
.content{
    height: 100%;
}
.content ul{
    height: 100%;
}
.content ul li{
    height: 20vw;
    background: #f4f4f4;
    border-top:solid 1px #ddd;
    display: flex;
   

}
.foodimg{
    width: 20vw;
    height: 20vw;
    
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
    margin: 6vw;
    width: 10vw;

    

}
</style>

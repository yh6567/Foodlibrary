<template>
  <div class="searched">
    <div class="searched-title">
      <p>大家都在搜</p>
    </div>
    <ul>
      <li v-for="(item,index) in fruits" @click="touchSearched(item)">
        <span>{{item}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        fruits:['苹果','香蕉','馒头','红薯','酸奶','米饭','玉米','鸡蛋','豆浆','草莓'],
          touchbesearched:[]
      }
    },methods:{
          touchSearched(a){
              if(window.localStorage.getItem("searched")){
                  this.touchbesearched  = window.localStorage.getItem("searched").split(",");
              }
              this.touchbesearched = this.touchbesearched.filter( each =>{
                  return each !== a;
              })
              this.touchbesearched.push(a);
              window.localStorage.setItem("searched",this.touchbesearched.toString());
              this.$router.push({path:"/searchanswer"});
          }
      }
  }
</script>

<style lang="scss" scoped>
  .searched{
    margin-top: .87rem;
    width: 100%;
    min-height: 2.67rem;
    color:#A3A3A3;
    font-size: .23rem;
      overflow: hidden;
  }
  .searched-title{
    width: 100%;
    height: .88rem;
    font-size: .23rem;
    color:#A3A3A3;
    overflow: hidden;
  }
  .searched-title>p{
    margin-top: .45rem;
    padding-left: .33rem;
  }
  ul>li{
    background: #fff;
    width: 50%;
    height: .89rem;
    float: left;
      border-bottom: 2px solid #F6F6F6;
    overflow: hidden;
    span{
      margin: .29rem 0 .29rem .29rem;
      display: block;
    }
  }

</style>

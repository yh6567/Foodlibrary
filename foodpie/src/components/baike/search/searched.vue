<template>
  <div class="searched" v-show="searchedclearflag">
    <div class="searched-title">
        <p>最近搜过</p>
    </div>
    <ul>
      <li v-for="(item,index) in searched" @click="allSearched(item)">
        <img src="../../../assets/img/naozhong@3x.png"/>
        <span >{{item}}</span>
      </li>
    </ul>
    <div class="clear-history" @click="clearsearched()">
      <img src="../../../assets/img/lajitong-hui@3x.png">
      <p>清空历史记录</p>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            searched:[],
            searchedclearflag: true,
            allsearched:[]
        }
    },
    methods:{
        clearsearched(){
            window.localStorage.setItem("searched",'');
            this.searched = [];
            this.searchedclearflag = false;
        },
        allSearched(a){
            if(window.localStorage.getItem("searched")){
                this.allsearched  = window.localStorage.getItem("searched").split(",");
            }
            this.allsearched = this.allsearched.filter( each =>{
                return each !== a;
            })
            this.allsearched.push(a);
            window.localStorage.setItem("searched",this.allsearched.toString());
            this.$router.push({path:"/searchanswer"});
        }
    },
    created(){
            this.searched = window.localStorage.getItem("searched").split(",");
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
      width: 100%;
      height: .89rem;
      border-bottom: 2px solid #F6F6F6;
      overflow: hidden;
    img{
      width: .24rem;
      height: .24rem;
      float: left;
      margin: .29rem .38rem 0 .29rem;
    }
    span{
      margin: .29rem 0 .29rem 0;
      float: left;
    }
  }
  .clear-history{
      background: #fff;
      height: .89rem;
      width: 100%;
      display: flex;
      justify-content: center;
      img{
        width: .24rem;
        height: .30rem;
        margin: .29rem .21rem 0 0 ;
      }
      p{
        margin-top: .29rem;
      }
  }
</style>


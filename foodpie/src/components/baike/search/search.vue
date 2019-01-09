//搜索页面输入框
<template>
  <div>
    <img class="back" src="../../../assets/img/icon-rili-1@3x.png">
    <input type="text" v-model="searching" placeholder="请输入食物名称"/>
    <img class="search" src="../../../assets/img/ss_icon_ss@3x.png" @click="writeSearched()"/>
  </div>
</template>


<script>
  export default {
      data(){
          return{
              searching :"",
              besearched :[]
          }
      },
      methods:{
         writeSearched(){
             if(!this.searching)return;
             if(window.localStorage.getItem("searched")){
                 this.besearched  = window.localStorage.getItem("searched").split(",");
             }
             console.log(this.besearched);

             this.besearched = this.besearched.filter( each =>{
               return each !== this.searching;
             })
             this.besearched.push(this.searching);
             window.localStorage.setItem("searched",this.besearched.toString());
             this.searching = '';

        }
      }
  }
</script>

<style lang="scss" scoped>
  div{
    width: 100%;
    height: .88rem;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    background: #fff;
  }
  .back{
    width: .34rem;
    height:.32rem;
    margin: .28rem .28rem .28rem 0.20rem;
  }
  input{
    width: 5.84rem;
    height: .66rem;
    color: #333333;
    margin: 0.10rem 0 0 0;
    background: #f6f6f6;
    border: none;
    padding-left: .11rem;
    font-size: .23rem;
  }
  .search{
    width: .32rem;
    height: .32rem;
    display: block;
    margin: .29rem .13rem 0 .15rem;
  }
</style>

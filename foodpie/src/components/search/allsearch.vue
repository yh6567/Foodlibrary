<template>
  <div class="searched">
    <div class="searched-title">
      <p>大家都在搜</p>
    </div>
    <ul>
      <li v-for="(item,index) in fruits">
        <span>{{item}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        fruits:['苹果','香蕉','馒头','红薯','酸奶','米饭','玉米','鸡蛋','豆浆','草莓']
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
    overflow: hidden;
    span{
      margin: .29rem 0 .29rem .29rem;
      display: block;
    }
    &::after{
      content: '';
      width: 5.86rem;
      height: 1px;
      zoom:1;
      display: table;
      border: #F0F0F0;
      margin-left: .82rem;
      clear: both;
    }
  }

</style>

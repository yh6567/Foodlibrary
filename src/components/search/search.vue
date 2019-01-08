//搜索页面输入框
<template>
  <div>
    <img class="back" src="../../assets/icon-rili-1@3x.png">
    <input placeholder="请输入食物名称"/>
    <img class="search" src="../../assets/ss_icon_ss@3x.png"/>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  div{
    width: 100%;
    height: .88rem;
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
  }
  .back{
    width: .34rem;
    height:.32rem;
    margin: .28rem .28rem .28rem .32rem;
    float: left;
  }
  input{
    width: 5.84rem;
    height: .66rem;
    float: left;
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
    float: left;
    margin: .29rem 0 0 .13rem;
  }
</style>

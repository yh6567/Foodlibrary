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
    height: 88px;
    position: fixed;
    top: 0;
    left: 0;
  }
  .back{
    width: .34rem;
    height:.32rem;
    float: left;
  }
  input{
    width: 5.84rem;
    height: .66rem;
    float: left;
    background: #f6f6f6;
    border: none;
  }
  .search{
    width: .32rem;
    height: .32rem;
  }
</style>

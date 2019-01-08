<template>
  <div class="searched">
    <div class="searched-title">
        <p>最近搜过</p>
    </div>
    <ul>
      <li>
        <img src="../../assets/naozhong@3x.png"/>
        <span >苹果</span>
      </li>
    </ul>
    <div class="clear-history">
      <img src="../../assets/lajitong-hui@3x.png">
      <p>清空历史记录</p>
    </div>
  </div>
</template>

<script>
export default {

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
    &::after{
        content: '';
        width: 5.86rem;
        height: 1px;
        *zoom:1;
        display: table;
        border: #F0F0F0;
        margin-left: .82rem;
        clear: both;
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


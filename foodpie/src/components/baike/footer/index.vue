<template>
  <div id="footer">
    <ul>
      <li v-for="(item,index) in navs">
        <img :src=item.img />
        <router-link :to="item.url">{{item.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import heart from "../../../assets/img/icon-sc@3x.png";
import vs from "../../../assets/img/icon_vs@3x.png";
import record from "../../../assets/img/icon_jl@3x.png";
export default{
  data(){
    return {
      navs:[
        {
              url:"aaa",
              title:"已收藏",
              img:heart
        },
        {
            url:"/searchcompare",
            title:"对比",
            img:vs
        },
        {
            url:"aaa",
            title:"记录",
            img:record
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  #footer{
    position:fixed;
    bottom:0;
    left:0;
    width: 100%;
    height: .98rem;
    background-color: #fff;
    ul{
      width: 100%;
      height: .98rem;
      display: flex;
      justify-content: space-around;
      li{
        height: .98rem;
        font-size: .22rem;
        img{
          margin-top: .12rem;
          width: .55rem;
          height:.50rem;
        }
        a{
          text-align: center;
          display: block;
          margin-top: .02rem
        }
      }
    }
  }
</style>

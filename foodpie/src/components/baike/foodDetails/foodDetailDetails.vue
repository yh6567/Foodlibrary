<template>
  <div>
    <div class="details">
      <ul>
        <li><p>营养元素</p><p>每100克</p></li>
        <li><p>热量</p><p>就有</p></li>
        <li><p>蛋白质</p><p>二两</p></li>
        <li><p>脂肪</p><p>猪肉</p></li>
        <li><p>碳水化合物</p><p>可以长身上</p></li>
        <li><p>膳食纤维</p><p>是不是很棒棒</p></li>
        <li>更多营养元素</li>
      </ul>
    </div>
    <div class="foodtext">
      <p class="ft-title">食品红绿灯</p>
      <div class="ft-content">
        <div class="ft-point">
          <img :src="point(0)" class="point"/>
          <p>推荐</p>
        </div>
        <span>{{foodDetails.foodname}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import point1 from "../../../assets/img/zs_icon_dian@3x.png";
import point2 from "../../../assets/img/zs_icon_dian@3x(1).png";
import point3 from "../../../assets/img/yuanxing@3x.png";
import Vuex from "Vuex";
export default {
    methods:{
      point(item){
          switch (item) {
              case 0 : return point1;break;
              case 1 : return point2;break;
              case 2 : return point3;break;
          }
      },
    },
    computed:{
      ...Vuex.mapState({
        foodDetails:state => state.baike.foodDetails
      })
    },
    created(){
      this.$store.dispatch("getFoodDetails");
    }
}
</script>

<style lang="scss" scoped>
    .point{
        width: .2rem;
        height: .2rem;
    }
    .details{
        margin-top:.2rem;
        width: 100%;
        height:5.53rem;
        background:#fff;
        ul{
          &>li{
            font-family: PingFang-SC-Regular;
            font-weight: Regular;
            display: flex;
            justify-content:space-around;
            line-height: .79rem;
            font-size:.24rem;
            color:#111111;
            border-bottom: 1px solid #F0F0F0;
            height: .79rem;
            width: 100%;
          }
          &>li:first-child,li:last-child{
            color:#A3A3A3;
          }
      }
    }
    .foodtext{
        background-color: #fff;
        margin-top:.2rem;
        width: 100%;
        font-size: .24rem;
        overflow: hidden;
        .ft-title{
          margin-left:.32rem;
          line-height: .6rem;
          height: .6rem;
        }
        .ft-content{
          .ft-point{
            width: 1.54rem;
            float: left;
            height: 100%;
            font-family: SimSun;
            img{
              float: left;
              margin: .64rem .1rem 0 .32rem;
              vertical-align: middle;
            }
            p{
              float: left;
              margin-top: .57rem;
              vertical-align: middle;
            }
          }
          span{
            width: 5.63rem;
            float: left;
            margin-bottom: .45rem;
          }
        }
    }
</style>

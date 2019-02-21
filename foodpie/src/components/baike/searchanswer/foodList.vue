<template>
    <div class="foodList wrapper" ref="content">
        <ul class="content main">
            <li v-for="(item,index) in foodlist" @click="handlerFoodDetail(item.id)">
                <img :src="item.foodimg" class="foodimg"/>
                <div class="text">
                    <span class="foodname">{{item.foodname}}</span>
                    <div class="energy">
                        <span>{{item.calories}}</span><p>千卡/100克</p>
                    </div>
                </div>
                <img :src="point(item.foodColor)" class="point"/>
            </li>
            <div class="bottom-tip">
                    <span class="loading-hook">{{pullupMsg}}</span>
            </div>
        </ul>
    </div>
</template>

<script>
    import point1 from "../../../assets/img/zs_icon_dian@3x.png";
    import point2 from "../../../assets/img/zs_icon_dian@3x(1).png";
    import point3 from "../../../assets/img/yuanxing@3x.png";
    import Vuex from "vuex";
    import BScroll from 'better-scroll';
    export default{
        data(){
            return {
              data: [0,1,2,3,4,5,6],
              pullupMsg: '加载更多',
            }
        },
        methods:{
            point(item){
                switch (item) {
                    case 0 : return point1;break;
                    case 1 : return point2;break;
                    case 2 : return point3;break;
                }
            },
            handlerFoodDetail(foodid){
                this.$store.dispatch("getFoodDetails",foodid);
                this.$router.push("/fooddetail");
            }
        },
        computed: { ...Vuex.mapState({ foodlist: state => state.baike.foodListInfo })
        },mounted(){
          this.$nextTick(() => {
            if (!this.scroll) {
               this.scroll =new BScroll(this.$refs.content, {
                              scrollY: true,
                              click: true,
                              pullUpLoad:true,
                              probeType:1
                });
                console.log(this.scroll);
                this.scroll.on("pullingUp",()=>{
                this.$store.dispatch("getFoodListInfo",this.$store.state.baike.searchch);
                console.log("searchch",this.$store.state.baike.searchch)
                })
       }else{
          this.scroll.refresh();
        }})
      }
    }
</script>

<style lang="scss" scoped>
    .foodList{
        width: 100%;
        height: 13.34rem;
        font-size: .18rem;
        position: fixed;
        overflow: hidden;
        top:.9rem;
    }
    .main{
      height:max-content;
    }
    .foodList>ul>li{
        overflow: hidden;
        border-bottom: 1px solid #F0F0F0;
        border-top: 1px solid #F0F0F0;
        background: #F6F6F6;
        .foodimg{
            width: .80rem;
            height: .80rem;
            float: left;
            margin: .1rem 0 .1rem .32rem;
        }
        .text{
            float: left;
        }
        .foodname{
            display: block;
            margin: .21rem 0 0 .34rem;
        }
        .energy{
            display: flex;
            margin: .06rem 0 0 .32rem;
        }
        .point{
            width: .2rem;
            height: .2rem;
            float: right;
            margin: .4rem .32rem 0 0rem;
        }
        }
        .bottom-tip{
         width: 100%;
         height: 35px;
         line-height: 35px;
         text-align: center;
         color: #777;
         background: #f2f2f2;
         position: absolute;
         bottom: -35px;
         left: 0;
       }
</style>

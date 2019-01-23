<template>
    <div class="foodList wrapper">
        <div class="space"></div>
        <ul class="content">
            <li v-for="(item,index) in foodlist" @click="handlerFoodDetail(item.foodid)">
                <img :src="item.foodimg" class="foodimg"/>
                <div class="text">
                    <span class="foodname">{{item.foodname}}</span>
                    <div class="energy">
                        <span>{{item.calore}}</span><p>千卡/100克</p>
                    </div>
                </div>
                <img :src="point(item.foodcolor)" class="point"/>
            </li>
        </ul>
    </div>
</template>

<script>
    import point1 from "../../../assets/img/zs_icon_dian@3x.png";
    import point2 from "../../../assets/img/zs_icon_dian@3x(1).png";
    import point3 from "../../../assets/img/yuanxing@3x.png";
    import Vuex from "Vuex";
    // import BScroll from 'better-scroll'

    export default{
        data(){
            return {
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
                this.$router.push("/fooddetail");
            }
        },

        computed: {
            ...Vuex.mapState({
                foodlist: state => state.baike.foodListInfo
            })

        },mounted(){

        }

    }
</script>

<style lang="scss" scoped>
    .foodList{
        width: 100%;
        height: 13.34rem;
        overflow-y: scroll;
        font-size: .18rem;
    }
    .space{
        width: 100%;
        height: .9rem;
        background: #F6F6F6;
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
</style>

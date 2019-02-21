<template>
    <div class="namespace">
        <img :src="this.foodDetails.food.foodimg"/>
        <div class="name">
            <span>{{this.foodDetails.food.foodname}}</span>
            <div class="text">
                <span>{{this.foodDetails.food.calories}}</span><p class="p-one">千卡</p><p class="p-two">/每100克</p>
            </div>
        </div>
    </div>
</template>

<script>
	import Vuex from "vuex";

    export default {
        data(){
            return{

            }
        },computed:{
      ...Vuex.mapState({
        foodDetails:state => state.baike.foodDetails
      })
    },

    }
</script>

<style lang="scss" scoped>
    .namespace{
        height: 1.5rem;
        background: #fff;
        font-family: PingFang-SC-Regular;
        img{
            width: 1rem;
            height:1rem;
            border: .01rem dashed rgb(150,150,150);
            padding: .01rem;
            float: left;
            margin: .32rem 0 0 .25rem;
        }
        .name{
            float: left;
            margin: .15rem 0 0 .15rem;
            span{
                font-size: .24rem;
            }
        }
        .text{
            display: flex;
            margin-top: .09rem;
            span{
                font-size: .32rem;
            }
            .p-one{
                font-size: .32rem;
            }
            .p-two{
                font-size: .24rem;
                color: #FC4E52;
            }
        }
    }
</style>

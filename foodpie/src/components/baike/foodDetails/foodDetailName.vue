<template>
    <div class="namespace">
        <img src="../../../assets/img/tu1@3x.png"/>
        <div class="name">
            <span>123</span>
            <div class="text">
                <span>112</span><p class="p-one">千卡</p><p class="p-two">/每100克</p>
            </div>
        </div>
    </div>
</template>

<script>
import Vuex from "Vuex";
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
            float: left;
            margin: .32rem 0 0 .25rem;
        }
        .name{
            float: left;
            margin: .38rem 0 0 .32rem;
            span{
                font-size: .24rem;
            }
        }
        .text{
            display: flex;
            margin-top: .19rem;
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

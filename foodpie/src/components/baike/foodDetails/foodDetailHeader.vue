<template>
   <div>
       <img src="../../../assets/img/icon_fh@3x.png" @click="back()">
       <span>{{this.foodDetails.foodinfo.foodname}}</span>
   </div>
</template>

<script>
	import Vuex from "Vuex";

    export default {

        data(){
            return{
            }
        },
        methods:{
            back(){
                this.$router.back();
            }
        },computed:{
      ...Vuex.mapState({
        foodDetails:state => state.baike.foodDetails
      })
    },
    }
</script>

<style lang="scss" scoped>
    div{
        width: 100%;
        height: .88rem;
        text-align: center;
        line-height: .88rem;
        background: #fff;
        border-bottom: .01rem solid rgba(240,240,240,1);
        font-family: PingFang-SC-Regular;
        img{
            width:.34rem;
            height:.32rem;
            margin: .28rem 0 0 .32rem;
            position: absolute;
        }
        span{
            margin-top: .3rem;
            font-size: .34rem;
        }
    }
</style>

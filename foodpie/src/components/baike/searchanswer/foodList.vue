<template>
    <div class="foodList">
        <div class="space"></div>
        <ul>
            <li v-for="(item,index) in foodlist">
                <img src="../../../assets/img/zs_icon@3x(1).png" class="foodimg"/>
                <div>
                    <span class="foodname">{{item}}</span>
                    <div class="energy">
                        <span>12</span><p>千卡/100克</p>
                    </div>
                </div>
                <img :src="point(item)" class="point"/>
            </li>
        </ul>
    </div>
</template>

<script>
    import point1 from "../../../assets/img/zs_icon_dian@3x.png";
    import point2 from "../../../assets/img/zs_icon_dian@3x(1).png";
    import point3 from "../../../assets/img/yuanxing@3x.png";
    export default{
        data(){
            return{
                foodlist:["苹果","香蕉","梨","苹果","香蕉","梨","苹果","香蕉","梨","苹果","香蕉","梨","苹果","香蕉","梨","苹果","香蕉","梨","苹果","香蕉","梨","苹果","香蕉","梨","苹果","香蕉","梨","苹果","香蕉","梨"]
            }
        },
        methods:{
            point(item){
                switch (item) {
                    case "苹果" : return point1;break;
                    case "香蕉" : return point2;break;
                    case "梨" : return point3;break;
                }
            }
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
        display: flex;
        border-bottom: 1px solid #F0F0F0;
        border-top: 1px solid #F0F0F0;
        background: #F6F6F6;
        .foodimg{
            width: .80rem;
            height: .80rem;
            margin: .1rem 0 .1rem .32rem;
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
            margin: .4rem 0 0 4.13rem;
        }
    }
</style>

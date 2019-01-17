<template>
    <div id="wrap">
        <div  :style="index%2===0?'left:40vw':''"  v-for="(item,index) in foodFamilylist" id="box">
            <h2 >你好{{item.name}}{{index}}</h2>
            <div id="by" :class="index%2===0?'':'active'">
                <img src="#" alt="哈哈">
            </div> 
        </div>
    </div>
</template>

<script>
export default {
    //
    data(){
        return{
             foodFamilylist:[
               
              
                {imgUrl:require("../../assets/img/sy_icon_zs@2x.png"),name:"主食类"},
                {imgUrl:require("../../assets/img/sy_icon_rd@2x.png"),name:"肉蛋类"},
                {imgUrl:require("../../assets/img/sy_icon_dz@2x.png"),name:"大豆及制品"},           
                {imgUrl:require("../../assets/img/sy_icon_sc@2x.png"),name:"蔬菜菌藻类"},
                {imgUrl:require("../../assets/img/sy_icon_sg@2x.png"),name:"水果类"},
                {imgUrl:require("../../assets/img/sy_icon_nn@2x.png"),name:"奶类"},
                {imgUrl:require("../../assets/img/sy_icon_yz@2x.png"),name:"油脂类"},
                {imgUrl:require("../../assets/img/sy_icon_jg@2x.png"),name:"坚果类"},
                {imgUrl:require("../../assets/img/sy_icon_tw@2x.png"),name:"调味品"},
                {imgUrl:require("../../assets/img/sy_icon_yl@2x.png"),name:"饮料类"},
                {imgUrl:require("../../assets/img/sy_icon_dx@2x.png"),name:"零食,点心及冷饮"},
                {imgUrl:require("../../assets/img/sy_icon_qt@2x.png"),name:"其他"} 
               ],
        }
    },
    method:{

    }
}
</script>

<style>

#box{
    box-shadow: 0 0 5px #000;
    position: absolute;
}
#by{
    height: 20vw;
    width: 20vw;
    background: yellow;
}
 #by.active{
    height: 40vw;
    
    background: yellowgreen;
}
</style>

<template>
    <div id="wrap">
        <p>{{num}}</p>
    </div>
</template>

<script>
export default {
    //
    data(){
        return{
          num:0 
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

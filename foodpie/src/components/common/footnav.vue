<template>
   <footer v-if="this.$route.meta.show">
       <dl @click="$router.push('/')">
       <dt><img src="../../assets/img/sy_icon_zs@2x.png" alt=""></dt>
           <dd>食物百科</dd>
           
       </dl>
       <dl @click="$router.push('/shopping')">
       <dt><img src="../../assets/img/sy_icon_gc@2x.png" alt=""></dt>
           <dd>逛吃</dd>
       </dl>
       <dl @click="$router.push('/my')">
       <dt><img src="../../assets/img/sy_icon_zs@2x.png" alt=""></dt>
           <dd>我的</dd>
       </dl>
   </footer>
</template>

<script>
export default {
   
}
</script>

<style scoped>
footer {
  width: 100%;
  height: 18vw;
  background: #fff;
  border-top: 1px solid #f1f1f1;
  position: fixed;
  bottom: 0;
  left: 0;
    font-size: 4vw;
  display: flex;
  justify-content: space-around;
}
dl{
   display: flex; 
   flex-direction: column;
   justify-content: space-around;
   align-items:center;
}
dl dt img{
    width: 10vw;
    height: 10vw;
}
</style>

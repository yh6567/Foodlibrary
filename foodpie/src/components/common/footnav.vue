<template>
   <footer>
       <dl @click="$router.push('/')">
           <dd>食物百科</dd>
       </dl>
       <dl @click="$router.push('/shopping')">
           <dd>逛吃</dd>
       </dl>
       <dl @click="$router.push('/my')">
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
  
  background: #fff;
  border-top: 1px solid #f1f1f1;
  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: space-around;
}
dl{
   display: flex; 
   flex-direction: column;
   justify-content: space-around;
   align-items:center;
}
</style>

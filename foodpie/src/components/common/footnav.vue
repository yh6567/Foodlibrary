<template>
   <footer v-if="this.$route.meta.show">
    
       <router-link :v="name==='main'?'':'ac'" to="/">
        <mt-tab-item id="食物百科">
                <img slot="icon" src="../../assets/img/sy_icon_swbk@2x.png">
                食物百科
            </mt-tab-item>
       </router-link>
       <router-link to="/shopping">
         <mt-tab-item id="逛吃">
            <img slot="icon" src="../../assets/img/sy_icon_gc@2x.png">
             逛吃
            </mt-tab-item>
       </router-link >
       <router-link to="/my">
            <mt-tab-item id="我的">
            <img slot="icon" src="../../assets/img/sy_icon_wd@2x.png">
            我的
            </mt-tab-item>
       </router-link >
      
     
   </footer>
</template>

<script>
export default {
   data(){
       return{
           name:""
       }
   },
   methods:{
       change(){
           this.flag= !true
       }
   },
   mounted(){
       this.name=this.$route.name;
       
   }
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
  border-top: #ddd 1px solid;
}
.mint-tab-item-label{
     font-size: 20px;
}
.mint-tab-item-icon{
    width: 10vw;
    height: 10vw;
}
.router-link-active{
    color: yellowgreen;
}
</style>

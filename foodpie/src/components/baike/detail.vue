<template>
    <div>
        <div class="back" @click="$router.push('/')">
            <img src="../../assets/img/icon_fh@3x.png" alt="">
          </div>
       <h2 :title="title">{{title}}</h2>
    </div>
</template>

<script>
export default{
    data(){
        return{
            title:""
        }
    },
    mounted(){
      this.title=this.$route.params.i;
      console.log(this.title);
      
        
    }
}
</script>

<style>

</style>

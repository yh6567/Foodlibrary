<template>
    <div>
        <span @click="$router.push('/')">></span>
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

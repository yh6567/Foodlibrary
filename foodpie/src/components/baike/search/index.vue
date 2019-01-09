<template>
  <div class="min-height">
    <search-com/>
    <searched-com/>
    <allsearch-com/>
  </div>
</template>

<script>
  import search from './search';
  import searched from './searched';
  import allsearch from './allsearch';
  export default {
      data(){
          return{
              height:12.21,
          }
      },
      components:{
      'search-com' : search,
      'searched-com': searched,
      'allsearch-com': allsearch,
      },
      mounted(){

            console.log(this.$refs);

      }
  }
</script>

<style lang="scss" scoped>
    .min-height{
      background: #F6F6F6;
      min-height: 13.34rem;
      overflow: hidden;
    }
</style>

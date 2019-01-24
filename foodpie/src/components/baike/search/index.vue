<template>
  <div class="min-height">
    <search-com/>
    <searched-com v-show="searchedflag"/>
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
          }
      },
      components:{
      'search-com' : search,
      'searched-com': searched,
      'allsearch-com': allsearch,
      },
      mounted(){

      },
      created(){
          if(!window.localStorage.getItem("searched")){
              this.searchedflag = false
          }else {
              this.searchedflag = true
          }
      }
  }
</script>

<style lang="scss" scoped>
    .min-height{
      background: #F6F6F6;
      height: 13.34rem;
      overflow-x: scroll;
    }
</style>

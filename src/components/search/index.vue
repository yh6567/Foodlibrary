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
    components:{
      'search-com' : search,
      'searched-com': searched,
      'allsearch-com': allsearch,
    }
  }
</script>

<style lang="scss" scoped>
    .min-height{
      background: #F6F6F6;
      min-height: 12.94rem;
      overflow: hidden;
    }
</style>

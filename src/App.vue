<template>
  <div id="app">

    <router-view/>
    <FootNav v-if="this.$route.meta.footerflag"/>
  </div>
</template>

<script>
import FootNav from "@/components/common/footnav"
export default {
  name: 'App',
  components:{
    FootNav
  }
}
</script>

<style>


</style>

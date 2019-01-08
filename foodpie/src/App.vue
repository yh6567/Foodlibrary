<template>
  <div id="app">

    <router-view/>
    <FootNav v-if="this.$route.meta.show"/>
  </div>
</template>

<script>
import FootNav from "@/components/common/footnav"
export default {
  name: 'App',
  components:{
   'FootNav' : FootNav
  }
}
</script>

<style>

</style>

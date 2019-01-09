<template>
  <div id="app">

    <router-view/>
    <FootNav />
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

<style scoped>

</style>

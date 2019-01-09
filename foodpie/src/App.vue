<template>
  <div id="app">

    <router-view/>
<<<<<<< HEAD
    <FootNav />
=======
    <FootNav v-if="this.$route.meta.show"/>
>>>>>>> 6103dc52c0868a0d0922727db4a7a4c5c0705766
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

<<<<<<< HEAD
<style scoped>
=======
<style>
>>>>>>> 6103dc52c0868a0d0922727db4a7a4c5c0705766

</style>

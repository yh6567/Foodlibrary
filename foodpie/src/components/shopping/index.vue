<template>
    <div>
       	<cate-com/>
       	<evaluating-com/>

       	<!-- <Page-com/> -->
       	<!-- <Kap-com/> -->
    </div>
</template>

<script>
import Cate from "./cate/cate.vue";
// import Page from "./page/index.vue";
import Home from './evaluating/evaluating.vue';
import Kap from "./Kap/Kap.vue";
export default {
	routes:[
		{
		path: '/home',
	    name:"home",
	    component: Home
		}
	]
	,
  components: {
    "cate-com":Cate,
		// "Page-com":Page
		// 'Kap-com':Kap
		"evaluating-com":Home
  }

}
</script>

<style>

</style>

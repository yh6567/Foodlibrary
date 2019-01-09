<template>
    <div>
       	<cate-com/>
       	<!--<components is=""></components>-->
       	<Page-com/>
       	<!--<Kap-com/>-->
    </div>
</template>

<script>
import Cate from "./cate/cate.vue";
import Page from "./page/index.vue";
import Home from './evaluating/evaluating.vue';
//import Kap from './KAP/Kap.vue'
export default {
  components: {
    "cate-com":Cate,
    "Page-com":Page,
    'Home-com':Home,
//	'Kap-com':Kap
  },
  created(){
 	this.observer.$on('index',(data)=>{
 		console.log(data)
 		this.cataIndex=data;
 	})
 },
 data(){
 	return{
 		cataIndex:''
 	}
 }

}
</script>

<style>

</style>

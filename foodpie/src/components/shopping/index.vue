<template>
    <div>
    	
    <cate-com/>
   	<component :is="comName"></component>
     <!--  	<cate-com/>
       	<Page-com/>
       	<Kap-com/>-->
    </div>
</template>

<script>
import Cate from "./cate/cate.vue";
import Page from "./page/index.vue";
import Home from './evaluating/evaluating.vue';
import Kap from './kap/Kap.vue'
export default {
  components: {
    "cate-com":Cate,
    "Page-com":Page,
    'Home-com':Home,
	'Kap-com':Kap
  },
  created(){
 	this.observer.$on('handle',(data)=>{
 		this.index=data;
 		this.handleToggle(this.index)
 	})
 },
 data(){
 	return{
 		index:{},
 		comName:'Page-com'
 	}
 },
	  methods:{
	  	handleToggle(index) {
				if(index==1){
					this.comName = "cate-com";
				}else if(index==2){
					this.comName = "Home-com";
				}else if(index==3){
					this.comName = "Kap-com";
				}else{
        	   		this.comName = "Page-com";
        	   }
         }
	  }
}
</script>

<style>

</style>

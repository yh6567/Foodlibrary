<template>
    <div>

       	<cate-com/>
       	<evaluating-com/>

       	<!-- <Page-com/> -->
       	<!-- <Kap-com/> -->

    	
    <cate-com/>
   	<component :is="comName"></component>
     <!--  	<cate-com/>
       	<Page-com/>
       	<Kap-com/>-->

    </div>
</template>

<script>
// import Cate from "./cate/cate.vue";

// // import Page from "./page/index.vue";
// import Home from './evaluating/evaluating.vue';
// import Kap from "./Kap/Kap.vue";

// import Page from "./page/index.vue";
// import Home from './evaluating/evaluating.vue';
// import Kap from './KAP/Kap.vue'

// export default {
//   components: {
//     "cate-com":Cate,

// 		// "Page-com":Page
// 		// 'Kap-com':Kap
// 		"evaluating-com":Home
//   }


// import Page from "./page/index.vue";
// import Home from './evaluating/evaluating.vue';
// import Kap from './kap/Kap.vue'

//   components: {
//     "cate-com":Cate,
//     "Page-com":Page,
//     'Home-com':Home,
// 	'Kap-com':Kap
//   },
//   created(){
//  	this.observer.$on('handle',(data)=>{
//  		this.index=data;
//  		this.handleToggle(this.index)
//  	})
//  },
//  data(){
//  	return{
//  		index:{},
//  		comName:'Page-com'
//  	}
//  },
			//console.log(index)
//			beforeRouterUpdate(to,from,next){
//				let {id,name} = to.parqams;
//				this.index = id;
//				this.comName = name;
	//   methods:{
	//   	handleToggle(index) {
//	      switch (index){
//	      	 case 0:
//	          this.comName = "cate-com";
//	          break;
//	        case 1:
//	          this.comName = "Page-com";
//	          break;
//	        case 2:
//	          this.comName = "Home-com";
//	          break;
//	        case 3:
//	          this.comName = "Kap-com";
//	          break;
// 				if(index==1){
// 					this.comName = "cate-com";
// 				}else if(index==2){
// 					this.comName = "Home-com";
// 				}else if(index==3){
// 					this.comName = "Kap-com";
// 				}else{
//         	   		this.comName = "Page-com";
//         	   }
//          }
// 	  }

// }
</script>

<style>

</style>

<template>
    <div>
       	<cate-com/>
       	<Page-com/>
       	<evaluating-com/>
    </div>
</template>

<script>
import Cate from "./cate/cate.vue";
import Page from "./page/index.vue";
import Home from './evaluating/evaluating.vue'
import Intellectual from './intellectual/intellectual.vue'
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
    "Page-com":Page,
  }

}
</script>

<style>

</style>

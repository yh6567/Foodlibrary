<template>
    <div>
       	<cate-com/>
       	<Page-com/>
       	<Home-com/>
		<Intellectual-com/>
    </div>
</template>

<script>
import Cate from "./cate/cate.vue";
import Page from "./page/index.vue";

import Home from './evaluating/evaluating.vue'
import Intellectual from './intellectual/intellectual.vue'
export default {
	routes:[
		
	]
	,
  components: {
    "cate-com":Cate,
    "Page-com":Page,
    'Home-com':Home,
    'Intellectual-com':Intellectual
  }

}
</script>

<style>

</style>

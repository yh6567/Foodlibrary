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
		components: {
			FootNav
		}
	}
</script>

<style scoped>
  #app{
    height:100%;
  }
</style>

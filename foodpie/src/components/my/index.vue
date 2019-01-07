<template>
    <div class="my">
    	<MyTop-com></MyTop-com>
		<MyNav-com></MyNav-com>
    </div>
</template>

<script>
	import MyTop from "./myTop"
	import MyNav from "./myNav";
export default{
	components:{
		"MyTop-com":MyTop,
		"MyNav-com":MyNav
	}
}

</script>

<style scoped>
	.my{
		width: 100%;
		height: 100%;
	}
	
	
</style>

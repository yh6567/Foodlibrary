<template>
	<div class="cate">
		<div class="gap"></div>
		<div class="nav">
			<div><h2 class="nav-font">逛吃</h2></div>
		</div>
		<ul class="nav_left">
    		<li v-for="(item,index) in goods" @click="Aclick(index)"   :class = "currentindex == index?'aclick':''">{{item}}</li>
    	</ul>
	</div>
</template>

<script>
export default{
 data(){
  	return {
  		 goods:[ 
        "首页",
        "评测",
        "知识",
        "美食"
      ],
  		currentindex:0
  	}
 },
 methods:{
	Aclick(index){
		this.currentindex=index;
	}
 },
 
}
</script>

<style scoped>
	.cate{
		width: 100%;
		height: 100%;
		
	}
	.cate.nav{
		
	}
	.nav-font{
		width: 100%;
		height: 1.68rem;
		font-size: 0.68rem;
		line-height: 1.68rem;
		text-align: center;
		border-bottom: 1px solid #f0f0f0;
	}
	.gap{
		height: 0.45rem;
		width: 100%;
	}
	.nav_left>li{
		float: left;
		width: 24%;
		height: 1.4rem;
		text-align: center;
		line-height: 1.4rem;
	}
	.aclick{
		color: #eb8c54;
	}
</style>
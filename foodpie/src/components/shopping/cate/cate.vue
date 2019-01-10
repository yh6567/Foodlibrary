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
  		currentindex:{}
  	}
 },
methods:{
	Aclick(index){
		this.currentindex=index;
		if(this.currentindex==0){
			this.observer.$emit('handle',0)
			console.log(this.currentindex,"111")
		}else{
			
			this.observer.$emit('handle',this.currentindex)
//			console.log(this.currentindex)
			
		}
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
		height: .84rem;
		font-size: 0.34rem;
		line-height: .84rem;
		text-align: center;
		border-bottom: 1px solid #f0f0f0;
	}
	.gap{
		height: 0.45rem;
		width: 100%;
	}
	.nav_left{
		width: 100%;
		height:.7rem;
	}
	.nav_left>li{
		float: left;
		width: 25%;
		height: .7rem;
		text-align: center;
		line-height: .7rem;
	}
	.aclick{
		color: #eb8c54;
	}
	
</style>
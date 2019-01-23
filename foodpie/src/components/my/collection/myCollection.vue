<template>
	<div class="myCol">
		<h2>
			<img src="../../../assets/img/icon_fh.png" @click="my()"/>
			<span>我的收藏</span>
		</h2>
		<ul class="wu-nav">
			<li v-for="(item,index) in navs" @click="handleClick(index)" >
				<router-link to="" :class="activeIndex==index?'active':''" >{{item.tit}}</router-link>
			</li>
		</ul>
	
		<collectionArticle-com v-show="flag" />
		<collectionFoods-com  v-show="!flag" /> 
		<router-view />
	</div>
</template>

<script>

	import collectionArticle from "@/components/my/collection/collectionArticle";
	import collectionFoods from "@/components/my/collection/collectionFoods";
	
	export default{
		components:{
		
			"collectionArticle-com":collectionArticle,
			"collectionFoods-com":collectionFoods
		},
		
		methods:{
			my(){
				this.$router.push({path:"/my"})
			},
			handleClick(index){
				this.flag = !this.flag
				this.activeIndex = index;
			}
		},
		data(){
			return {
				flag: true,
				navs:[
					{
						tit:"文章",
						name:"collectionArticle"
					},
					{
						tit:"食物",
						name:"collectionFoods"
					}
					
				],
				activeIndex:0
				
			}
		}
		
		
	}
</script>

<style>
	.myCol{
		width:7.5rem;
		hieght:13.34rem;
		font-family: "微软雅黑";
	}
	.myCol h2{
		margin-top: .4rem;
		width:7.5rem;
		height:0.88rem;
		border-bottom:1px solid #cccccc;
		position:relative;
	}
	.myCol h2 img{
		display:inline-block;
		width:0.38rem;
		height:0.38rem;
		position:relative;
		left:0.32rem;
		top:0.1rem;
	}
	.myCol h2 span{
		 position:absolute;
		 font-size: .34rem;
		 left:3rem;
		 top:0.1rem;
	}
	.wu-nav{
		width:7.5rem;
		height:0.8rem;
		border-bottom:1px solid #cccccc;
		display: flex;
		justify-content: space-between;
		line-height: .8rem;
	}
	.wu-nav>li{
		width: 50%;
		text-align: center;
	}
	.wu-nav li a{
		display:inline-block;
		width: 100%;
		height:100%;
		font-size:0.28rem;
		font-weight: bold;
	}
	.wu-nav>li>.active{
		border-bottom: red solid 5px;
	}
	
</style>
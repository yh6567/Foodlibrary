<template>
	<div class="collectionArticle">
		<ul class="wu-banner">
			<li v-for="(item,index) in collectionArticles">
				<p>{{item.title}}</p>
				<img src="../../../assets/img/icon-rili-5.png"/>
			</li>
		</ul>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				telphone:"",
				//收藏的文章题目列表
				collectionArticles:[]
			};
		},
		created(){
			this.telphone = JSON.parse( localStorage.getItem("user") ).telphone;
			//请求数据，显示收藏文章列表
			this.$axios({
				method:"post",
				url:"/mo/mock/5c356fc6879a3554aca75b8b/api/collection_article",
				data:{
					telphone:this.telphone
				}
			}).then((res)=>{
				//有收藏的文章
				if(res.data.flag==1){
					this.collectionArticles = res.data.result;
				}else{
					//该用户没有收藏的文章
					
				}
			})
		}
	}
</script>

<style>
 .collectionArticle{
	 width:7.5rem;
	 height:13.34rem;
 }
 .wu-banner{
 	width:100%;
 	height: auto;
 	
 }
 .wu-banner li{
	width: 100%;
	height:0.92rem;
 	font-size:0.26rem;
 	font-weight:bold;
	line-height: .92rem;
	border-bottom:1px solid #cccccc;
 }
 .wu-banner>li>p{
	 float: left;
	 margin-left: .32rem;
 }
 .wu-banner>li>img{
 	display:inline-block;
 	width:0.28rem;
 	height:0.32rem;
	float: right ;
	margin-right: .32rem;
	margin-top: .32rem;
 }
</style>

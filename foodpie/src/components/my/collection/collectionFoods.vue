<template>
	<div class="collectionFoods">
		<ul class="wu-foods">
			<li v-for="(item,index) in collectionFoods">
				<img :src="item.foodimg"/>
				<p class="foods">
					<em>{{item.foodname}}</em>
					<i><span>112</span>千卡/100克</i>
				</p>
				
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				collectionFoods:[]	
			}
		},
		created(){
			this.telphone = JSON.parse( localStorage.getItem("user") ).telphone;
			//请求数据，显示收藏文章列表
			this.$axios({
				method:"post",
				url:"/api/collection_article?kind=1",
				data:{
					telphone:this.telphone
				}
			}).then((res)=>{
				console.log(res)
				//有收藏的文章
				if(res.flag==1){
					this.collectionFoods = res.list;
				}else{
					//该用户没有收藏的文章
					
				}
			})
		}
	}
</script>

<style lang="scss">
	.collectionFoods{
		width: 100%;
		height: auto;
		.wu-foods{
			width: 100%;
			height: auto;
			li{
				width: 100%;
				height: 1.1rem;
				padding: .1rem 0;
				display: flex;
				align-items: center;
				border-bottom: 1px solid rgba(240,240,240,1);
				img{
					width: .8rem;
					height: .8rem;
					float: left;
					margin: 0 .32rem;
				}
				.foods{
					em{
						display: block;
						font-style: normal;
						margin-bottom: .19rem;
					}
					i{
						font-style: normal;
					}
				}
			}
		}
	}
</style>

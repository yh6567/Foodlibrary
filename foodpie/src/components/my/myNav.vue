<template>
	<div>
		<ul class="my_nav">
			<li v-for="(item,index) in myNavs">
				<router-link :to="{name:item.name}">
					<!--<img :src="item.src"/>-->
					<h4>{{item.tit}}</h4>
					<img src="../../assets/img/wd_icon_jt@2x.png" />
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	
	export default {
		data(){
			return{
				myNavs:[
					{
						src:"../../assets/image/wd_icon_zp@2x.png",
						tit:"我的照片",
						name:"myPic"
					},
					{
						src:"../../assets/img/wd_icon_sc@2x(1).png",
						tit:"我的收藏",
						name:"myCollection"
					},
					{
						src:"../../assets/img/wd_icon_sc@2x(1).png",
						tit:"上传食物数据",
						name:"myUpload"
					},
					{
						src:"../../assets/img/wd_icon_db@2x.png",
						tit:"对比库",
						name:"myCompare"
					}
				]
			}
		}
	}
	
</script>

<style>
	.my_nav{
		width: 100%;
		height: 5.03rem;
		background:rgba(255,255,255,1);
		padding: 0 .27rem;
	}
	.my_nav>li{
		height: 1.25rem;
		border-bottom: 1px solid #ccc;
	}
</style>
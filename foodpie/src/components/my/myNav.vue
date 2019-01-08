<template>
	<div>
		<ul class="my_nav">
			<li v-for="(item,index) in myNavs">
				<router-link :to="{name:item.name}">
					<img :src="item.src"/>
					<h4>{{item.tit}}</h4>
					<p><img src="../../assets/img/wd_icon_jt.png" /></p>
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
						src:require("../../assets/img/wd_icon_zp.png"),
						tit:"我的照片",
						name:"myPic"
					},
					{
						src:require("../../assets/img/wd_icon_sc.png"),
						tit:"我的收藏",
						name:"myCollection"
					},
					{
						src:require("../../assets/img/wd_icon_sc(1).png"),
						tit:"上传食物数据",
						name:"myUpload"
					},
					{
						src:require("../../assets/img/wd_icon_db.png"),
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
		padding: 0 .32rem;
	}
	.my_nav>li{
		height: 1.25rem;
		border-bottom: 1px solid #ccc;
		line-height: 1.25rem;
	}
	.my_nav>li>a{
		display: block;
		width: 100%;
		height: 100%;
	}
	.my_nav>li>a>img{
		margin-top: .41rem;
		float: left;
	}
	.my_nav>li>a>h4{
		font-size:.26rem;
		font-family:PingFang-SC-Regular;
		font-weight: normal;
		color:rgba(17,17,17,1);
		float: left;
		margin-left: .2rem;
	}
	.my_nav>li>a>p{
		margin-top: .45rem;
		float: right;
	}
</style>
<template>
	<div class="myCol">
		<h2>
			<img src="../../assets/img/icon_fh.png"/>
			<span>我的收藏</span>
		</h2>
		<ul class="wu-nav">
			<li class="one"><a href="#">文章</a></li>
			<li class="two"><a href="#">食物</a></li>
		</ul>
		<ul class="wu-banner">
			<li>节食再暴食、控制不住狂吃？7步带你走出怪圈</li>
			<img src="../../assets/img/icon-rili-5.png"/>
		</ul>
		<ul class="wu-banner">
			<li>西班牙海鲜沙拉|你们想要的瘦身沙拉</li>
			<img src="../../assets/img/icon-rili-5.png"/>
		</ul>
		<ul class="wu-banner">
			<li>各类海鲜蛋白质含量排行榜</li>
			<img src="../../assets/img/icon-rili-5.png"/>
		</ul>
		<ul class="wu-banner">
			<li>晒早餐|在快节奏的深圳，这个姑娘每天用鲜花...</li>
			<img src="../../assets/img/icon-rili-5.png"/>
		</ul>
	</div>
</template>

<script>
</script>

<style>
	.myCol{
		width:7.5rem;
		hieght:13.34rem;
	}
	.myCol h2{
		width:7.5rem;
		height:0.68rem;
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
		 left:3rem;
		 top:0.1rem;
	}
	.wu-nav{
		width:7.5rem;
		height:0.8rem;
		border-bottom:1px solid #cccccc;
		position:relative;
	}
	.wu-nav li{
		float:left;
	}
	.wu-nav li a{
		font-size:0.28rem;
	}
	.wu-nav .one{
		width:3.74rem;
		height:0.8rem;
		border-bottom:2px solid red;
	}
	.wu-nav .one a{
		color:red;
		position:absolute;
		left:1.64rem;
		top:0.3rem;
		font-weight:bold;
	}
	.wu-nav .two a{
		position:absolute;
		top:0.3rem;
		right:1.62rem;
		font-weight:bold;
	}
	.wu-banner{
		width:7.5rem;
		height:0.92rem;
		border-bottom:1px solid #cccccc;
		position:relative;
	}
	.wu-banner li{
		font-size:0.26rem;
		position:absolute;
		left:0.32rem;
		top:0.38rem;
		font-weight:bold;
	}
	.wu-banner img{
		display:inline-block;
		width:0.28rem;
		height:0.32rem;
		position:absolute;
		top:0.38rem;
		right:0.32rem;
	}
</style>
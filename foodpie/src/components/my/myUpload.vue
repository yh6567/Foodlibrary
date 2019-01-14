<template>
	<div class="myUpload">
		<h2>
			<span>上传食物数据</span>
			<img src="../../assets/img/icon_fh.png"/>
		</h2>
		<ul class="wu-main">
			<li>我上传的食物</li>
			 <span>0</span>
			 <img src="../../assets/img/wd_icon_jt.png"/>
		</ul>
		<ul class="wu-main">
			<li>草稿箱</li>
			 <span>1</span>
			 <img src="../../assets/img/wd_icon_jt.png"/>
		</ul>
		<div class="wu-box">
			<p>我上传的食物</p>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.myUpload{
		width:7.5rem;
		height:13.34rem;
	}
	.myUpload h2{
		width:7.5rem;
		height:0.72rem;
		border-bottom:1px solid #cccccc;
		position:relative;
	}
	.myUpload h2 img{
		display:inline-block;
		width:0.34rem;
		height:0.4rem;
		position:absolute;
		left:0.32rem;
		top:0.2rem;
	}
	.myUpload h2 span{
		 position:absolute;
		 left:3.04rem;
		 top:0.2rem;
	}
	.wu-main{
		width:7.5rem;
		height:0.9rem;
		border-bottom:1px solid #cccccc;
		position:relative;
	}
	.wu-main li{
		font-size:0.32rem;
		position:absolute;
		top:0.28rem;
		left:0.32rem;
		font-weight:bold;
	}
	.wu-main span{
		position:absolute;
		font-size:0.4rem;
		top:0.2rem;
		right:0.75rem;
		font-weight:bold;
	}
	.wu-main img{
		width:0.22rem;
		height:0.34rem;
		position:absolute;
		top:0.28rem;
		right:0.32rem;
	}
	.wu-box{
		width:6.86rem;
		height:0.8rem;
		background:#eb8b4e;
		position:absolute;
		left:0.32rem;
		right:0.32rem;
		margin-top:0.18rem;
		}
		.wu-box p{
			color:white;
			font-size:0.32rem;
			text-align:center;
			line-height:0.8rem;
		}
</style>
<template>
	<div class="myPic">
		<h2>
			<span>我的照片</span>
	        <img src="../../assets/img/icon_fh.png"/>
		</h2>
		<div class="wu-box">
		<div class="wu-matter">
			<img src="../../assets/img/wd_tx_3@2x(1).png"/>
			<p>.一起吃喝</p>
		    <span>3天前更新</span>
		</div>
		<div class="wu-content">
		<ul>
			<img src="../../assets/img/gc_tp_1.png"/>
			<li>营养早餐，吃出美丽，吃出健康</li>
			<p>2018/12/26</p>
			<span>美式炒蛋</span>
		</ul>
		</div>
		<div class="wu-matter">
			<img src="../../assets/img/wd_tx_3@2x(1).png"/>
			<p>.一起吃喝</p>
		    <span>3天前更新</span>
		</div>
		<div class="wu-content">
		<ul>
			<img src="../../assets/img/gc_tp_1.png"/>
			<li>营养早餐，吃出美丽，吃出健康</li>
			<p>2018/12/26</p>
			<span>美式炒蛋</span>
		</ul>
		</div>
	</div>
</div>
</template>

<script>
</script>

<style>
	.myPic{
		width:7.5rem;
		height:13.34rem;
	}
	.myPic h2{
		width:7.5rem;
		height:0.62rem;
		border-bottom:1px solid #cccccc;
		position:relative;
	}
	.myPic h2 img{
		width:0.4rem;
		height:0.34rem;
		position:absolute;
		left:0.32rem;
		top:0.1rem;
	}
	.myPic h2 span{
		 position:absolute;
		 left:3.02rem;
		 top:0.1rem;
	}
	.wu-box{
		width:7.5rem;
		height:13.34rem;
		overflow:auto;
	}
	.wu-matter{
		width:7.5rem;
		height:1.2rem;
		border-bottom:1px solid #cccccc;
		position:relative;
	}
	.wu-matter img{
		display:inline-block;
		width:0.78rem;
		height:0.82rem;
		position:absolute;
		left:0.32rem;
		top:0.2rem;
	}
	.wu-matter p{
		float:left;
		font-size:0.28rem;
		position:absolute;
		left:1.38rem;
		top:0.4rem;
		font-weight:bold;
	}
	.wu-matter span{
		position:absolute;
		left:1.4rem;
		top:0.8rem;
	}
	.wu-content{
		width:7.5rem;
		height:7.88rem;
		position:relative;
	}
	.wu-content ul{
		width:7.5rem;
		height:7.16rem;
		border-bottom:1px solid #cccccc; 
	}
	.wu-content ul img{
		width:7.5rem;
		height:6.14rem;
	}
	.wu-content ul li{
		font-size:0.24rem;
		position:absolute;
		right:0.32rem;
		top:6.3rem;
		font-weight:bold;
	}
	.wu-content ul p{
		position:absolute;
		left:0.32rem;
		top:6.78rem;
	}
	.wu-content ul span{
		position:absolute;
		right:0.32rem;
		top:7.28rem;
		color:#cccccc;
	}
</style>
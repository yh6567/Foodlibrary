<template>
	<div class="my_top">
		 <h2 class="username">我的</h2>
		<div class="user_hpic"><img src="../../assets/img/gc_sy-tx-1@3x.png" /></div>
		<router-link class="login_click" :to="{name:'login'}" >点击登录</router-link>
	</div>
</template>

<script>
	export default{
		methods:{
			
		}
	}
</script>

<style>
	.my_top{
		height: 4.5rem;
		background: #EB8B4E;
		text-align: center;
	}
	.my_top>.username{
		height: 1.12rem;
		line-height: 1.12rem;
		font-size: .32rem;
		color: #F8F3F0;
		font-weight: normal;
		letter-spacing: .08rem;
	}
	.my_top>.user_hpic{
		margin: 0 2.92rem;
		width: 1.66rem;
		height: 1.66rem;
	}
	.my_top>.user_hpic>img{
		width: 100%;
		height: 100%;
	}
	
	.my_top>.login_click{
		display: block;
		width: 1.18rem;
		height: .47rem;
		line-height: .47rem;
		border:1px solid rgba(243,213,174,1);
		border-radius:4px;
		margin-left: 3.2rem;
		margin-top: .25rem;
		font-size:.24rem;
		color:rgba(255,247,241,1);
	}
</style>
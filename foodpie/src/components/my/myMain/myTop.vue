<template>
	<div class="my_top">
		 <h2 class="username">我的</h2>
		<div class="user_hpic"><img src="../../../assets/img/wd_dl_tx@2x.png" /></div>
		<p v-show="myUsername">{{username}}</p>
		<router-link class="login_click" @click="loginClick()"
			:to="{name:loginTit=='点击登录'?'login':'updateMsg'}" 
		>{{loginTit}}</router-link>
	</div>
	
</template>

<script>
	export default{
		data(){
			return {
				username:"西元前的爱",
				loginTit:"修改个人资料",
				myUsername:true
			}
		},
		created(){
			
		},
		methods:{
			/*uptClick(){
				this.$bus.$emit("handleUpt",this.loginTit)
				console.log(1)
			}*/
		}
	}
</script>

<style>
	.my_top{
		height: 4.5rem;
		background: #EB8B4E;
		/*text-align: center;*/
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.my_top>p{
		margin-top: .2rem;
		color: #F8F3F0;
		font-size: .24rem;
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
		width: 1.66rem;
		height: 1.66rem;
	}
	.my_top>.user_hpic>img{
		width: 100%;
		height: 100%;
	}
	
	.my_top>.login_click{
		border:1px solid rgba(243,213,174,1);
		border-radius:4px;
		margin-top: .25rem;
		font-size:.24rem;
		color:rgba(255,247,241,1);
		padding: .05rem .08rem;
	}
</style>
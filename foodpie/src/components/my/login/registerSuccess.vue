<template>
	<div class="registerS">
		<p class="registerBack" slot ="top" @click="back()">
    		<img src="../../../assets/img/icon-rili-1@2x.png" />
    		<mt-header class="registerSTop" >
				<router-link to="/register" slot="left">
		    		<mt-button>返回</mt-button>
		 		</router-link>
			</mt-header>
		</p>
		
		<div class="regSMain">
			<img src="../../../assets/img/icon_zccg@2x.png" />
			<p>注册成功</p>
			<input type="button" value="直接登录" @click="login()" />
		</div>
	</div>
</template>

<script>
	import { Header } from 'mint-ui';
	export default{
		data(){
			return {
				flag :"",
			}
		},
		methods:{
			back(){
				this.$router.back();
			},
			
			login(){
				this.$router.push({path:"/login"})
			}
		}
	}
</script>

<style>
	.registerS{
		width: 100%;
		height: 100%;
		background: #f7f7f7;
		position: absolute;
		left: 0;
		top: 0;
		font-family:PingFang-SC-Regular;
	}
	.registerSTop{
		height: .88rem;
		margin-top: .38rem;
		border-bottom:.02rem solid rgba(214,214,214,1);
		background: #f7f7f7;
		font-size: .34rem;
		color: #000;
		padding-left: .88rem;
	}
	.registerBack{
		position: relative;
	}
	.registerBack>img{
		position: absolute;
		z-index: 1;
		left: .32rem;
		top: .28rem;
		width:.34rem;
		height:.32rem;
	}
	.regSMain{
		margin-top: 2.74rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size:.28rem;
	}
	.regSMain>img{
		width: 1.18rem;
		height: 1.18rem;
		margin-bottom: .15rem;
	}
	.regSMain>p{
		color:rgba(0,17,17,1);
	}
	.regSMain>input{
		margin-top: .5rem;
		width:6.86rem;
		height:.88rem;
		border: none;
		background:rgba(235,139,78,1);
		border-radius:.04rem;
		color:rgba(255,255,255,1);
		font-size:.28rem;
	}
	
</style>
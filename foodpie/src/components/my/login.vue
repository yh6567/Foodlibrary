<template>
	<div class="myLogin">
		<div class="loginTop">
			<img src="../../assets/img/icon-rili-1.png" />
			<p>登录</p>
		</div>
		<div class="loginInput">
			<input type="text" placeholder="手机" />
			<input type="password" placeholder="密码" />
			<div class="forgetPwd">
				<router-link :to="{name:'forgetPwd'}">忘记密码？</router-link>
			</div>
			<div class="loginClick">
				<router-link :to="{name:'login'}">登录</router-link>
			</div>
			<div class="register">
				<router-link :to="{name:'register'}">立即注册</router-link>
			</div>
		</div>
		<div class="otherLogin">
			<h4>使用合作账号登录</h4>
			<li>
				<img />
			</li>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				loginNavs:[
					{
						src:""
					},
					{
						src:""
					},
					{
						src:""
					},
				]
			}
		},
		created(){
			console.log(router.path)
		}
	}
</script>

<style>
	.myLogin{
		width: 100%;
		height: 100%;
		/*padding: 0 .32rem;*/
		font-family:PingFang-SC-Regular;
		font-size: .26rem;
	}
	.loginTop{
		width: 100%;
		height: 1.29rem;
		border-bottom: .01rem solid #ccc;
		background: pink;
		overflow: hidden;
	}
	.loginTop>img{
		margin-top: .71rem;
		margin-left: .32rem;
	}
	.loginTop>p{
		position: absolute;
		left: 3.49rem;
		top: .71rem;
		font-size: .34rem;
		color: rgba(17,17,17,1);
		
	}
	.loginInput{
		padding-left: .32rem;
	}
	.loginInput>input{
		width:6.86rem;
		height:.88rem;
		background:rgba(255,255,255,1);
		border:.02rem solid rgba(240,240,240,1);
		margin-top: .4rem;
	}
	.loginInput>input:nth-child(1){
		margin-top: .8rem;
	}
	.loginInput>.forgetPwd{
		position: absolute;
		right: .34rem;
		top: 3.63rem;
	}
	.loginInput>.loginClick{
		width:6.86rem;
		height:.88rem;
		background:rgba(235,139,78,1);
		border:2px solid rgba(214,214,214,1);
		text-align: center;
		line-height: .88rem;
		margin-top: .4rem;
	}
	.loginInput>.loginClick>a{
		color: #fff;
	}
	.loginInput>.register{
		width:6.86rem;
		height:.88rem;
		line-height: .88rem;
		text-align: center;
		color: #A09F9F;
		
	}
	.loginInput>.register>a{
	}
</style>
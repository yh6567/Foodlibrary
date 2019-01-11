<template>
	<div class="myLogin">
		<div class="loginTop">
			<img @click="loginBack()" src="../../../assets/img/icon-rili-1@2x.png" />
			<p>登录</p>
		</div>
		<div class="loginInput">
			<input type="text" placeholder="手机" v-model="telphone" /><br />
			<!-- <span>手机号</span> -->
			<input type="password" placeholder="密码" v-model="password" />
			<div class="forgetPwd">
				<router-link :to="{name:'forgetPwd'}">忘记密码？</router-link>
			</div>
			<div class="loginClick" @click="login()">
				<router-link to="">登录</router-link>
			</div>
			<div class="register">
				<router-link :to="{name:'register'}">立即注册</router-link>
			</div>
		</div>
		<div class="otherLogin">
			<h4>使用合作账号登录</h4>
			<ul>
				<li v-for="(item,index) in loginNavs">
					<router-link :to="item.name">
						<img :src="item.src" />
					</router-link>
				</li>
			</ul>

		</div>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	export default {
		data() {
			return {
				loginNavs: [{
						name: "wechat",
						src: require("../../../assets/img/dl_icon_wx@2x.png")
					},
					{
						name: "qq",
						src: require("../../../assets/img/dl_icon_qq@2x.png")
					},
					{
						name: "weibo",
						src: require("../../../assets/img/dl_icon_wb@2x.png")
					}
				],
				telphone: "",
				password: "",
			}
		},
		methods: {
			loginBack() {
				this.$router.back();
			},
			//点击登录请求数据
			login() {
				this.$axios({
					method: "get",
					url: "http://localhost:3000/login_check?tel=" + this.telphone,
				}).then((res) => {
					//已经注册验证用户名密码是否一致
					if(res.length != 0) { 
						if(res[0].tel == this.telphone && res[0].password == this.password) {
							//登录成功，跳转到my页面，并把手机号带过去
							localStorage.setItem("user", JSON.stringify(res))
							this.$router.push({
								path: "/my"
							});
						} else {
							alert("手机号或密码错误")
						}
					} else { 
						//该手机号未注册，请点击立即注册
						alert("该手机号未注册")
					}
				})

			},
		}

	}
</script>

<style scoped>
	.myLogin {
		width: 100%;
		height: 13.34rem;
		font-family: PingFang-SC-Regular;
		font-size: .26rem;
		background: #f7f7f7;
	}
	
	.loginTop {
		width: 100%;
		height: 1.29rem;
		border-bottom: .01rem solid rgba(214, 214, 214, 1);
		overflow: hidden;
	}
	
	.loginTop>img {
		width: .34rem;
		height: .32rem;
		margin-top: .71rem;
		margin-left: .32rem;
	}
	
	.loginTop>p {
		position: absolute;
		left: 3.49rem;
		top: .69rem;
		font-size: .34rem;
		color: rgba(17, 17, 17, 1);
	}
	
	.loginInput {
		padding-left: .32rem;
	}
	
	.loginInput>input {
		width: 6.86rem;
		height: .88rem;
		font-size: .26rem;
		background: rgba(255, 255, 255, 1);
		border: .02rem solid rgba(240, 240, 240, 1);
		margin-top: .4rem;
	}
	
	.loginInput>input:nth-child(1) {
		margin-top: .8rem;
	}
	
	.loginInput>.forgetPwd {
		position: absolute;
		right: .34rem;
		top: 3.63rem;
	}
	
	.loginInput>.loginClick {
		width: 6.86rem;
		height: .88rem;
		background: rgba(235, 139, 78, 1);
		border: 2px solid rgba(214, 214, 214, 1);
		text-align: center;
		line-height: .88rem;
		margin-top: .4rem;
	}
	
	.loginInput>.loginClick>a {
		color: #fff;
	}
	
	.loginInput>.register {
		width: 6.86rem;
		height: .88rem;
		line-height: .88rem;
		text-align: center;
		color: #A09F9F;
	}
	
	.otherLogin {
		width: 100%;
		height: 2.32rem;
		margin-top: 4.5rem;
	}
	
	.otherLogin>h4 {
		width: 100%;
		text-align: center;
		font-size: .26rem;
		font-family: PingFang-SC-Regular;
		font-weight: normal;
		color: rgba(17, 17, 17, 1);
		margin-bottom: .4rem;
	}
	
	.otherLogin>ul {
		width: 100%;
		display: flex;
		padding: 0 1.65rem;
		justify-content: space-between;
	}
	.otherLogin>ul img{
		width: .84rem;
		height: .84rem;
	}
</style>
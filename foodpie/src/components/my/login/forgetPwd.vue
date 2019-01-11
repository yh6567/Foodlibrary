<template>
	<div class="forgetPwd">
		<div class="forgetTop" @click="loginBack()">
			<img src="../../../assets/img/icon-rili-1@2x.png" />
			<span>返回</span>
			<p>忘记密码</p>
		</div>
		<div class="forgetMain">
			<label>
				<input type="text" placeholder="请输入手机号码" />
			</label>
			<label>
				<input class="ipt1" type="text" placeholder="请输入手机验证码" />
				<input class="ipt2" type="button" v-model="vcodeIpt" />
			</label>
			<label>
				<input type="password" placeholder="请输入新密码" />
			</label>
			<label>
				<input type="password" placeholder="请确认新密码" />
			</label>

			<input class="forgetBtn" type="button" value="提交" />
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				vcodeIpt: "发送验证码"
			}
		},
		methods:{
			//返回上一页面
			loginBack(){
				this.$router.back()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.forgetPwd {
		width: 7.5rem;
		height: 13.34rem;
		background: #F7F7F7;
		overflow: hidden;
		font-family: "微软雅黑";
		.forgetTop {
			margin-top: .38rem;
			width: 100%;
			height: .88rem;
			line-height: .88rem;
			border-bottom: .02rem solid rgba(214, 214, 214, 1);
			font-size: .34rem;
			color: rgba(17, 17, 17, 1);
			img {
				display: inline-block;
				margin-left: .32rem;
				width: .34rem;
				height: .32rem;
			}
			span{
				font-size: .34rem;
			}
			p {
				display: inline-block;
				margin-left: 1.63rem;
			}
		}
		.forgetMain {
			width: 100%;
			height: auto;
			padding: 0 .32rem;
			margin-top: .69rem;
			label {
				display: block;
				width: 6.86rem;
				height: 1.3rem;
				font-size: .26rem;
				color: rgba(160, 159, 159, 1);
				input {
					width: 100%;
					height: .88rem;
					background: rgba(255, 255, 255, 1);
					border: .02rem solid rgba(214, 214, 214, 1);
					font-size: .26rem;
					color: #000;
				}
				.ipt1 {
					width: 4.35rem;
					display: block;
					float: left;
				}
				.ipt2 {
					width: 2.1rem;
					height: .88rem;
					float: right;
					background: rgba(235, 139, 78, 1);
					border: none;
					border-radius: .04rem;
					font-size: .28rem;
					color: rgba(255, 255, 255, 1);
					;
				}
			}
			.forgetBtn {
				width: 6.86rem;
				height: .88rem;
				margin-top: .92rem;
				border: none;
				background: rgba(235, 139, 78, 1);
				border-radius: .04rem;
				font-size: .28rem;
				color: rgba(255, 255, 255, 1);
			}
		}
	}
</style>
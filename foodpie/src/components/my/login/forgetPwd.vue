<template>
	<div class="forgetPwd">
		<div class="forgetTop" @click="loginBack()">
			<img src="../../../assets/img/icon-rili-1@2x.png" />
			<span>返回</span>
			<p>忘记密码</p>
		</div>
		<div class="forgetMain">
			<label>
				<input type="text" placeholder="请输入手机号码" v-model="telphone" />
			</label>
			<label>
				<input class="ipt1" type="text" placeholder="请输入手机验证码" v-model="vcode" />
				<div class="sendVcode" @click="send()">
        			<span v-show="!flag">{{second}}s后重新发送</span>
        			<p v-show="flag">{{sendVcode}}</p>
        		</div>
			</label>
			<label>
				<input type="password" placeholder="请输入新密码" v-model="password" />
			</label>
			<label>
				<input type="password" placeholder="请确认新密码" v-model="qpwd" />
			</label>

			<input class="forgetBtn" type="button" value="提交" @click="updatePwd()" />
		</div>
	</div>
</template>

<script>
	import {Toast} from "mint-ui";
	export default {
		data() {
			return {
				//发送框里显示的内容     发送验证码  或    60s后重
				sendVcode: "发送验证码",
				//倒计时的秒数
				second: 60,
				//发送验证码的倒计时显示否
				flag: true,
				telphone:"",
				vcode:"",
				password:"",
				qpwd:"",
				flagTel:null
			}
		},
		methods:{
			//返回上一页面
			loginBack(){
				this.$router.back()
			},
			//点击发送验证码函数
			send() {
				let reg = /^1[34578]\d{9}$/;
				if(!reg.test(this.telphone)) {
					Toast({
						message: '手机号码格式错误',
						position: 'middle',
						duration: 3000
					});
				} else {
					//发送验证码接口,发送手机号，得到验证码----倒计时
					if(this.flag) {
						//忘记密码的发送验证码接口，传送telphone，不返回
						this.$axios({
							method:"post",
							url:"/mo/mock/5c356fc6879a3554aca75b8b/api/sendVcode#!method=POST&queryParameters=%5B%5D&body=&headers=%5B%5D",
							data:{
								telphone:this.telphone
							}
						}).then((res)=>{
							//已经注册，可以继续
							if(res.flag==1){
								this.flag = false;
								let interval = setInterval(() => {
									//把second存储在本地
									if(this.second-- <= 0) {
										this.second = 60;
										this.flag = true;
										clearInterval(interval);
									}
								}, 1000)
							//没有注册，滚去注册
							}else if(res.flag ==0){
								Toast({
									message: '该手机号还未注册 ，请先去注册',
									position: 'middle',
									duration: 3000
								});
							//服务器繁忙，一会的
							}else if(res.flag == 3){
								Toast({
									message: '服务器繁忙，请重试',
									position: 'middle',
									duration: 3000
								});
							}
							
						})
						
					}
					
				}	
			},
			//修改密码的提交
			updatePwd(){
				let reg = /[A-Za-z0-9\.]{6,16}/;
				if(reg.test(this.password)){
					if(this.password == this.qpwd){
						//手机号和 新密码发送给后端
						this.$axios({
							method:"post",
							url:"/mo/mock/5c356fc6879a3554aca75b8b/api/forget_password#!method=POST&queryParameters=%5B%5D&body=&headers=%5B%5D",
							data:{
								telphone:this.telphone,
								password:this.password,
								vcode:this.vcode
							}
						}).then((res)=>{
							//返回数据，判断是否修改成功
							//修改成功跳转登陆，
							if(res.flag == 1){
								this.$router.push({path:"/login"});
							}else if(res.flag==0){
								//否则提示修改失败,请重试
								alert("服务器繁忙，请重试");
							}
						})
					}else{
						Toast({
							message: '两次密码输入不一致',
							position: 'middle',
							duration: 3000
						});
					}
				}else{
					Toast({
						message: '密码必须在6-16位之间',
						position: 'middle',
						duration: 3000
					});
				}
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
				.sendVcode {
					width: 2.1rem;
					height: .88rem;
					float: right;
					background: rgba(235, 139, 78, 1);
					border: none;
					border-radius: .04rem;
					font-size: .28rem;
					color: rgba(255, 255, 255, 1);
					text-align: center;
					line-height: .88rem;
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
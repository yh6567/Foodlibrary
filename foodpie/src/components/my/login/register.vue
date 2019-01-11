<template>
	<div class="register">
		<div class="registerTop" @click="loginBack()">
			<img src="../../../assets/img/icon-rili-1@2x.png" />
			<span>返回</span>
			<p>免费注册</p>
		</div>
		<div class="form">
			<label class="tel">
        		<input type="text" placeholder="请输入手机号码"
        			 v-model="telphone" />
        		<div class="sendVcode" @click="send()">
        			<span v-show="!flag">{{second}}s后重新发送</span>
        			<p v-show="flag">{{sendVcode}}</p>
        		</div>
        		<span></span>
        	</label>

			<label>
        		<input type="text" placeholder="请输入验证码" v-model="vcode" />
        	</label>

			<label>
        		<input type="password" placeholder="请输入密码"  v-model="password" />
        	</label>

			<label>
        		<input type="password" placeholder="请确认密码" v-model="qpwd" />
        	</label>
			<p>
				<input type="checkbox" :checked="flagCheck" @click="checkboxClick()" />
				<span>我已同意并阅读&lt;&lt;食物派&gt;&gt;用户协议</span>
			</p>
			<input type="button" value="注册" @click="loginClick()" />
		</div>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	export default {
		data() {
			return {
				//发送框里显示的内容     发送验证码  或    60s后重
				sendVcode: "发送验证码",
				//倒计时的秒数
				second: 60,
				//发送验证码的倒计时显示否
				flag: true,

				telphone: "", //用户名
				vcode: "", //验证码
				password: "", //密码
				qpwd: "", //确认密码
				//是否点击我同意
				flagCheck: false,
				timer: null

			}
		},
		mounted() {
			this.$judgecode.judgecode(this.flag,this.second,this.timer);
		},
		methods: {
			//返回
			loginBack() {
				this.$router.back();
			},
			//协议点击函数
			checkboxClick() {
				this.flagCheck = !this.flagCheck;
			},
			//点击发送验证码函数
			send() {
				let reg = /^1[34578]\d{9}$/;
				if(!reg.test(this.telphone)) {
					Toast({
						message: '手机号码格式错误',
						position: 'top',
						duration: 3000,
						className: "telEffor"
					});
				} else {
					//发送验证码接口----倒计时
					if(this.flag) {
						this.flag = false;
						let interval = setInterval(() => {
							//把second存储在本地
							this.setStorage(this.second);
							if(this.second-- <= 0) {
								this.second = 60;
								this.flag = true;
								clearInterval(interval);
							}
						}, 1000)
					}
					console.log(this.second)
				}
			},
			//存储本地数据
			setStorage(parm) {
				localStorage.setItem("delay", parm);
				//存储当前时间是多少秒
				localStorage.setItem("_time", new Date().getTime());
			},
			getStorage() {
				let localDelay = {};
				localDelay.delay = localStorage.getItem("delay");
				localDelay.sec = localStorage.getItem("_time");
				return localDelay;
			},
			/*judgeCode() {   
				//获取本地存储的倒计时数据---秒和当前时间秒数
				let localDelay = this.getStorage();  
				//新时间减去旧时间的秒数
				let secTime = parseInt((new Date().getTime() - localDelay.sec) / 1000);        
				console.log(localDelay);
				if(secTime <= 0) {
					this.flag = true;
					console.log("已过期");
				} else {
					this.flag = false;
					//second-已经过去的秒数
					let _delay = localDelay.delay - secTime;
					this.second = _delay;
					this.timer = setInterval(() => {
						if(_delay > 1) {
							_delay--;
							this.setStorage(_delay);
							this.second = _delay;
							this.flag = false;
						} else {
							this.flag = true;
							clearInterval(this.timer);
						}
					}, 1000);
				}
			},
*/
			//点击提交表单
			loginClick() {
				this.$axios({
					method: "get",
					url: "http://localhost:3000/register_check?tel=" + this.telphone,
				}).then((data) => {
					if(data.length != 0) { //已注册
						alert("该用户已注册")
					} else {
						//========验证码如何判断
						let reg = /.{6,16}/;
						if(!reg.test(this.password)) {
							alert("密码必须在6-16位之间");
						} else {
							if(this.password != this.qpwd) {
								alert("两次密码输入不一致");
							} else {
								if(!this.flagCheck) {
									alert("请点击我同意")
								} else {
									//信息传递到后端存储起来
									this.sendMsg();
									//跳转注册成功页面
									this.$router.push({
										path: "/registerSuccess"
									});
								}

							}
						}
					}
				})
			},
			//数据发送 到后端
			sendMsg() {
				this.$axios({
					method: "post",
					url: "http://localhost:3000/register_check",
					data: {
						tel: this.telphone,
						password: this.password,
						vcode: this.vcode
					}
				}).then((res) => {
					//输出的是添加的那条信息
					console.log(res)
				})
			}
		}
	}
</script>

<style>
	/*mint ui弹出框样式*/
	/*1.手机号输入格式有误*/
	
	.telEffor {
		width: 7.5rem;
		height: 1.5rem;
		background: red !important;
		font-size: 89px;
		line-height: 1.5rem;
		color: #000;
	}
	
	.tan {
		width: 7.5rem;
		height: 1.5rem;
		background: #f7f7f7;
	}
	/*mint ui弹出框样式end*/
	
	.register {
		width: 7.5rem;
		height: 13.34rem;
		background: #f7f7f7;
		overflow: hidden;
		font-family: PingFang-SC-Regular;
		font-size: .26rem;
	}
	
	.register>.registerTop {
		margin-top: .38rem;
		width: 100%;
		height: .88rem;
		line-height: .88rem;
		border-bottom: .02rem solid rgba(214, 214, 214, 1);
		border-top: .02rem solid rgba(214, 214, 214, 1);
		font-size: .34rem;
		color: rgba(17, 17, 17, 1);
	}
	
	.register>.registerTop img {
		display: inline-block;
	}
	
	.register>.registerTop>p {
		display: inline-block;
	}
	
	.register>.registerTop>img {
		margin-left: .32rem;
		margin-right: .15rem;
	}
	
	.register>.registerTop>span {}
	
	.register>.registerTop>p {
		margin-left: 1.63rem;
	}
	
	.form {
		width: 100%;
		height: auto;
		padding: 0 .32rem;
		margin-top: .69rem;
	}
	
	.form>label {
		display: block;
		width: 6.86rem;
		height: 1.3rem;
		font-size: .26rem;
		color: rgba(160, 159, 159, 1);
	}
	
	.form>label:nth-child(4) {
		height: 1.2rem;
	}
	
	.form>label>input {
		width: 100%;
		height: .88rem;
		background: rgba(255, 255, 255, 1);
		border: .02rem solid rgba(214, 214, 214, 1);
		font-size: .26rem;
		color: #000;
	}
	/*改变input中placeholder字体颜色*/
	
	input::-webkit-input-placeholder {
		font-size: .26rem;
		color: rgba(160, 159, 159, 1);
	}
	
	.form>.tel>input:nth-child(1) {
		width: 4.74rem;
		display: block;
		float: left;
	}
	
	.form>.tel>.sendVcode {
		width: 2.1rem;
		height: .88rem;
		display: block;
		float: left;
		border-left: 0;
		color: rgba(160, 159, 159, 1);
		background: #FFFFFF;
		border: .02rem solid rgba(214, 214, 214, 1);
		border-left: none;
		line-height: .88rem;
		text-align: center;
		font-size: .26rem;
		color: rgba(160, 159, 159, 1);
	}
	
	.form>.tel>.sendVcode>p {
		display: inline-block;
	}
	
	.form>p>span {
		font-size: .24rem;
		color: rgba(17, 17, 17, 1);
	}
	
	.form>p>input {
		vertical-align: bottom;
		width: .24rem;
		height: .24rem;
		border: .01rem solid rgba(0, 0, 0, 1);
		border-radius: .04rem;
		/*font-size: .6rem;*/
	}
	
	.form>input {
		width: 6.86rem;
		height: .88rem;
		margin-top: .92rem;
		background: rgba(235, 139, 78, 1);
		border-radius: .04rem;
		font-size: .28rem;
		color: rgba(255, 255, 255, 1);
	}
</style>
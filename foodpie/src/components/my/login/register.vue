<template>
    <div class="register">
        <div class="registerTop" @click="loginBack()">
            <img src="../../../assets/img/icon-rili-1@2x.png"/>
         	<span>返回</span>
         	<p>免费注册</p>
        </div>
        
        <div class="form">
        	<label class="tel">
        		<input type="text" placeholder="请输入手机号码"
        			 v-model="username" />
        		<input type="button" value="发送验证码" />
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
//	import vue from "vue";
export default {
    data(){
		return {
			username:"",
			vcode:"",
			password:"",
			qpwd:"",
			flagCheck:false,
			flag:"",
		}
	},
	created(){
		this.$on("backR",(data)=>{
			console.log(data)
		})
	},
  	methods:{
	  	//返回上一页面
	  	loginBack(){
	  		this.$router.back();
	  	},
	  	checkboxClick(){
	  		this.flagCheck = !this.flagCheck;
	  	},
	  	//点击提交表单
	  	loginClick(){
	  		this.$axios({
	  			method:"get",
	  			url:"http://localhost:3000/register",
	  		}).then((data)=>{
	  			//先进行表单验证
	  			this.formYZ();
				//是否点击了我同意
				if(this.flagCheck == true){
					//遍历数组，判断当前输入手机号是否存在
					let len = data.length;
					for(let i = 0 ; i< len ;i ++){
						if(data[i].username==this.username){//用户名已注册
							this.flag = false;
							break;
						}else{
							this.flag = true
						}
					}
					if(this.flag){
						//跳转登录成功页面========？？？？？
						
						console.log(1)
					}else{
						Toast({
						  message: '该手机号已经注册，请直接登录',
						  position: 'top',
						  className:"tan"
						});
					}
				}
	  		})
	  	},
	  	formYZ(){
	  		let name = this.username;
	  		let pwd = this.password;
	  		let qpwd = this.qpwd;
	  		let vcode = this.vcode;
	  		
	  	},
		back(){
			this.flag = false;
			console.log(this.flag)
		}
			
	  	
  	}
}
</script>

<style>
	/*mint ui弹出框样式*/
	.tan{
		width: 7.5rem;
		height: 1.5rem;
		background: #f7f7f7;
	}
    .register{
        width: 7.5rem;
        height: 13.34rem;
        background: #f7f7f7;
        overflow: hidden;
        font-family:PingFang-SC-Regular;
        font-size: .26rem;
    }
    .register>.registerTop{
    	margin-top: .38rem;
    	width: 100%;
    	height: .88rem;
    	line-height: .88rem;
		border-bottom:.02rem solid rgba(214,214,214,1);
		border-top:.02rem solid rgba(214,214,214,1);
		font-size:.34rem;
		color:rgba(17,17,17,1);
    }
    .register>.registerTop img{
    	display: inline-block;
    }
    .register>.registerTop>p{
    	display: inline-block;
    }
    .register>.registerTop>img{
    	margin-left: .32rem;
    	margin-right: .15rem;
    }
    .register>.registerTop>span{
    }
    .register>.registerTop>p{
    	margin-left: 1.63rem;
    }
    .form{
    	width: 100%;
    	height: auto;
    	padding: 0 .32rem;
    	margin-top:.69rem ;
    }
    .form>label{
    	display: block;
    	width:6.86rem;
    	height: 1.3rem;
    	font-size:.26rem;
		color:rgba(160,159,159,1);
    }
    .form>label:nth-child(4){
    	height: 1.2rem;
    }
    .form>label>input{
    	width: 100%;
		height:.88rem;
		background:rgba(255,255,255,1);
		border:.02rem solid rgba(214,214,214,1);
		font-size:.26rem;
		color:#000;
    }
    /*改变input中placeholder字体颜色*/
    input::-webkit-input-placeholder {
	    font-size:.26rem;
		color:rgba(160,159,159,1);
	}
    .form>.tel>input:nth-child(1){
    	width: 4.74rem;
    	display: block;
    	float: left;
    }
    .form>.tel>input:nth-child(2){
    	width: 2.1rem;
    	display: block;
    	float: left;
    	border-left: 0;
    	color:rgba(160,159,159,1);
    }
    .form>p>span{
    	font-size: .24rem;
    	color:rgba(17,17,17,1);
    }
    .form>p>input{
    	vertical-align: bottom;
    	width:.24rem;
		height:.24rem;
		border:.01rem solid rgba(0,0,0,1);
		border-radius:.04rem;
		/*font-size: .6rem;*/
    }
    .form>input{
    	width: 6.86rem;
    	height: .88rem;
    	margin-top: .92rem;
    	background:rgba(235,139,78,1);
		border-radius:.04rem;
		font-size:.28rem;
		color:rgba(255,255,255,1);
    }
    
</style>

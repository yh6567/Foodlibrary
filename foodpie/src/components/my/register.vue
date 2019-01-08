<template>
    <div class="register">
        <div class="registerTop">
            <img src="../../assets/img/icon-rili-1.png"/>
         	<span>返回</span>
         	<p>免费注册</p>
        </div>
        
        <div class="form">
        	<label class="tel">
        		<input type="text" placeholder="请输入手机号码" />
        		<input type="button" value="发送验证码" />
        		<span>请输入正确号码</span>
        	</label>
        	
        	<label>
        		<input type="text" placeholder="请输入验证码" />
        	</label>
        	
        	<label>
        		<input type="password" placeholder="前请输入密码" />
        	</label>
        	
        	<label>
        		<input type="password" placeholder="请确认密码" />
        	</label>
        	<p>
        		<input type="checkbox" />
        		<span>我已同意并阅读&lt;&lt;食物派&gt;&gt;用户协议</span>
        	</p>
        	<input type="button" value="注册" />
        </div>
    </div>
</template>

<script>
export default {
  created(){
  	this.handleGet();
  },
  methods:{
  	handleGet(){
  		this.$axios({
  			url:"/api/mock/5c3465b07db0f179db202936/example/register_check",
  		}).then((data)=>{
  			console.log(1)
  			console.log(data);
  		})
  	}
  }
}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
	}
    .register{
        width: 7.5rem;
        height: 13.34rem;
        background: #f7f7f7;
        overflow: hidden;
        font-family:PingFang-SC-Regular;
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
    }
    .form>p>span{
    	font-size: .24rem;
    	color:rgba(17,17,17,1);
    }
    .form>p>input{
    	vertical-align: bottom;
    }
    .form>input{
    	width: 6.86rem;
    	height: .88rem;
    	margin-top: .92rem;
    	background:rgba(235,139,78,1);
		border-radius:.04rem;
    }
</style>

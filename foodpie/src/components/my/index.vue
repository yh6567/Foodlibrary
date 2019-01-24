<template>
    <div class="my">
    	<div class="my_top">
			<h2 class="username">我的</h2>
			<div class="user_hpic"><img :src="user_hpic" /></div>
			<p v-show="myUsername">{{nickname}}</p>
			<router-link class="login_click" @click="loginClick()"
				:to="{name:loginTit=='点击登录'?'login':'updateMsg'}" 
			>{{loginTit}}</router-link>
		</div>
		<div>
			<ul class="my_nav">
				<li v-for="(item,index) in myNavs">
					<router-link :to="{name:item.name}">
						<img :src="item.src"/>
						<h4>{{item.tit}}</h4>
						<p><img src="../../assets/img/wd_icon_jt.png" /></p>
					</router-link>
				</li>
			</ul>
		</div>
    </div>
</template>

<script>
export default{
	data(){
		return {
			//用户手机号			
			telphone:""	,
			//用户头像
			user_hpic:require('@/assets/img/wd_dl_tx@2x.png'),
			//用户昵称
			nickname:"",
			loginTit:"点击登录",
			//是否登录，登录----显示昵称，否则隐藏
			myUsername:"",
			myNavs:[
				{
					src:require("@/assets/img/wd_icon_zp@2x.png"),
					tit:"我的照片",
					name:"myPic"
				},
				{
					src:require("@/assets/img/wd_icon_sc@2x.png"),
					tit:"我的收藏",
					name:"myCollection"
				},
				{
					src:require("@/assets/img/wd_icon_sc@2x(1).png"),
					tit:"上传食物数据",
					name:"myUpload"
				}
			]
		}
	},
	created(){
		let  userMsg = JSON.parse(localStorage.getItem("user"));
		if(userMsg){
			console.log(userMsg.user_hpic)
			this.myUsername = true;
			this.nickname = userMsg.nickname;
			this.user_hpic = userMsg.user_hpic;
			this.loginTit="修改个人资料";
		}else{
			this.myUsername = false;
		}
	}
}

</script>

<style scoped>
	.my{
		width: 100%;
		height: 100%;
	}
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
		border-radius: 50%;
	}
	
	.my_top>.login_click{
		border:1px solid rgba(243,213,174,1);
		border-radius:4px;
		margin-top: .25rem;
		font-size:.24rem;
		color:rgba(255,247,241,1);
		padding: .05rem .08rem;
	}
	.my_nav{
		width: 100%;
		height: 5.03rem;
		background:rgba(255,255,255,1);
		padding: 0 .32rem;
	}
	.my_nav>li{
		height: 1.25rem;
		border-bottom: 1px solid #ccc;
		line-height: 1.25rem;
	}
	.my_nav>li>a{
		display: block;
		width: 100%;
		height: 100%;
	}
	.my_nav>li>a>img{
		margin-top: .41rem;
		float: left;
		width: .4rem;
		height: .34rem;
	}
	.my_nav>li>a>h4{
		font-size:.26rem;
		font-family:PingFang-SC-Regular;
		font-weight: normal;
		color:rgba(17,17,17,1);
		float: left;
		margin-left: .2rem;
	}
	.my_nav>li>a>p{
		margin-top: .45rem;
		float: right;
	}
</style>

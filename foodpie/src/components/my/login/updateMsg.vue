<template>
	<div class="updateMsg">
		<div class="uptMsgTop" v-show="flagOther">
			<img src="../../../assets/img/icon-rili-1@2x.png" @click="uptback()" />
			<h2>个人资料</h2>
			<p @click="conserve()">保存</p>
		</div>
		<div class="uptImg" v-show="flagOther">
			<img :src="user_hpic" />
			<!--<img src="../../../assets/img/wd_dl_tx@2x.png"/>-->
			
		</div>
		<ul class="uptMain">
			<li v-for="(item,index) in navs" @click="uptClick(index)" v-show="item.flag">
				<p class="upttit">{{item.tit}}</p>
				<p class="uptcon">{{item.con}}</p>
			</li>
		</ul>
		<div class="logoff" v-show="flagOther" @click="logoff()">
			<input type="button" value="退出登录" />
		</div>
		<div class="uptName" v-show="uptNameFlag">
			<div>
				<img src="../../../assets/img/icon-rili-1@2x.png" @click="imgback()" />
				<p>修改昵称</p>
				<p @click="changeS()">完成</p>
			</div>
			<input type="text" v-model="UserName" />
		</div>
	</div>
</template>

<script>
	import {Toast} from "mint-ui";
	export default{
		data(){
			return {
				//用户头像
				user_hpic:"require('../../../assets/img/wd_dl_tx@2x.png')",
				loginTit:"",
				myUsername:"",
				UserName:"",
				navs:[
					{
						tit:"用户名",
						con:"默认账号昵称",
						name:"MsgUsername",
						flag:true,
					},
					{
						tit:"性别",
						con:"默认女",
						name:"MsgSex",
						flag:true
					},
					{
						tit:"年龄",
						con:"点击完善资料",
						name:"MsgAge",
						flag:true,
					},
					{
						tit:"身高",
						con:"点击完善资料",
						name:"MsgHeight",
						flag:true
					},
					{
						tit:"体重",
						con:"点击完善资料",
						name:"MsgWeight",
						flag:true
					}
				],
				flagOther:true,
				//修改昵称页面最初不显示
				uptNameFlag:false,
				clickLog:"点击登录"
			}
		},
		created(){
			this.telphone = JSON.parse(localStorage.getItem("user")).telphone;
			this.$axios({
				method:"post",
				url:"/mo/mock/5c356fc6879a3554aca75b8b/api/userinfo_update#!method=POST&queryParameters=%5B%5D&body=&headers=%5B%5D",
				data:{
					telphone:this.telphone
				}
			}).then((res)=>{
				if(res.flag==1){
					//请求成功，返回结果渲染到页面上
					let result = res.result;
					this.user_hpic = res.user_hpic;
					this.navs[0].con = result.nickname;
					this.navs[1].con = result.gender;
					this.navs[2].con = result.age;
					this.navs[3].con = result.height;
					this.navs[4].con = result.weight;
				}else if(res.flag ==0){
					//请求失败，显示默认项
				}
			})
		},
		methods:{
			uptback(){
				this.$router.back();
			},
			uptClick(index){
				let name = this.navs[index].name;
				if(name == "MsgUsername"){
					this.UserName = this.navs[index].con;
					//修改用户名，隐藏所有
					this.navs.map((data)=>{
						data.flag = false;
					})
					this.flagOther = false;
					this.uptNameFlag = true;
				}
				
			},
			//保存修改资料----后端处理进行资料的更新
			conserve(){
				this.$axios({
					method:"post",
					url:"/mo/mock/5c356fc6879a3554aca75b8b/api/userinfo_conserve#!method=POST&queryParameters=%5B%5D&body=&headers=%5B%5D",
					data:{
						telphone:this.telphone,
						user_hpic:this.user_hpic,
						nickname:this.nickname,
						gender:this.gender,
						age:this.age,
						height:this.height,
						weight:this.weight
					}
				}).then((res)=>{
					if(res.flag==1){
						//资料修改成功，跳转my页面
						let msg = JSON.parse(localStorage.getItem("user"));
						msg.nickname = this.navs[0].con;
						msg.user_hpic = this.user_hpic;
						localStorage.setItem("user",JSON.stringify(msg));
						this.$router.push("/my");
					}else if(res.flag==0){
						Toast({
							message: '服务器繁忙，请重试',
							position: 'middle',
							duration: 5000
						});
					}
				})
			},
			//退出登录----myMain/myTop中loginTit修改为"点击登录"
			logoff(){
				localStorage.removeItem("user");
				this.$router.push({path:"/my"})
			},
			//修改昵称----点击完成事件
			changeS(){
				this.navs[0].con = this.UserName;
				this.hidden();
			},
			//修改昵称，点击返回
			imgback(){
				this.hidden();
			},
			//隐藏修改昵称标签
			hidden(){
				this.navs.map((data)=>{
					data.flag = true;
				})
				this.flagOther = true;
				this.uptNameFlag = false;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.updateMsg{
		width: 100%;
		height: 100%;
		font-family: "微软雅黑";
		overflow: hidden;
		.uptMsgTop{
			width: 100%;
			height: .9rem;
			margin-top: .4rem;
			line-height: .9rem;
			text-align: center;
			padding: 0 .32rem;
			img{
				position: absolute;
				left: .32rem;
				top: .71rem;
				width: .34rem;
				height: .32rem;
			}
			h2{
				font-size:.34rem;
				font-weight: normal;
				color:rgba(17,17,17,1);
			}
			p{
				position: absolute;
				right: .32rem;
				top: .42rem;
				font-size:.3rem;
			}
		}
		.uptImg{
			width: 100%;
			height: 2.6rem;
			display: flex;
			align-items: center;
			justify-content: center;
			border-top: .02rem solid rgba(214,214,214,1);
			border-bottom: .02rem solid rgba(214,214,214,1);
			background: #F7F7F7;
			img{
				width: 1.68rem;
				height: 1.68rem;
			}
		}
		.uptMain{
			width: 100%;
			height: 100%;
			li{
				width: 100%;
				height: 1.25rem;
				line-height: 1.25rem;
				color:rgba(17,17,17,1);
				font-size: .26rem;
				border-bottom: .02rem solid rgba(240,240,240,1);
				.upttit{
					float: left;
					margin-left: .32rem;
				}
				.uptcon{
					margin-right: .32rem;
					float: right;
					color:rgba(160,159,159,1);
				}
			}
		}
		.logoff{
			margin-top: .45rem;
			display: flex;
			justify-content: center;
			input{
				width:2.6rem;
				height:.68rem;
				background:rgba(235,139,78,1);
				border-radius:.04rem;
				font-size:.26rem;
				color:rgba(255,255,255,1);
			}
		}
		.uptName{
			width: 100%;
			height: 100%;
			position: absolute;
			left: 0;
			top: 0;
			z-index: 1;
			overflow: hidden;
			div{
				width: 100%;
				height: .88rem;
				margin-top: .4rem;
				border-bottom:.01rem solid rgba(214,214,214,1);
				position: relative;
				img{
					position: absolute;
					left: .32rem;
					bottom: .28rem;
					width: .34rem;
					height: .32rem;
				}
				p:nth-child(2){
					line-height: .88rem;
					margin-left: .88rem;
					font-size: .34rem;
				}
				p:nth-child(3){
					position: absolute;
					right: .32rem;
					bottom: .28rem;
					font-size: .26rem;
				}
			}
			input{
				width: 100%;
				background:rgba(235,139,78,1);
				height: 1rem;
				border-radius: .04rem;
				color: #fff;
				border: none;
				font-size: .32rem;
				padding: .4rem;
				border-bottom: .02rem solid rgba(214,214,214,1);
				margin: 0 auto;
			}
		}
	}
</style>
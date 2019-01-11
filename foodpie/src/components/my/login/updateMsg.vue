<template>
	<div class="updateMsg">
		<div class="uptMsgTop" v-show="flagOther">
			<img src="../../../assets/img/icon-rili-1@2x.png" @click="uptback()" />
			<h2>个人资料</h2>
			<p @click="conserve()">保存</p>
		</div>
		<div class="uptImg" v-show="flagOther">
			<img src="../../../assets/img/xg_tx@2x.png" />
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
	export default{
		data(){
			return {
				loginTit:"",
				myUsername:"",
				UserName:"",
				navs:[
					{
						tit:"用户名",
						con:"一起吃喝",
						name:"MsgUsername",
						flag:true,
					},
					{
						tit:"性别",
						con:"女",
						name:"MsgSex",
						flag:true
					},
					{
						tit:"年龄",
						con:"20岁",
						name:"MsgAge",
						flag:true,
					},
					{
						tit:"身高",
						con:"160cm",
						name:"MsgHeight",
						flag:true
					},
					{
						tit:"体重",
						con:"45kg",
						name:"MsgWeight",
						flag:true
					}
				],
				flagOther:true,
				uptNameFlag:false,
				clickLog:"点击登录"
			}
		},
		methods:{
			uptback(){
				this.$router.back();
			},
			uptClick(index){
				let name = this.navs[index].name;
				if(name == "MsgUsername"){
					this.UserName = this.navs[index].tit;
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
				
			},
			//退出登录----myMain/myTop中loginTit修改为"点击登录"
			logoff(){
			},
			//昵称修改完成完成--需要接口来更新数据库中的用户名
			changeS(){
				this.navs[0].tit = this.UserName;
				this.hidden();
			},
			imgback(){
				this.hidden();
			},
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
		font-family:PingFang-SC-Regular;
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
			background: pink;
			div{
				width: 100%;
				height: .88rem;
				margin-top: .4rem;
				border-bottom:.02rem solid rgba(214,214,214,1);
				position: relative;
				img{
					position: absolute;
					left: .32rem;
					bottom: .28rem;
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
				height: 1rem;
				font-size: .32rem;
				padding: .4rem;
				border-bottom: .02rem solid rgba(214,214,214,1);;
			}
		}
	}
</style>
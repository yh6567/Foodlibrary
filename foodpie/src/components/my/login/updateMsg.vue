<template>
	<div class="updateMsg">
		<div class="uptMsgTop">
			<img src="../../../assets/img/icon-rili-1@2x.png" @click="uptback()" />
			<h2>个人资料</h2>
		</div>
		<div class="uptImg">
			<img src="../../../assets/img/xg_tx@2x.png" />
		</div>
		<ul class="uptMain">
			<li v-for="(item,index) in navs">
				<p class="upttit">{{item.tit}}</p>
				<p class="uptcon">{{item.con}}</p>
			</li>
		</ul>
		<div class="logoff">
			<input type="button" value="退出登录" />
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				navs:[
					{
						tit:"用户名",
						con:"一起吃喝",
						name:"MsgUsername"
					},
					{
						tit:"性别",
						con:"女",
						name:"MsgSex"
					},
					{
						tit:"年龄",
						con:"20岁",
						name:"MsgAge"
					},
					{
						tit:"身高",
						con:"160cm",
						name:"MsgHeight"
					},
					{
						tit:"体重",
						con:"45kg",
						name:"MsgWeight"
					},
				]
			}
		},
		methods:{
			uptback(){
				this.$router.back();
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
	}
</style>
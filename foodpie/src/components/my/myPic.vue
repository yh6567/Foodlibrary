<template>
	<div class="myPic">
		<div class="myPicTop">
			<img src="../../assets/img/icon-rili-1@2x.png" @click="back()" />
			<h2>我的照片</h2>
		</div>
		
		<div class="myPicMain">
			<ul>
				<li class="mainTop">
					<img src="../../assets/img/xg_tx.png" />
					<h4>一起吃喝</h4><br />
					<p>3天前更新</p>
				</li>
				<li class="mainImg">
					<img src="../../assets/img/581de0e68fefa53900e84f42e578392.png"/>
					<p>营养早餐，吃出美丽，吃出健康</p>
					<span>2018/12/26</span>
				</li>
				<li class="mainName">
					<p>美式炒蛋</p>
				</li>
			</ul>
			<ul>
				<li class="mainTop">
					<img src="../../assets/img/xg_tx.png" />
					<h4>一起吃喝</h4><br />
					<p>3天前更新</p>
				</li>
				<li class="mainImg">
					<img src="../../assets/img/581de0e68fefa53900e84f42e578392.png"/>
					<p>营养早餐，吃出美丽，吃出健康</p>
					<span>2018/12/26</span>
				</li>
				<li class="mainName">
					<p>美式炒蛋</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			back(){
				this.$router.push({path:"/my"})				
			}
		},
		beforeRouteEnter(to,from ,next){
			let msg = localStorage.getItem("user");
			if(msg){
				next();
			}else{
				next("/login");
			}
		}
	}
</script>

<style lang="scss">
	.myPic{
		width: 7.5rem;
		height: 13.34rem;
		overflow: hidden;
		font-family: "微软雅黑";
		.myPicTop{
			width: 100%;
			height: .88rem;
			margin-top: .4rem;
			display: flex;
			align-items: center;
			position: relative;
			justify-content: center;
			border-bottom: 1px solid rgba(240,240,240,1);
			img{
				position: absolute;
				left: .32rem;
			}
			h2{
				font-size:.34rem;
				font-weight: normal;
				color:rgba(17,17,17,1);
			}
		}
		.myPicMain{
			width: 100%;
			height: auto;
			background: #F7F7F7;
			ul{
				width: 100%;
				height: auto;
				background: #FFFFFF;
				position: relative;
				margin-bottom: .2rem;
				.mainTop{
					height: 1.22rem;
					display: flex;
					align-items: center;
					padding: 0 .32rem;
					img{
						width: .8rem;
						height: .8rem;
					}
					h4{
						position: absolute;
						left: 1.41rem;
						top: .4rem;
						font-size:.26rem;
						color:rgba(17,17,17,1);
					}
					p{
						position: absolute;
						left: 1.41rem;
						top: .75rem;
						font-size:.18rem;
						color:rgba(160,159,159,1);
					}
				}
				.mainImg{
					width: 100%;
					height: 7.15rem;
					position: relative;
					img{
						width: 100%;
						height: 6.08rem;
					}
					p{
						position: absolute;
						right: .32rem;
						bottom: .66rem;
						font-size:.2rem;
						color:rgba(17,17,17,1);
					}
					span{
						position: absolute;
						left: .32rem;
						bottom: .24rem;
						font-size:.18rem;
						color:rgba(160,159,159,1);
					}
				}
				.mainName{
					width: 100%;
					height: .74rem;
					padding: 0 .32rem;
					border-top: 1px solid rgba(240,240,240,1);
					p{
						float: right;
						font-size:.18rem;
						color:rgba(160,159,159,1);
						margin-top: .14rem;
					}
				}
			}
		}
	}
</style>
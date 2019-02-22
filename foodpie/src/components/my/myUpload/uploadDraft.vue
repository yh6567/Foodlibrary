<template>
	<div class="uploadDraft">
		<div class="draftTop">
			<img src="../../../assets/img/icon-rili-1@2x.png" @click="back()" />
			<h2>草稿箱</h2>
		</div>
		<ul class="draftMain">
			<li>
				<img src="../../../assets/img/sw_tp@2x.png" />
				<p>
					<span>美味早餐</span><br />
					<span class="draft">牛奶+面包</span>
				</p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		methods:{
			back(){
				this.$router.push({path:"/myUpload"});
			}
		}
	}
</script>

<style lang="scss">
	.uploadDraft{
		width: 7.5rem;
		height: 13.34rem;
		background: #fff;
		overflow: hidden;
		font-family: "微软雅黑";
		.draftTop{
			width: 100%;
			height: .88rem;
			margin-top: .4rem;
			display: flex;
			align-items: center;
			position: relative;
			justify-content: center;
			img{
				width: .34rem;
				height: .32rem;
				position: absolute;
				left: .32rem;
			}
			h2{
				font-size:.34rem;
				font-weight: normal;
				color:rgba(17,17,17,1);
			}
		}
		.draftMain{
			width: 100%;
			height: 100%;
			background: #F7F7F7;
			li{
				width: 100%;
				height: 1.24rem;
				border-bottom: 1px solid rgba(240,240,240,1);
				margin: 0 .32rem;
				display: flex;
				align-items: center;
				img{
					width: .92rem;
					height: .92rem;
					margin-right: .28rem;
				}
				p{
					span:nth-child(1){
						font-size:.26rem;
						color:rgba(17,17,17,1);
						font-weight: bold;
					}
					.draft{
						font-size: .18rem;
						color:rgba(160,159,159,1);
					}
				}
			}
		}
	}
</style>
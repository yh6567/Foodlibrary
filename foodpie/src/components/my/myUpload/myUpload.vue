<template>
	<div class="myUpload">
		<!--1.上传食物===头部-->
		<div class="uploadTop">
			<img src="../../../assets/img/icon-rili-1@2x.png" />
			<h2>上传食物</h2>
		</div>
		<!--2.上传食物===nav部分-->
		<ul class="uploadMain">
			<li @click="uploadFoodClick()">
				<h4>我上传的食物</h4>
				<span>{{uploadFoodNum}}</span>
				<img src="../../../assets/img/wd_icon_jt@2x.png" />
			</li>
			
			<li @click="uploadDraftClick()">
				<h4>草稿箱</h4>
				<span>{{uploadDraftNum}}</span>
				<img src="../../../assets/img/wd_icon_jt@2x.png" />
			</li>
		</ul>
		<!--3.上传食物===点击上传-->
		<div class="uploadBtn" @click="uploadClick()">
			<input type="button" value="上传食物" />
		</div>
	</div>
</template>

<script>
	import {Toast} from "mint-ui";
	export default{
		data(){
			return {
				uploadFoodNum:1,
				uploadDraftNum:1,
				telphone:""
			}
		},
		methods:{
			uploadFoodClick(){
				if(this.uploadFoodNum==0){
					Toast({
						message:"暂无上传的食物",
						position:"bottom",
						duration:3000
					})
				}else{
					this.$router.push({path:"/uploadFood"});
				}
			},
			uploadDraftClick(){
				if(this.uploadDraftNum==0){
					Toast({
						message:"暂无草稿",
						position:"bottom",
						duration:3000
					})
				}else{
					this.$router.push({path:"/uploadDraft"});
				}
			},
			uploadClick(){
				this.$router.push({path:"/uploadClick"})
			}
		},
		created(){
			console.log(localStorage.getItem("user"))
//			this.telphone = JSON.parse(localStorage.getItem("user").telphone);
//			console.log(this.telphone)
			/*this.$axios({
				method:"post",
				url:"/mo/mock/5c356fc6879a3554aca75b8b/api/upload_foodMsg",
				data:{
					telphone:this.telphone
				}
			}).then((res)=>{
				console.log(res)
			})*/
		}
	}
</script>

<style lang="scss">
	.myUpload{
		width: 7.5rem;
		height: 13.34rem;
		overflow: hidden;
		font-family: "微软雅黑";
		.uploadTop{
			width: 100%;
			height: .88rem;
			margin-top: .4rem;
			border-bottom:rgba(240,240,240,1) solid 1px;
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
				font-size: .34rem;
			}
		}
		.uploadMain{
			width: 100%;
			height: auto;
			padding: 0 .32rem;
			li{
				width: 100%;
				height: 1rem;
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-bottom: 1px solid rgba(240,240,240,1);
				h4{
					width: 6.3rem;
					font-weight: normal;
				}
				img{
					width: .16rem;
					height: .29rem;
				}
			}
		}
		.uploadBtn{
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
			margin-top: .26rem;
			input{
				width: 6.86rem;
				height: .8rem;
				border: none;
				background: rgba(235,139,78,1);
				border-radius: .04rem;
				font-size:.26rem;
				color:rgba(254,250,250,1);
				letter-spacing: .06rem;
			}
		}
	}
	
</style>
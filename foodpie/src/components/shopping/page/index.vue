<template>
	<div id="page">
		<div id="pox">
			<div class="pox_img" @click="page" v-for="(item,index) in arr" :key="index">
				<div class="pox_img_img">
					<img src="../../../assets/img/gc_tp_1.png" />
				</div>
				<div class="text_title">
					<p>{{item.shoppingTxt}}</p>
					<p>{{item.shoppingTxt}}</p>
				</div>
				<div class="like">
					<img src="../../../assets/img/gc_sy-tx-1.png"/>
					<div class="nickname">{{item.shoppingUname}}</div>
					<div class="like_img_rinth"><img src="../../../assets/img/icon_dz.png"/><span>{{item.likeNum}}</span></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return{
			arr:[]
		}
	},
	methods:{
		page(){
			this.$router.push({ path: '/cate' })
		}
	},
	mounted(){
			this.$axios.get("/mo/mock/5c356fc6879a3554aca75b8b/api/eating_commend#!method=get").then((data)=>{
				this.arr=data.eating.commend;
				console.log(this.arr)
		})
		}
}
</script>

<style scoped>
	#page{
		background: #f6f6f6;
		overflow:scroll;
	}
	#pox{
			height: 200rem;
	}
	.pox_img{
		float: left;
		background: #fff;
		width: 3.3rem;
		height: 4.8rem;
		margin-top: 0.33rem;
		margin-left: 0.3rem;
	}
	
	.pox_img_img{
		width: 3.3rem;
		height: 3.05rem;
		border-radius:0.05rem solid #ccc;
	}
	.pox_img_img>img{
		width: 100%;
		height: 100%;
	}
	.text_title p:nth-of-type(1){
		font-size: 0.26rem;
		line-height:0.4rem;
		text-indent: 0.05rem;
	}
	.text_title p:nth-of-type(2){
		font-size: 0.22rem;
		line-height: 0.34rem;
		border-bottom:1px solid #dfdfdf  ;   
	}
	.like{
		width: 100%;
		height: 0.9rem;
		line-height: 0.88rem;
		text-indent: 0.1rem;
	}
	.like>.nickname{
		float: left;
	}
	.like>img{
		float: left;
		margin-top: 0.16rem;
		margin-left: 0.1rem;
		line-height: 0.9rem;
	}
	.like>.like_img_rinth{
		float: right;
		display: inline-block;
	}
	.like>.like_img_rinth>img{
		float: left;
		display: inline-block;
		margin-top: 0.3rem;
	}
</style>
<template>
	<div id="evaluating">
			<div class="rank" @click="page"  v-for="(item,index) in arr" :key="index">
						<p class="nice">{{item.evaTxt}}</p>
						<p class="various"> {{item.tvaTitle}}</p>
						<p class="number"><img :src="item.eyeImg" alt=""><span>{{item.readNum}}</span></p>
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
			this.$router.push({ path: '/evaluating' })
		}
	},
	mounted(){
			this.$axios.get("/mo/mock/5c356fc6879a3554aca75b8b/api/shoppingevaluating#!method=get").then((data)=>{
				this.arr=data.evaluating.profile;
				console.log(this.arr)
		})
}
}
</script>

<style>
	#evaluating{
		width: 100%;
		height: 15rem;
		background: #f6f6f6;
		overflow-y: auto;
	}
	#evaluating>.rank{
		width: 6.86rem;
		height: 3.8rem;
		margin: 0.28rem 0.3rem 0.28rem;
		background: url(../../../assets/img/ms_pc@2x.png) no-repeat 100% 100%;
		border-radius: 5px;
		overflow: hidden;
	}
	#evaluating>.rank>p{
		color: #fff;
		text-align: center;
		opacity: .8;
	}
	#evaluating>.rank>.nice{
		margin-top:0.48rem;
		font-size: 0.2rem;
	}
	#evaluating>.rank>.various{
		margin-top: 1.02rem;
		font-size:0.33rem;
	}#evaluating>.rank>.number{
		margin-top: 1.05rem;
		font-size: 0.2rem;
		text-indent: 0.8rem;
	}
	#evaluating>.rank>.number>img{
		width: .16rem;
		height: .16rem;
		float: left;
		margin-left: 2.5rem;
	}
	#evaluating>.rank>.number>span{
		float: left;
		margin-left: -.7rem;
		margin-top: -.1rem;
	}
</style>
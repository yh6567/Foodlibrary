<template>
	<div id="evaluating">
		<div class="rank" @click="page">
			<p class="nice">/NICE健康/</p>
			<p class="various">各类海鲜蛋白质含量排行</p>
			<p class="number">169559人阅读</p>
		</div> 
		<div class="rank"  @click="page">
			<p class="nice">/NICE健康/</p>
			<p class="various">各类海鲜蛋白质含量排行</p>
			<p class="number">169559人阅读</p>
		</div> 
		<div class="rank">
			<p class="nice">/NICE健康/</p>
			<p class="various">各类海鲜蛋白质含量排行</p>
			<p class="number">169559人阅读</p>
		</div> 
	</div>
</template>

<script>
export default{
	data(){
		return{
		}
	},
	methods:{
		page(){
			this.$router.push({ path: '/evaluating' })
		}
	}
}
</script>

<style>
	#evaluating{
		width: 100%;
		height: 10rem;
		background: #f6f6f6;
		overflow-y: auto;
	}
	#evaluating>.rank{
		width: 6.86rem;
		height: 3.8rem;
		margin: 0.28rem 0.3rem 0.28rem;
<<<<<<< HEAD
		background: url(../../../assets/img/ms_pc@2x.png) no-repeat 100% 100%;
=======
		background: url(../../../assets/img/ms_pc@2x.png) no-repeat;
>>>>>>> zhou
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
		background: url(../../../assets/img/gc-pc-yj.png) no-repeat 2.77rem 0;
	}
</style>
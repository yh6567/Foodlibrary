<template>
	<div id="intellectual">
		<div class="control" @click="kap">
			<div class="control-left">
				<p class="control-left-text">
					控制食欲、告别情绪性暴食，你只需要7步
				</p>
				<span class="control-left-school">薄荷健康学院</span>
				<span class="control-left-number">95636</span>
			</div>
			<div class="control-right">
				<img src="../../../assets/img/gc-zs-1.png"/>
			</div>
			
		</div>
		<div class="control" @click="kap()">
			<div class="control-left">
				<p class="control-left-text">
					控制食欲、告别情绪性暴食，你只需要7步
				</p>
				<span class="control-left-school">薄荷健康学院</span>
				<span class="control-left-number">95636</span>
			</div>
			<div class="control-right">
				<img src="../../../assets/img/gc-zs-1.png"/>
			</div>
			
		</div>
		<div class="control" @click="kap()">
			<div class="control-left">
				<p class="control-left-text">
					控制食欲、告别情绪性暴食，你只需要7步
				</p>
				<span class="control-left-school">薄荷健康学院</span>
				<span class="control-left-number">95636</span>
			</div>
			<div class="control-right">
				<img src="../../../assets/img/gc-zs-1.png"/>
			</div>
			
		</div>
		<div class="control">
			<div class="control-left">
				<p class="control-left-text">
					控制食欲、告别情绪性暴食，你只需要7步
				</p>
				<span class="control-left-school">薄荷健康学院</span>
				<span class="control-left-number">95636</span>
			</div>
			<div class="control-right">
				<img src="../../../assets/img/gc-zs-1.png"/>
			</div>
			
		</div>
		<div class="control">
			<div class="control-left">
				<p class="control-left-text">
					控制食欲、告别情绪性暴食，你只需要7步
				</p>
				<span class="control-left-school">薄荷健康学院</span>
				<span class="control-left-number">95636</span>
			</div>
			<div class="control-right">
				<img src="../../../assets/img/gc-zs-1.png"/>
			</div>
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
		kap(){
			this.$router.push({ path: '/page' })
		}
	}
}
</script>

<style scoped>
	#intellectual{
		width: 100%;
		height: 10rem;
		background: #f6f6f6;
		overflow-y: auto;
	}
	#intellectual>.control{
		width: 6.88rem;
		height: 2.16rem;
		margin: 0.28rem 0.3rem 0;
		background: #fff;
		border-radius: 2px;
	}
	#intellectual>.control>.control-left{
		float: left;
		width: 3.64rem;
		padding: 0 0.1rem;
	}
	#intellectual>.control>.control-left>.control-left-text{
		font-size: 0.23rem;
		line-height: 0.38rem;
		margin-top: 0.3rem;
		margin-bottom: 0.64rem;
	}
	#intellectual>.control>.control-left>.control-left-number{
		padding-left: 1.09rem;
		color: #c1c1c1;
		font-size: 0.18rem;
		background: 'url(../../../assets/img/gc-pc-yj1.png)' no-repeat 0.8rem 0.1rem;
	}
	#intellectual>.control>.control-left>.control-left-school{
		font-size: 0.18rem;
		color: #c1c1c1;
	}
	#intellectual>.control>.control-right{
		width: 3.24rem;
		float: right;
		padding-top: 0.36rem;
		padding-right: 0.13rem;
	}
	#intellectual>.control>.control-right>img{
		width: 100%;
		height: 100%;
	}
</style>
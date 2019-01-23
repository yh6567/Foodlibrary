<template>
	<div id="intellectual">
		<div class="control"  v-for="(item,index) in arr" @click="skip()">
			<div class="control-left">
				<p class="control-left-text">
					{{item.knoTxt}}
				</p>
				<span class="control-left-school">{{item.konTitle}}</span>
				<span class="control-left-number">{{item.readNum}}</span>
			</div>
			<div class="control-right">
				<img :src="item.eyeImg"/>
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
		skip(){
			this.$router.push({ path: '/evaluating' })
		}
	},
	mounted(){
      this.$axios.get("/mo/mock/5c356fc6879a3554aca75b8b/api/kno#!method=get").then((data)=>{
        this.arr=data.kon.kno;
        console.log(this.arr)
    })
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
		width: 2.9rem;
		height: 1.8rem;
		float: right;
		padding-top: 0.36rem;
		padding-right: 0.13rem;
	}
	#intellectual>.control>.control-right>img{
		width: 100%;
		height: 100%;
	}
</style>
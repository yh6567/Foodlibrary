<template>
	<div class="footer">
		<ul>
			<li v-for="(item,index) in navs" @click="changeImg(index)">
				<router-link :to="{name:item.name}">
					<img :src="item.src"/>
					<span>{{item.title}}</span>
				</router-link>
				
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				navs:[
					{
						src:"../../../static/img/sy_icon_swbk@2x.png",
						src1:"../../../static/img/sy_icon_swbk@2x(1).png",
						name:"foodsEn",
						title:"食物百科",
						flag:true
					},
					{
						src:"../../../static/img/sy_icon_gc@2x.png",
						src1:"../../../static/img/sy_icon_gc@2x(1).png",
						name:"eat",
						title:"逛吃",
						flag:false
					},
					{
						src:"../../../static/img/sy_icon_wd@2x.png",
						src1:"../../../static/img/sy_icon_wd@2x(1).png",
						name:"my",
						title:"我的",
						flag:false
					}
				],
				
			}
		},
		methods:{
			changeImg(index){
				let len = this.navs.length;
				for(let i = 0 ; i < len ; i ++ ){
					this.navs[i].flag = false;
				}
				this.navs[index].flag = true;
				this.navs.map((item)=>{
					if(item.flag){
						item.src = item.src1;
						if(item.name == "foodsEn"){
							item.src = item.src;
						}
					}else{
						item.src = item.src;
						if(item.name == "foodsEn"){
							item.src = item.src1;
						}
						
					}
				})
				console.log(this.navs[index].flag)
				
			}
		}
	}
</script>

<style>
	.footer{
		width: 100%;
		height: .98rem;
		background: #FFFFFF;
		position: fixed;
		left: 0;
		bottom: 0;
	}
	.footer>ul{
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.footer>ul>li{
		width: 100%;
		text-align: center;
	}
	.footer>ul>li>a{
		width: 100%;
		height: 100%;
		color: #A3A3A3;
	}
	.footer>ul>li>a>img{
		padding-left: .95rem;
		margin-bottom: .12rem;
	}
	.footer>ul>li>a>span{
		font-size: 21px;
	}
	.footer>ul>li>.router-link-active{
		color: #EB8B4E;
	}
</style>
<template>
	<div class="collectionFoods">
		<ul class="wu-foods">
			<li>
				<img src="../../../assets/img/tu1@2x.png"/>
				<p class="foods">
					<em>玉米(鲜)</em>
					<i><span>112</span>千卡/100克</i>
				</p>
				
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				collectionFoods:[]	
			}
		}
	}
</script>

<style lang="scss">
	.collectionFoods{
		width: 100%;
		height: auto;
		.wu-foods{
			width: 100%;
			height: auto;
			li{
				width: 100%;
				height: 1.1rem;
				padding: .1rem 0;
				display: flex;
				align-items: center;
				border-bottom: 1px solid rgba(240,240,240,1);
				img{
					width: .8rem;
					height: .8rem;
					float: left;
					margin: 0 .32rem;
				}
				.foods{
					em{
						display: block;
						font-style: normal;
						margin-bottom: .19rem;
					}
					i{
						font-style: normal;
					}
				}
			}
		}
	}
</style>

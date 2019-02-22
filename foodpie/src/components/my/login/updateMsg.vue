<template>
	<div class="updateMsg">
		<div class="uptMsgTop" v-show="flagOther">
			<img src="../../../assets/img/icon-rili-1@2x.png" @click="uptback()" />
			<h2>个人资料</h2>
			<p @click="conserve()">保存</p>
		</div>
		<div class="uptImg" v-show="flagOther">
			<img :src="userIc" />
			<!--<img src="../../../assets/img/wd_dl_tx@2x.png"/>-->
			
		</div>
		<ul class="uptMain">
			<li v-for="(item,index) in navs" @click="uptClick(index)" v-show="item.flag">
				<p class="upttit">{{item.tit}}</p>
				<p class="uptcon">{{item.con}}</p>
			</li>
		</ul>
		<div class="logoff" v-show="flagOther" @click="logoff()">
			<input type="button" value="退出登录" />
		</div>
		
		<!--1.修改性别-->
		<div class="uptSex" v-show="uptSex">
			<div>
				<p @click="cancelSex()">取消</p><p @click="confirmSex()">确定</p>
			</div>
			<mt-picker :slots="slotsSex" @change="changeSex"></mt-picker>
		</div>
		<!--2.修改年龄-->
		<div class="uptSex" v-show="uptAge">
			<div>
				<p @click="cancelAge()">取消</p><p @click="confirmAge()">确定</p>
			</div>
			<mt-picker :slots="slotsAge" @change="changeAge"></mt-picker>
		</div>
		<!--3.修改身高-->
		<div class="uptSex" v-show="uptHeight">
			<div>
				<p @click="cancelHeight()">取消</p><p @click="confirmHeight()">确定</p>
			</div>
			<mt-picker :slots="slotsHeight" @change="changeHeight"></mt-picker>
		</div>
		<!--4.修改体重-->
		<div class="uptSex" v-show="uptWeight">
			<div>
				<p @click="cancelWeight()">取消</p><p @click="confirmWeight()">确定</p>
			</div>
			<mt-picker :slots="slotsWeight" @change="changeWeight"></mt-picker>
		</div>
		
		<div class="uptName" v-show="uptNameFlag">
			<div>
				<img src="../../../assets/img/icon-rili-1@2x.png" @click="imgback()" />
				<p>修改昵称</p>
				<p @click="changeS()">完成</p>
			</div>
			<input type="text" v-model="UserName" />
		</div>
	</div>
</template>

<script>
	import {Toast,Picker} from "mint-ui";
	export default{
		data(){
			return {
				//手机号
				telphone:"",
				//用户头像
				userIc:"",
				loginTit:"",
				myUsername:"",
				UserName:"",
				navs:[
					{
						tit:"用户名",
						con:"默认账号昵称",
						name:"MsgUsername",
						flag:true,
					},
					{
						tit:"性别",
						con:"默认女",
						name:"MsgSex",
						flag:true
					},
					{
						tit:"年龄",
						con:"点击完善资料",
						name:"MsgAge",
						flag:true,
					},
					{
						tit:"身高",
						con:"点击完善资料",
						name:"MsgHeight",
						flag:true
					},
					{
						tit:"体重",
						con:"点击完善资料",
						name:"MsgWeight",
						flag:true
					}
				],
				flagOther:true,
				//修改昵称页面最初不显示
				uptNameFlag:false,
				clickLog:"点击登录",
				//1.性别的修改
				slotsSex: [
			        {
			          flex: 1,
			          values: ['男', '女'],
			          className: 'slot1',
			          textAlign: 'center'
			        }
		     	],
		     	uptSex:false,
		     	selectSex:"",
		     	//2.年龄的修改
		     	slotsAge: [
			        {
			          flex: 1,
			          values: "",
			          className: 'slot1',
			          textAlign: 'center'
			        }
		     	],
		     	uptAge:false,
		     	selectAge:"",
		     	//3.身高的修改
		     	slotsHeight: [
			        {
			          flex: 1,
			          values: "",
			          className: 'slot1',
			          textAlign: 'center'
			        }
		     	],
		     	uptHeight:false,
		     	selectHeight:"",
		     	//4.体重的修改
		     	slotsWeight: [
			        {
			          flex: 1,
			          values: "",
			          className: 'slot1',
			          textAlign: 'center'
			        },
			        {
			          flex: 1,
			          values: "",
			          className: 'slot2',
			          textAlign: 'center'
			        }
		     	],
		     	uptWeight:false,
		     	selectWeight:"",
		     	
			}
		},
		created(){
			
			//本地是否存储了数据---存储 了就请求数据
			if(localStorage.getItem("user")){
				this.telphone = JSON.parse(localStorage.getItem("user")).telphone;
				this.$axios({
					method:"post",
					url:"/api/userinfo_update",
					data:{
						telphone:this.telphone
					}
				}).then((res)=>{
					if(res.flag==0){
						//请求成功，返回结果渲染到页面上
						let result = res.result;
						console.log(result)
						this.userIc = result.userIc;
						this.navs[0].con = JSON.parse(localStorage.getItem("user")).nickname;
						this.navs[1].con = JSON.parse(localStorage.getItem("user")).gender;
						this.navs[2].con = JSON.parse(localStorage.getItem("user")).age;
						this.navs[3].con = JSON.parse(localStorage.getItem("user")).height;
						this.navs[4].con = JSON.parse(localStorage.getItem("user")).weight;
						
					}else if(res.flag ==1){
						//请求失败，显示默认项
					}
				})
			}else{
				
			}
			//1.年龄范围
			let arr = [];
			for(var i = 0 ; i<=100 ; i ++){
				arr.push(i);
			}
			this.slotsAge[0].values = arr;
			//2.身高范围
			let arrHeight = [];
			for(var i = 140 ; i <= 230 ; i ++ ){
				arrHeight.push(i+"cm");
			}
			this.slotsHeight[0].values = arrHeight;
			//3.体重范围
			let arrWeight1 = [];
			for(var i = 30 ; i<=150 ; i ++){
				arrWeight1.push(i);
			}
			this.slotsWeight[0].values = arrWeight1;
			
			let arrWeight2 = [];
			for(var i = 0 ; i<=9 ; i ++){
				arrWeight2.push("."+i+"kg");
			}
			this.slotsWeight[1].values = arrWeight2;
		},
		methods:{
			uptback(){
				this.$router.back();
			},
			uptClick(index){
				let name = this.navs[index].name;
				//更改用户名
				if(name == "MsgUsername"){
					this.UserName = this.navs[index].con;
					//修改用户名，隐藏所有
					this.navs.map((data)=>{
						data.flag = false;
					})
					this.flagOther = false;
					this.uptNameFlag = true;
				//1.更改性别
				}else if(name == "MsgSex"){
					//显示更改性别的框，点击取消返回，点击确定，返回并更改性别
					this.uptSex = true;
				//2.更改年龄
				}else if(name == "MsgAge"){
					this.uptAge = true;
				//更改身高
				}else if(name == "MsgHeight"){
					this.uptHeight = true;
				//更改体重
				}else if(name == "MsgWeight"){
					this.uptWeight = true;
				}
				
			},
			//保存修改资料----后端处理进行资料的更新
			conserve(){
				let msg = JSON.parse(localStorage.getItem("user"));
				if(!isNaN(this.navs[3].con)){
					this.navs[3].con = this.navs[3].con+"cm";
				}
				if(!isNaN(this.navs[4].con)){
					this.navs[4].con = this.navs[4].con+"kg";
				}
				console.log(this.navs[4].con)
				this.$axios({
					method:"post",
					url:"/api/userinfo_conserve",
					data:{
						telphone:msg.telphone,
						userIc:msg.userIc,
						nickname:this.navs[0].con,
						gender:this.navs[1].con,
						age:this.navs[2].con,
						height:this.navs[3].con.split("c")[0],
						weight:this.navs[4].con.split("k")[0]
					}
				}).then((res)=>{
					if(res.flag==0){
						//资料修改成功，跳转my页面
						msg.nickname = this.navs[0].con;
						msg.gender = this.navs[1].con;
						msg.age = this.navs[2].con;
						msg.height = this.navs[3].con;
						msg.weight = this.navs[4].con;
						// msg.userIc = this.userIc;
						localStorage.setItem("user",JSON.stringify(msg));
						this.$router.push("/my");
					}else if(res.flag==1){
						Toast({
							message: '服务器繁忙，请重试',
							position: 'middle',
							duration: 5000
						});
					}
				})
			},
			//1.修改性别
			changeSex(picker, values) {
			    if (values[0] > values[1]) {
			        picker.setSlotValue(1, values[0]);
			    }
			    this.selectSex = values[0];
		    },
		   //取消修改性别
		    cancelSex(){
		   		this.uptSex = false;
		    },
		    //性别点击确定
		    confirmSex(){
		    	this.navs[1].con = this.selectSex; 
		   		this.uptSex = false;
		    },
		    //2.修改年龄
			changeAge(picker, values) {
			    if (values[0] > values[1]) {
			        picker.setSlotValue(1, values[0]);
			    }
			    this.selectAge = values[0];
		    },
		    cancelAge(){
		   		this.uptAge = false;
		    },
		    confirmAge(){
		    	this.navs[2].con = this.selectAge; 
		   		this.uptAge = false;
		    },
		    //3.修改身高=======????怎么让开始的默认值在中间某个位置
			changeHeight(picker, values) {
			    if (values[0] > values[1]) {
			        picker.setSlotValue(1, values[0]);
			        
			    }
			    this.selectHeight = values[0];
		    },
		    cancelHeight(){
		   		this.uptHeight = false;
		    },
		    confirmHeight(){
		    	this.navs[3].con = this.selectHeight; 
		   		this.uptHeight = false;
		    },
		    //4.修改体重
			changeWeight(picker, values) {
			    if (values[0] > values[1]) {
			        picker.setSlotValue(1, values[0]);
			    }
			    this.selectWeight = values[0]+values[1];
		    },
		    cancelWeight(){
		   		this.uptWeight = false;
		    },
		    confirmWeight(){
		    	this.navs[4].con = this.selectWeight; 
		   		this.uptWeight = false;
		    },
		    
			//退出登录----myMain/myTop中loginTit修改为"点击登录"
			logoff(){
				localStorage.removeItem("user");
				this.$router.push({path:"/my"})
			},
			//修改昵称----点击完成事件
			changeS(){
				this.navs[0].con = this.UserName;
				this.hidden();
			},
			//修改昵称，点击返回
			imgback(){
				this.hidden();
			},
			//隐藏修改昵称标签
			hidden(){
				this.navs.map((data)=>{
					data.flag = true;
				})
				this.flagOther = true;
				this.uptNameFlag = false;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.updateMsg{
		width: 100%;
		height: 100%;
		font-family: "微软雅黑";
		overflow: hidden;
		.uptMsgTop{
			width: 100%;
			height: .9rem;
			margin-top: .4rem;
			line-height: .9rem;
			text-align: center;
			padding: 0 .32rem;
			img{
				position: absolute;
				left: .32rem;
				top: .71rem;
				width: .34rem;
				height: .32rem;
			}
			h2{
				font-size:.34rem;
				font-weight: normal;
				color:rgba(17,17,17,1);
			}
			p{
				position: absolute;
				right: .32rem;
				top: .42rem;
				font-size:.3rem;
			}
		}
		.uptImg{
			width: 100%;
			height: 2.6rem;
			display: flex;
			align-items: center;
			justify-content: center;
			border-top: .02rem solid rgba(214,214,214,1);
			border-bottom: .02rem solid rgba(214,214,214,1);
			background: #F7F7F7;
			img{
				width: 1.68rem;
				height: 1.68rem;
				border-radius: 50%;
			}
		}
		.uptMain{
			width: 100%;
			height: auto;
			li{
				width: 100%;
				height: 1.25rem;
				line-height: 1.25rem;
				color:rgba(17,17,17,1);
				font-size: .26rem;
				border-bottom: .02rem solid rgba(240,240,240,1);
				.upttit{
					float: left;
					margin-left: .32rem;
				}
				.uptcon{
					margin-right: .32rem;
					float: right;
					color:rgba(160,159,159,1);
				}
			}
		}
		.logoff{
			margin-top: .45rem;
			display: flex;
			justify-content: center;
			input{
				width:2.6rem;
				height:.68rem;
				background:rgba(235,139,78,1);
				border-radius:.04rem;
				font-size:.26rem;
				color:rgba(255,255,255,1);
			}
		}
		.uptName{
			width: 100%;
			height: 100%;
			position: absolute;
			left: 0;
			top: 0;
			z-index: 1;
			overflow: hidden;
			div{
				width: 100%;
				height: .88rem;
				margin-top: .4rem;
				border-bottom:.01rem solid rgba(214,214,214,1);
				position: relative;
				img{
					position: absolute;
					left: .32rem;
					bottom: .28rem;
					width: .34rem;
					height: .32rem;
				}
				p:nth-child(2){
					line-height: .88rem;
					margin-left: .88rem;
					font-size: .34rem;
				}
				p:nth-child(3){
					position: absolute;
					right: .32rem;
					bottom: .28rem;
					font-size: .26rem;
				}
			}
			input{
				width: 100%;
				background:rgba(235,139,78,1);
				height: 1rem;
				border-radius: .04rem;
				color: #fff;
				border: none;
				font-size: .32rem;
				padding: .4rem;
				border-bottom: .02rem solid rgba(214,214,214,1);
				margin: 0 auto;
			}
		}
		.uptSex{
			width: 100%;
			height: 4.5rem;
			background: #fff;
			position: absolute;
			left: 0;
			bottom: 0;
			div:nth-child(1){
				width: 100%;
				height: .78rem;
				line-height: .78rem;
				background: #f7f7f7;
				border-bottom: .02rem solid rgba(240,240,240,1);
				p:nth-child(1){
					float: left;
					margin-left: .32rem;
				}
				p:nth-child(2){
					float: right;
					margin-right: .32rem;
				}
			}
		}
	}
</style>
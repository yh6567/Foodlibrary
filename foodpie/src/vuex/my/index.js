export default{
    state:{
		telphone:""
    },
    mutalations:{
		handleLoginM(state,params){
			console.log(params)
		}
    },
    actions:{
		handleLogin({commit},params){
			this.$axios({
				method: "post",
				url: "/mo/mock/5c356fc6879a3554aca75b8b/api/login_check#!method=post",
				data:{
					telphone:params.telphone,
					password:params.password
				}
			}).then((res) => {
				if(res.flag==0){
					alert("手机号或密码错误");
				}else if(res.flag == 1){
					//登录成功，信息存储本地，跳转到my页面
					commit("handleLoginM")
					/*localStorage.setItem("user",JSON.stringify(res.result));
					this.$router.push({path:"/my"});*/
				}else if(res.flag==2){
					alert("未注册");
				}
				
			})
		}
    },
    getters:{
        
    }
}
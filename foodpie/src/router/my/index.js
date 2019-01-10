import my from "@/components/my/index";
import MyPic from "@/components/my/myPic";
import MyCol from "@/components/my/myCollection";
import MyUpload from "@/components/my/myUpload";
import MyCompare from "@/components/my/myCompare";
import Login from "@/components/my/login/login";
import ForgetPwd from "@/components/my/forgetPwd";
import register from "@/components/my/login/register";
import registerSuccess from "@/components/my/login/registerSuccess";
import updateMsg from "@/components/my/login/updateMsg";
export default 
       [
    {
      path: '/my', //路径
      name: 'my', //名字
      component: my , //组件名
      meta:{
      	show:true
      },
      props:true
    },
    {
    	path:"/myPic",
    	name:"myPic",
    	component:MyPic
    },
    {
    	path:"/myCollection",
    	name:"myCollection",
    	component:MyCol
    },
  	{
    	path:"/myUpload",
    	name:"myUpload",
    	component:MyUpload
    },
    {
    	path:"/myCompare",
    	name:"myCompare",
    	component:MyCompare
    },
    {
    	path:"/login",
    	name:"login",
    	component:Login,
    	meta:{
    		flag:false,
    	}
    },
    {
    	path:"/forgetPwd",
    	name:"forgetPwd",
    	component:ForgetPwd
	},
	{
    	path:"/register",
    	name:"register",
    	component:register
    },
    {
    	path:"/registerSuccess",
    	name:"registerSuccess",
    	component:registerSuccess
    },
    {
    	path:"/updateMsg",
    	name:"updateMsg",
    	component:updateMsg,
    	props:true
    }
  ]

import my from "@/components/my/index";

import Cs from "@/components/my/cs";

import MyPic from "@/components/my/myPic";
import MyCol from "@/components/my/collection/myCollection";
//上传食物数据部分
import MyUpload from "@/components/my/myUpload/myUpload";
import uploadFood from "@/components/my/myUpload/uploadFood";
import uploadDraft from "@/components/my/myUpload/uploadDraft";
import uploadClick from "@/components/my/myUpload/uploadClick";

import Login from "@/components/my/login/login";
import ForgetPwd from "@/components/my/login/forgetPwd";
import register from "@/components/my/login/register";
import registerSuccess from "@/components/my/login/registerSuccess";
import updateMsg from "@/components/my/login/updateMsg";


export default 
       [
       {
       	path:"/cs",
       	component:Cs,
       	name:"cs"
       },
       

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
		component:MyCol,
    },
  	{
    	path:"/myUpload",
    	name:"myUpload",
    	component:MyUpload
    },
    {
    	path:"/uploadFood",
    	name:"uploadFood",
    	component:uploadFood
    },
    {
    	path:"/uploadDraft",
    	name:"uploadDraft",
    	component:uploadDraft
    },
    {
    	path:"/uploadClick",
    	name:"uploadClick",
    	component:uploadClick
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

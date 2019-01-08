import my from "@/components/my/index";
import MyPic from "@/components/my/myPic";
import MyCol from "@/components/my/myCollection";
import MyUpload from "@/components/my/myUpload";
import MyCompare from "@/components/my/myCompare";
export default 
       [
    {
      path: '/my', //路径
      name: 'my', //名字
      component: my , //组件名
      meta:{
        show:true
      }
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
  ]

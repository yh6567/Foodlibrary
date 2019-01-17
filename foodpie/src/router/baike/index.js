
import test from "@/components/baike/test"

export default 
       [
    {  //食物百科首页
      path: '/', 
      name: 'main', 
      
      component: ()=>import("@/components/baike/index"),
      meta:{
      
        show:true	//是否显示底部导航
      }
    },
    { //饮食分析子页
      path: '/analysis',
      name: 'analysis',
      component: resolve=>require(['@/components/baike/foodAnalysis'],resolve),
      meta:{
        show:false
      }
    },
   {  //扫码对比
      path:"/sweep",
      name:'sweep',
      component:resolve =>require(['@/components/baike/sweepCode'],resolve),
      meta:{
        show:false
      }
    },
    { //搜索对比
      path:"/searchcompare",
      name:'searchcompare',
      component:()=>import("@/components/baike/searchAnalysis"),
      meta:{
        show:false
      }
    },
    { //食物分类详情页
      path:"/detail/:i",
      name:'detail',
      component:()=>import("@/components/baike/detail"),
      meta:{
        show:false
      }
    },
    { //饮食分析图表页
      path:"/echart",
      name:'echart',
      component:()=>import("@/components/baike/eachart"),
      meta:{
        show:true
      }
    },
    { //测试 用于个人测试 debug
      path:"/test",
      name:'test',
      component:test,
      meta:{
        show:true
      }
    }
  ]

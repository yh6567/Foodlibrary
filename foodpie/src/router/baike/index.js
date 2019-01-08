import baike from "@/components/baike/index"
import Analysis from "@/components/baike/foodAnalysis"
import search from "@/components/baike/searchAnalysis"
import sweep from "@/components/baike/sweepCode"
import detail from "@/components/baike/detail"
export default 
       [
    {
      path: '/', //路径
      name: 'main', //名字
      component: baike, //组件名
      meta:{
        show:true
      }
    },
    {
      path: '/analysis',
      name: 'analysis',
      component: Analysis,
      meta:{
        show:false
      }
    },
   {
      path:"/sweep",
      name:'sweep',
      component:sweep,
      meta:{
        show:false
      }
    },
    {
      path:"/detail/:i",
      name:'detail',
      component:detail,
      meta:{
        show:false
      }
    }
  ]

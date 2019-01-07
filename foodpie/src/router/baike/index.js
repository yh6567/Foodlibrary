import baike from "@/components/baike/index"
import Analysis from "@/components/baike/foodAnalysis"
import search from "@/components/baike/searchAnalysis"
import sweep from "@/components/baike/sweepCode"
export default 
       [
    {
      path: '/', //路径
      name: 'main', //名字
      component: baike //组件名
    },
    {
      path: '/analysis',
      name: 'analysis',
      component: Analysis
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },{
      path:"/sweep",
      name:'sweep',
      component:sweep
    }
  ]

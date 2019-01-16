//import shopping from "@/components/shopping/index"
import cate from '@/components/shopping/cate/cate_son.vue'
import evaluating from '@/components/shopping/evaluating/evaluating_son.vue'
import kap from "@/components/shopping/KAP/kap_son.vue"
import page from "@/components/shopping/page/page_son.vue"
// let evaluating = resolve=>require(["@/compoinents/shopping/evaluating/evaluating_son.vue"],resolve)
export default
       [
    {
      path: '/shopping',
      name: 'shopping',
      component: () =>import ("@/components/shopping/index"),
      meta:{
        show:true
      }
    },
    {
      path: '/cate',
      name: 'cate',
      component: () =>import ("@/components/shopping/cate/cate_son.vue"),
      meta:{
        show:false
      }
    },
    {
      path: '/evaluating',
      name: 'evaluating',
      component: () =>import ("@/components/shopping/evaluating/evaluating_son.vue"),
      meta:{
        show:false
      }
    },
     {
      path: '/kap',
      name: 'kap',
      component:() =>import ("@/components/shopping/KAP/kap_son.vue"),
      meta:{
        show:false
      }
    },
    {
      path: '/page',
      name: 'page',
      component: () =>import ("@/components/shopping/page/page_son.vue"),
      meta:{
        show:false
      }
    }
  ]

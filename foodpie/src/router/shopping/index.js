import shopping from "@/components/shopping/index"
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
      component: shopping,
      meta:{
        show:true
      }
    },
    {
      path: '/cate',
      name: 'cate',
      component: cate,
      meta:{
        show:false
      }
    },
    {
      path: '/evaluating',
      name: 'evaluating',
      component: evaluating,
      meta:{
        show:false
      }
    },
     {
      path: '/kap',
      name: 'kap',
      component: kap,
      meta:{
        show:false
      }
    },
    {
      path: '/page',
      name: 'page',
      component: page,
      meta:{
        show:false
      }
    }
  ]

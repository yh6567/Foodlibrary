import shopping from "@/components/shopping/index"
import cate from '@/components/shopping/cate/cate_son.vue'
import evaluating from '@/components/shopping/evaluating/evaluating_son.vue'
import kap from "@/components/shopping/kap/kap_son.vue"
import page from "@/components/shopping/page/page_son.vue"
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
        show:true
      }
    },
    {
      path: '/evaluating',
      name: 'evaluating',
      component: evaluating,
      meta:{
        show:true
      }
    },
     {
      path: '/kap',
      name: 'kap',
      component: kap,
      meta:{
        show:true
      }
    },
    {
      path: '/page',
      name: 'page',
      component: page,
      meta:{
        show:true
      }
    }
  ]

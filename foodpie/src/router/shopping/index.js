import shopping from "@/components/shopping/index"
import cate from '@/components/shopping/cate/cate_son.vue'
import evaluating from '@/components/shopping/evaluating/evaluating_son.vue'
<<<<<<< HEAD
import kap from "@/components/shopping/KAP/kap_son.vue"
=======
import kap from "@/components/shopping/kap/kap_son.vue"
>>>>>>> zhou
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
<<<<<<< HEAD
        show:false
=======
        show:true
>>>>>>> zhou
      }
    },
    {
      path: '/evaluating',
      name: 'evaluating',
      component: evaluating,
      meta:{
<<<<<<< HEAD
        show:false
=======
        show:true
>>>>>>> zhou
      }
    },
     {
      path: '/kap',
      name: 'kap',
      component: kap,
      meta:{
<<<<<<< HEAD
        show:false
=======
        show:true
>>>>>>> zhou
      }
    },
    {
      path: '/page',
      name: 'page',
      component: page,
      meta:{
<<<<<<< HEAD
        show:false
=======
        show:true
>>>>>>> zhou
      }
    }
  ]

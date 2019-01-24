import shopping from "@/components/shopping/index"
// import cate from '@/components/shopping/cate/cate_son.vue'
// import evaluating from '@/components/shopping/evaluating/evaluating_son.vue'
// import kap from "@/components/shopping/KAP/kap_son.vue"
// import page from "@/components/shopping/page/page_son.vue"
// let evaluating = resolve=>require(["@/compoinents/shopping/evaluating/evaluating_son.vue"],resolve)
export default
       [
    {
      path: '/shopping',
      name: 'shopping',
      component:  resolve=>require(["@/components/shopping/index"],resolve),
      meta:{
        show:true
      }
    },
    {
      path: '/cate',
      name: 'cate',
      component: resolve=>require(["@/components/shopping/cate/cate_son.vue"],resolve),
      meta:{
        show:false
      }
    },
    {
      path: '/evaluating',
      name: 'evaluating',
      component: resolve=>require(["@/components/shopping/evaluating/evaluating_son.vue"],resolve),
      meta:{
        show:false
      }
    },
     {
      path: '/kap',
      name: 'kap',
      component: resolve=>require(["@/components/shopping/KAP/kap_son.vue"],resolve),
      meta:{
        show:false
      }
    },
    {
      path: '/page',
      name: 'page',
      component:  resolve=>require(["@/components/shopping/page/page_son.vue"],resolve),
      meta:{
        show:false
      }
    }
  ]

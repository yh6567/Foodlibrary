import search from '@/components/baike/search/index'
import searchanswer from  '@/components/baike/searchanswer/index'


export default
    [{
        path: '/search',
        name: 'search',
        component: search,
        meta:{
            show:false
        }
    },
    {
       path:'/searchanswer',
       name: 'searchanswer',
       component:searchanswer,
       meta:{
           show:false,
       }
    }
    ]

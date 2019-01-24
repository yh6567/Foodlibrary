
export default
    [{
        path: '/search',
        name: 'search',
				component:  resolve=>require(["@/components/baike/search/index"],resolve),
        meta:{
            show:false
        }
    },
    {
       path:'/searchanswer',
       name: 'searchanswer',
			 component:  resolve=>require(["@/components/baike/searchanswer/index"],resolve),
       meta:{
           show:false,
       }
    },{
        path:"/fooddetail",
        name:'foodDetail',
				component:  resolve=>require(["@/components/baike/foodDetails/index"],resolve),
        meta:{
            show:false,
        }

    }
    ]

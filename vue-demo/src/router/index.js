import Vue from 'vue'
import Router from 'vue-router'
import FoodsEn from '../components/foodsEn';
import Eat from '../components/eat';
import My from '../components/my';
import Err from '../components/error';

Vue.use(Router)

export default new Router({
  routes: [
      {
	      path: '/',
	     	redirect:"/foodsEn"
	    },
	    {
	    	path:"/foodsEn",
	    	name:"foodsEn",
	    	component:FoodsEn,
	    	meta:{
	    		//是否显示tab
	    		flag:true,
	    		//路由守卫
	    		requireAuth:true
	    	}
	    },
	    {
	    	path:"/eat",
	    	name:"eat",
	    	component:Eat,
	    	meta:{
	    		//是否显示tab
	    		flag:true,
	    		//路由守卫
	    		requireAuth:true
	    	}
	    },
	    {
	    	path:"/my",
	    	name:"my",
	    	component:My,
	    	meta:{
	    		//是否显示tab
	    		flag:true,
	    		//路由守卫
	    		requireAuth:true
	    	}
	    },
	    {
	    	path:"**",
	    	component:Err
	    }
	  ]
  
})

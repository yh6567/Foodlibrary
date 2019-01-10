import Vue from 'vue'
import Router from 'vue-router'

 import baike from './baike/'
 import shopping from './shopping'
 import my from "./my"

<<<<<<< HEAD
<<<<<<< HEAD
   import search from './search'
=======
//import search from './search'
>>>>>>> yh
=======
import search from './search'
>>>>>>> miowmiow

Vue.use(Router)
  //底部导航有三个 划分了三个大块；我负责的baike下的路由自己参照我的配；不会可以问我
  
export default new Router({
  routes:baike.concat(shopping,my,search)
})

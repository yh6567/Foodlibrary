// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import "@/assets/css/reset.css"
import axios from 'axios'
import filters from "@/filters"

import store from "./vuex"
import "./common/js/flexble"


import store from "./vuex";
import Bus from "./Bus"
Vue.prototype.$bus = Bus;

//引入observer非父子组件传值
import observer from './common/js/observer.js'



import "./common/css/reset.css"

Vue.use(MintUI)

for(var key in filters){
  Vue.filter(key,filters[key]);
}
//过滤器的使用；若用到或添加请到filters文件夹里添加
axios.interceptors.response.use(({data})=>{
  return data;
}) //axios拦截 .then返回的就是data数据本身；

Vue.prototype.$axios =axios; //axios调用接口在vue原型上
Vue.prototype.observer = observer; //非父子传值
Vue.config.productionTip = false; //

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

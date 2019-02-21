import Vue from "vue"
import Vuex from "vuex"
import baike from "./baike"
import my from "./my"
import  shopping from "./shopping"
Vue.use(Vuex);
 export default new Vuex.Store({
     modules:{
        baike,
        shopping,
        my
     }
 })

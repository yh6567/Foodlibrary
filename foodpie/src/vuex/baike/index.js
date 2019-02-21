import axios from "axios";

export default{
    state:{
        adminName:localStorage.adminName || null,
        adminId:localStorage.adminId || null,
        foodListInfo:[],
        foodDetails:[],
        searchch:'',
    },
    mutations:{
        changeFoodListInfo(state,params){
          state.foodListInfo=[...state.foodListInfo,...params];
          console.log("食物列表信息",state.foodListInfo);
        },
        changeFoodDetails(state,params){
          state.foodDetails=params;
          console.log("食物详细信息",state.foodDetails);
        },
        deletFoodListInfo(state){
          state.foodListInfo = [];
          console.log("空食物列表",state.foodListInfo);
        },
        remSearch(state,search){
          state.searchch = search;
          console.log("搜索内容传入vuex",search);
        },
        deletSearch(state){
          state.searchch = '';
          console.log("空搜索内容",state.searchch);
        }
    },
    actions:{
       getFoodListInfo({commit},search){
         console.log("传入动作的搜索内容",search);
           axios({
           method:"get",
           url:"/api/findfoodinfobyname?pagesize=12&search="+search+"&pageindex=1",
         }).then((data)=>{
           commit("changeFoodListInfo",data.foodinfo);
           commit("remSearch",search);
       });},
       getFoodDetails({commit},foodid){
         console.log("传入动作的食物ID",foodid);
         axios({
           method:"get",
           url:"/api/foodinfo?id="+foodid,
         }).then((data)=>{
           commit("changeFoodDetails",data);
         })
       }
    }
};

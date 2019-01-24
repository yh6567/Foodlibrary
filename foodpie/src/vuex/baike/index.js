import axios from "axios";

export default{
    state:{
        adminName:localStorage.adminName || null,
        adminId:localStorage.adminId || null,
        foodListInfo:[],
        foodDetails:[],
    },
    mutations:{
        changeFoodListInfo(state,params){
            state.foodListInfo = params;
            console.log(params);
        },
        changeFoodDetails(state,params){
          state.foodDetails = params;
          console.log(params);
        }
    },
    actions:{
       getFoodListInfo({commit}){
           axios({
           method:"get",
           url:"/api/findfoodinfobyname"}).then((data)=>{
           commit("changeFoodListInfo",data.foodinfo);
       });},
       getFoodDetails({commit}){
         axios({
           method:"get",
           url:"/api/foodinfo"
         }).then((data)=>{
           commit("changeFoodDetails",data);
         })
       }
    },
    getters:{

    }
};

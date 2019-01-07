<template>
    <div id="main">
        <header>
            <h2>食物派</h2>
            <h3>查询食物信息</h3>
        <mt-search
                v-model="value"
                cancel-text="取消"
                placeholder="搜索">
            </mt-search>
        </header>
       <nav>
           <dl @click="$router.push('/analysis')">
               <dd></dd>
               <dt>饮食分析</dt>
           </dl>
            <dl @click="$router.push('/search')">
               <dd></dd>
               <dt>搜索对比</dt>
           </dl>
            <dl @click="$router.push('/sweep')">
               <dd></dd>
               <dt>扫码对比</dt>
           </dl>
       </nav>
       <div class="food-family">
          <p>食物分类</p>
          <ul>
              <li v-for="(item) in foodFamilylist">{{item}}</li>
          </ul>
       </div>
       
    </div>
</template>

<script>
export default {
    data(){
        return{
            foodFamilylist:["主食类","肉蛋类",
        "大豆类","主食类","肉蛋类","大豆类","主食类","肉蛋类","大豆类"]
        }
        
    },
    methods:{
        getfoodFamilylist(){
            $axios.get("")
        }

    },
    mounted:{

    }
}
</script>

<style scoped>
li{
    list-style: none;
    float:left;
    margin:1rem; 
}
#main header{
    height: 10rem;
    background: orange;
    color: #fff;
}
 #main h2{
     text-align: center;
     line-height:1.5rem;
     font-size: 1rem;
     font-weight: 400;
 }
 #main h3{
      text-align: center;
     margin-top: 1rem;
       line-height:1rem;
     font-size: 0.8rem;
     font-weight: 400;
 }
 #main nav{
     display: flex;
     justify-content: space-around;
 }
</style>

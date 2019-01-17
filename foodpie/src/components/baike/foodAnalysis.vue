<template>
  <div>
    <mt-header fixed>
      <router-link to="/" slot="left">
        <mt-button icon="back">对比详情</mt-button>
        
      </router-link>
      
    
    </mt-header>
    
      <div class="date">
        <input type="date">
      </div>
      <div>

     
    </div>
    <div @click="$router.push('/search')" class="search-input">
        <i><img src="../../assets/img/ss_icon_ss@2x.png" alt=""></i><input type="text" placeholder="请输入食物名称">
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.search{
    display: flex;
    justify-content: space-between;
}


.date input{
    margin: 3vw;
    border: none;
    outline: none;

}
.search-input{
  height: 10vw;
  background: #f4f4f4;
  margin: 2vw;
  display: flex;
  align-items: center;
  
  
}
.search-input input{
  line-height: 10vw;
  background: #f4f4f4;font-size: 4vw;
  border: none;
  outline: none;
  margin-left: 2vw;
}
.mint-header{
  background-color: #fff;
  height: 10vw;
  color: #000;
  font-size: 4vw;
}
i{
  display: inline-block;
  width: 4vw;
  margin-left: 2vw;

}
.mint-button-icon i{
  font-size: 4vw;
}
i img{
  width: 100%;
}
</style>
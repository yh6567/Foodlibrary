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
    <div class="search-input">
        <i>√</i><input type="text" placeholder="请输入食物名称">
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
  
}
.search-input input{
  line-height: 10vw;
  background: #f4f4f4;
  border: none;
  outline: none;
}
</style>
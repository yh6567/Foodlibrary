<template>
  <div>
    <div class="search">
      <div class="back" @click="$router.push('/')">
        <img src="../../assets/img/icon_fh@3x.png" alt>
      </div>
      <div class="date">
        <input type="date">
      </div>
      <div>

      </div>
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
.back img {
  width: 5vw;
  height: 5vw;
  margin: 2vw;
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
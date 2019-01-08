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
    <div>
        <input type="text" placeholder="搜索">
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
</style>
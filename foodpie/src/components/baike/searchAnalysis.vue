<template>
    <div>
     <mt-header fixed>
      <router-link to="/" slot="left">
        <mt-button icon="back" :title="title">对比详情</mt-button>
      </router-link>
     
    
    </mt-header>
    <div class="add">
        <div @click="$router.push('/search')" class="add-box">+</div>
        <div>
          <div @click="$router.push('/search')" class="compare">
              vs
          </div>
        </div>
        <div class="add-box">+</div>
    </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
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
.add{
  margin-top: 10vw;
  height: 45vw;
  padding: 5vw;
  background: #f4f4f4;display: flex;
  justify-content: space-around;
  align-items: center;
}
.add-box{
    width: 20vw;
    height: 20vw;
    background: #fff;
    font-size: 8vw;
    text-align: center;
    line-height: 20vw;
    color: red;
}
.compare{
  width: 15vw;
  height: 15vw;
  border: 1px red solid;
  border-radius: 50%;
  text-align: center;
  line-height: 14vw;
  font-size: 8vw;
  color: red;
}
</style>

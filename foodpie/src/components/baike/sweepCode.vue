<template>
    <div>
        <mt-header fixed>
      <router-link to="/" slot="left">
        <mt-button icon="back">扫码分析</mt-button>
        
      </router-link>
      </mt-header>
          <h2>
              扫码分析
          </h2>
        <h3>
            暂未开放！敬请期待！
        </h3>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.mint-header{
  background-color: orange;
  height: 15vw;
  color: #fff;
  font-size: 4vw;
}

.mint-button-icon i{
  font-size: 4vw;
}
    h2{
          text-align: center;
          line-height: 20vw;
        }
        h3{
            font-size: 8vw;
        text-align: center;
        line-height: 50vw;
    }
</style>

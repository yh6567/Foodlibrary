<template>
  <footer v-if="this.$route.meta.show">
    <router-link @click.native="change(index)" v-for="(v,index) in navList" :to="v.path">
      <mt-tab-item id="食物百科">
        <img slot="icon" :src="flag==index?v.selected:v.icon">
        <p :class="flag==index?'router-link-active':''">{{v.title}}</p>
      </mt-tab-item>
    </router-link>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      flag: 0,
      navList: [
        {
          title: "食物百科",
          path: "/",
          icon: require("../../assets/img/sy_icon_swbk@2x(1).png"),
          selected: require("../../assets/img/sy_icon_swbk@2x.png")
        },
        {
          title: "逛吃",
          path: "/shopping",
          icon: require("../../assets/img/sy_icon_gc@2x.png"),
          selected: require("../../assets/img/sy_icon_gc@2x(1).png")
        },
        {
          title: "我的",
          path: "/my",
          icon: require("../../assets/img/sy_icon_wd@2x.png"),
          selected: require("../../assets/img/sy_icon_wd@2x(1).png")
        }
      ]
    };
  },
  methods: {
    change(index) {
      this.flag = index;
    }
  },
  mounted() {
    this.name = this.$route.name;
  }
};
</script>

<style scoped>
footer {
  width: 100%;
  height: 18vw;
  background: #fff;
  border-top: 1px solid #f1f1f1;
  position: fixed;
  bottom: 0;
  left: 0;
  font-size: 4vw;
  display: flex;
  justify-content: space-around;
  border-top: #ddd 1px solid;
}
.mint-tab-item-label {
  font-size: 20px;
}
.mint-tab-item-icon {
  width: 10vw;
  height: 10vw;
}
.router-link-active {
  color: #EB8B4E;
  font-weight: 500;
}
</style>

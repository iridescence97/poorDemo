<template>
  <div id="second-nav">
    <div class="nav-group">
      <router-link to="/updatelog" class="common-nav-item" :class="navActive"> 更新日志 </router-link>
      <router-link
        class="common-nav-item"
        :to="item.url"
        v-for="(item, i) in navList"
        :key="i"
        >{{ item.name }}</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {
          name: "Banner 轮播图",
          url: "/Banner",
        },
        {
          name: "Form 表单",
          url: "/Form",
        },
      ],
      navActive:''
    };
  },
  watch: {
    $route: {
      handler(newRouter) {
        this.navActive = newRouter.name;
      },
    },
  },
};
</script>

<style>
#second-nav {
  width: 240px;
  float: left;
}
.common-nav-item {
  display: block;
  text-align: left;
  line-height: 40px;
}
.common-nav-item-active::after {
  content: "";
  width: 5px;
  height: 40px;
  position: absolute;
  bottom: 0;
  left: calc(50% - 17px);
  background-color: #1989fa;
}
</style>
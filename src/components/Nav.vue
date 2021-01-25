<template>
  <div id="second-nav">
    <div class="nav-group">
      <router-link to="updatelog" class="common-nav-item" :class="navActive">
        更新日志
      </router-link>
      <router-link
        :class="navActive==item.url?'common-nav-item-active':''"
        class="common-nav-item"
        :to="item.path"
        v-for="(item, i) in navList"
        :key="i"
        >{{ item.name }}
      </router-link>
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
          path: "/Banner",
        },
        {
          name: "Form 表单",
          path: "/Form",
        },
        {
          name: "Tabbar 导航栏",
          path: "/Tabbar",
        },
        {
          name: "Table 表格",
          path: "/Table",
        },
      ],
      navActive: "",
    };
  },
  watch: {
    $route: {
      handler(newRouter) {
        this.navActive = newRouter.name;
        console.log(this.navActive);
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
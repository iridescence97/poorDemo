<template>
  <div id="Head">
    <div class="Head-box">
      <img src="../../static/public/img/Logo.png" alt="" class="logo" />
      <div class="nav">
        <router-link
          :to="item.url"
          v-for="(item, i) in navList"
          :key="i"
          :class="item.url == navActive ? 'nav-active' : ''"
          >{{ item.name }}</router-link
        >
      </div>
    </div>
    <div class="saying">学 习 要 有 三 心 ， 一 信 心 ， 二 决 心 ， 三 恒 心 ! </div>
  </div>
</template>

<script>
export default {
  name: "Head",
  data() {
    return {
      navList: [
        { name: "组件", url: "component" },
        { name: "指南", url: "guide" },
        { name: "资源", url: "resource" },
      ],
      navActive: "",
    };
  },
  watch: {
    $route: {
      handler(newRouter) {
        this.navActive = newRouter.name;
      },
    },
  },
  methods: {},
};
</script>

<style>
#Head {
  width: 100%;
}
.Head-box {
  overflow: hidden;
  box-shadow: inset 0px -1px 0px #dcdfe6;
}
.logo {
  margin-top: 20px;
  float: left;
  height: 40px;
}
/**
    导航栏
*/
.nav {
  float: right;
  overflow: hidden;
}
.nav > a {
  padding: 0 22px;
  display: block;
  line-height: 80px;
  color: #409eff;
  float: left;
  position: relative;
}
.nav > a:hover {
  color: #1989fa;
  font-weight: bold;
}
.nav > .nav-active {
  color: #1989fa;
  font-weight: bold;
}
.nav > .nav-active::after {
  content: "";
  width: 34px;
  height: 3px;
  position: absolute;
  bottom: 0;
  left: calc(50% - 17px);
  background-color: #1989fa;
}
/**
    名言
*/
.saying {
  font-size: 14px;
  line-height: 50px;
  clear: both;
  color: #1989fa;
}
</style>
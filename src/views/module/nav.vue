<template>
  <div id="second-nav">
    <div class="nav-group">
      <router-link
        class="common-nav-item"
        :class="navActive==item.path?'common-nav-item-active':''"
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
      nav_list:[
        {
          name:"组件",
          list:[
            {
          name: "Banner 轮播图",
          path: "../component/common/banner",
        },
        {
          name: "Form 表单",
          path: "../../component/form",
        },
        {
          name: "Tabbar 导航栏",
          path: "../../component/tabbar",
        },
        {
          name: "Table 表格",
          path: "../../component/table",
        },
        {
          name: "Slide 滑块",
          path: "../../component/slide",
        },
          ]
        }
      ],
      navList: [
        {
          name: "Banner 轮播图",
          path: "../component/common/banner",
        },
        {
          name: "Form 表单",
          path: "../../component/form",
        },
        {
          name: "Tabbar 导航栏",
          path: "../../component/tabbar",
        },
        {
          name: "Table 表格",
          path: "../../component/table",
        },
        {
          name: "Slide 滑块",
          path: "../../component/slide",
        },
      ],
      navActive: "",
    };
  }
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
  position: relative;
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
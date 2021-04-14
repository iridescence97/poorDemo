<template>
  <div id="Head">
    <div class="head-box jc-sb ai-c">
      <img
        class="height-max"
        src="../../../static/public/img/logo.png"
        alt=""
      />
      <div class="nav-list fd-r">
        <div
          class="nav-item"
          :class="$route.path==item.path?'size-active':''"
          v-for="(item, i) in nav_list"
          :key="i"
          @click="enterPage(item.path)"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Head",
  data() {
    return {
      nav_list: [
        {
          name: "首页",
          path: "/",
        },
        {
          name: "微博",
          path: "/weibo",
        },
        {
          name: "资源",
          path: "/resource",
        },
        {
          name: "Vue",
          path: "/vue",
        },
        {
          name: "Ydui",
          path: "/ydui",
        },
        {
          name: "Swiper",
          path: "/swiper",
        },
        {
          name: "Bootstrap",
          path: "/bootstrap",
        },
        {
          name: "Element-ui",
          path: "/elementui",
        },
      ],
      nav:[]
    };
  },
  watch: {
    $route: {
      handler(newRouter) {
        this.is_nav = newRouter.path;
      },
    },
  },
  created(){
    this.routes()
  },
  mounted() {},
  methods: {
    routes(){
      var routes = {
        children: this.$router.options.routes
      };
 
      var route = this.$route.matched;
 
      for(var i=0; i<route.length-1; i++){
        routes = routes.children.find((e) => (e.name == route[i].name));
      }
      console.log(routes.children)
      return routes.children
    },
    enterPage: function (path) {
      this.$router.push(path);
    },
  },
};
</script>

<style>
.head-box {
  height: 40px;
  padding: 8px 18px;
}
.nav-list{
  width: 487px;
}
.nav-item {
  cursor: pointer;
  padding: 10px;
}
</style>
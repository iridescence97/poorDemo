<template>
  <div id="app">
    <my-header></my-header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  }
};
</script>

<style>
#app {
  width: 100%;
  font-family: 'LangYuanTi';
  color: #2D2D2D;
  font-size: 14px;
  line-height: 1;
  text-shadow: #fff 1px 0 0, #fff 0 1px 0, #fff -1px 0 0, #fff 0 -1px 0;
}
.size-active{
  text-shadow: #C8A878 1px 0 0, #C8A878 0 1px 0, #C8A878 -1px 0 0, #C8A878 0 -1px 0;
}
</style>

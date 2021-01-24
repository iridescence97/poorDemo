<template>
  <div id="app">
    <head-view></head-view>
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
  width: 1140px;
  font-family: "PingFang SC Regular";
  text-align: center;
  color: #444;
}
* {
  margin: 0 auto;
  padding: 0;
}
a,
a:link,
a:hover,
a:active {
  text-decoration: none;
  color: #2c3e50;
}
img {
  display: block;
}
</style>

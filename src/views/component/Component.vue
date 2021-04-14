<template>
  <div id="component">
    <second-nav></second-nav>
    <router-view class="common-container"></router-view>
  </div>
</template>

<script>
import Nav from "@/views/module/nav";
export default {
  data() {
    return {};
  },
  components:{
    "second-nav": Nav,
  }
};
</script>

<style>
#component{
  overflow: hidden;
}
.common-container{
  float: left;
  margin-left: 20px;
  width: 880px;
}
</style>
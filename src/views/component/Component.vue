<template>
  <div id="component">
    <second-nav></second-nav>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
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
</style>
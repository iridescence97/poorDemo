<template>
  <div id="update-log">update log</div>
</template>

<script>
export default {
  name: "UpdateLog",
  data() {
    return {};
  },
  mounted(){
    this.thisPage()
  },
  methods: {
    thisPage() {
      console.log("updateLog");
    },
  },
};
</script>

<style>
</style>
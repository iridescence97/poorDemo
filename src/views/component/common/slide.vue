<template>
  <div id="slide">
    <div class="slider">
      <div class="ruler" id="ruler" ref="ruler">
        <div
          ref="bar"
          class="bar startbar"
          @touchstart="startTouchstart"
          @touchmove="startTouchmove"
        ></div>
        <div
          ref="endbar"
          class="bar endbar"
          @touchstart="endTouchstart"
          @touchmove="endTouchmove"
        ></div>
      </div>
      <div class="date clearfix">
        <div class="fl">{{ startStep | hoursFilter }}</div>
        <div class="fr">{{ endStep | hoursFilter }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      $ruler: "", // 滑竿
      $bar: "", // 左侧滑块
      $endbar: "", // 右侧滑块
      startX: "", // 左侧滑块位置
      endX: "", // 右侧滑块位置
      step: "", // 滑竿在限定范围内可以分多少步
      intervalStart: 0,
      intervalEnd: 24,
      startStep: 0,
      endStep: 24,
      amountW: "", //  滑竿多长距离
    };
  },
  created() {
    const vm = this;
    vm.$nextTick(() => {
      vm.initSlider();
    });
  },
  methods: {
    initSlider() {
      const vm = this;
      vm.$ruler = vm.$refs.ruler;
      vm.$bar = vm.$refs.bar;
      vm.$endbar = vm.$refs.endbar;
      // 滑竿多长距离
      vm.amountW = vm.$ruler.clientWidth - vm.$bar.clientWidth;
      // 总共多少步
      vm.step = vm.amountW / (vm.intervalEnd - vm.intervalStart);
    },
    startTouchstart(e) {
      const vm = this;
      // 开始滑动时滑块的位置
      vm.startX = e.touches[0].pageX;
    },
    startTouchmove(e) {
      const vm = this;

      // 滑动距离=当前滑块x距离-最开始滑块距离
      let slidedis = e.touches[0].pageX - vm.$ruler.offsetLeft;

      // 滑动距离小于0 或者大于滑竿的宽度，return掉
      if (slidedis < 0 || slidedis > vm.amountW) {
        return;
      }
      let ste = Math.round(slidedis / vm.step);
      if (ste + vm.intervalStart >= vm.endStep) {
        return;
      }
      vm.startStep = ste + vm.intervalStart;
      vm.$bar.style.left = ste * vm.step + "px";
    },
    endTouchstart(e) {
      const vm = this;
      // 开始滑动时滑块的位置
      vm.endX = e.touches[0].pageX;
    },
    endTouchmove(e) {
      const vm = this;
      // 滑动距离=当前滑块x距离-最开始滑块距离
      let slidedis = e.touches[0].pageX - vm.$ruler.offsetLeft;

      if (slidedis < 0 || slidedis > vm.amountW) {
        return;
      }
      let ste = Math.round(slidedis / vm.step);

      if (vm.startStep >= ste + vm.intervalStart) {
        return;
      }
      vm.endStep = ste + vm.intervalStart;

      if (vm.endStep == 24) {
        vm.$endbar.style.left = "";
        vm.$endbar.style.right = "0px";
      } else {
        vm.$endbar.style.left = ste * vm.step + "px";
      }
    },
  },
};
</script>

<style>
.clearfix:after {
  content: "";
  display: block;
  clear: both;
}
.date {
  color: #333;
  font-size: 0.7rem;
  margin-top: 1rem;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.bar {
  position: absolute;
  top: -0.5rem;
  height: 1rem;
  width: 1rem;
  border-radius: 100%;
  background: #d8d8d8;
  font-size: 0.3rem;
  line-height: 0.65rem;
  text-align: center;
}
.startbar {
  left: 0;
}
.endbar {
  right: 0;
  background: #879bae;
}
.ruler {
  background: #879bae;
  height: 1px;
  position: relative;
  margin-top: 75px;
}
.slider {
  margin: auto;
  width: 80%;
}
</style>
<template>
  <div class="grey" :style="{height: '30px', position:'relative'}" ref="container">
    <div
        class="progressLine green"
        :style="{width: `${progress}px`, transition: 'width 0.5s'}"
    />
    <div
        v-if="cursorXPosition!==0"
        class="progressLine"
        :style="{width: `${cursorXPosition}px`, background: 'rgba(0,0,255, 0.2)', borderRight:'2px solid rgb(0,0,255)'}"
    />
    <div
        v-if="cursorXPosition!==0"
        class="stepLabel"
        :style="{left: `${cursorXPosition}px`}"
    />
  </div>
</template>
<script>
import containerWidthMixin from "@/mixins/containerWidthMixin";

export default {
  mixins: [containerWidthMixin],
  props: {
    cursorXPosition: Number,
    cursorStep: Number,
    countSteps: Number,
    simulationStep: Number
  },
  methods: {
    getCurrentStep(e) {
      return Math.ceil(e.offsetX * this.countSteps / this.containerWidth);
    },
    onMouseMove(e) {
      const cursorStep = this.getCurrentStep(e);
      const cursorXPosition = this.cursorStep * this.containerWidth / this.countSteps;
      this.$emit('update:cursorStep', cursorStep);
      this.$emit('update:cursorXPosition', cursorXPosition);
    },
    onMouseOut() {
      this.$emit('update:cursorXPosition', 0);
    },
    onChangeStep(e) {
      this.$emit('changeStep', this.getCurrentStep(e));
    }
  },
  computed: {
    progress() {
      return this.countSteps === 0
          ? 0
          : this.simulationStep * this.containerWidth / this.countSteps;
    }
  },
  mounted() {
    this.$refs.container.addEventListener('mousemove', this.onMouseMove);
    this.$refs.container.addEventListener('mouseleave', this.onMouseOut);
    this.$refs.container.addEventListener('click', this.onChangeStep)
  }
}
</script>
<style>
.progressLine {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
}
</style>
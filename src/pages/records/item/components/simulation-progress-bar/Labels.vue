<template>
  <div class="d-flex grey--text labelLine" ref="container">
    <div :style="{width: '100%'}" class="text-left caption">0</div>
    <div :style="{width: '100%'}" class="text-right caption">{{ countSteps }}</div>

    <div
        class="label"
        v-for="label in labels"
        :key="label.step"
        :style="{left: `${getLabelHorizontalPosition(label.step)}px`}"
    />
  </div>
</template>
<script>
import containerWidthMixin from "@/mixins/containerWidthMixin";

export default {
  mixins: [containerWidthMixin],
  props: {
    labels: Array,
    countSteps: Number,
  },
  methods: {
    getLabelHorizontalPosition(step) {
      return (this.containerWidth / this.countSteps) * step;
    }
  }
}
</script>
<style>
.labelLine {
  position: relative;
  width: 100%;
  height: 30px;
}

.label {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: red;
  transform: translate(-50%, 0)
}
</style>
<template>
  <div class="timeline">
    <div
        v-if="cursorXPosition!==0"
        class="timeLabel"
        :style="{left: `${cursorXPosition}px`}"
    >
      {{ cursorStep }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    cursorXPosition: Number,
    cursorStep: Number
  }
}
</script>
<style>
.timeline {
  position: relative;
  width: 100%;
  height: 30px;
}

.timeLabel {
  position: absolute;
  background: rgba(0, 0, 255);
  color: #fff;
  padding: 0 4px;
  transform: translate(-50%, 0)
}
</style>
<template>
  <div>
    <Timeline :cursor-step="cursorStep"
              :cursor-x-position="cursorXPosition"
    />
    <Progress :cursor-step.sync="cursorStep"
              :cursor-x-position.sync="cursorXPosition"
              :count-steps="countSteps"
              :simulation-step="simulationStep"
              @changeStep="(step)=>$emit('changeStep', step)"
    />
    <Labels :count-steps="countSteps"
            :labels="labels"
    />

  </div>
</template>
<script>
import Timeline from "@/pages/records/item/components/simulation-progress-bar/Timeline";
import Progress from "@/pages/records/item/components/simulation-progress-bar/Progress";
import Labels from "@/pages/records/item/components/simulation-progress-bar/Labels";

export default {
  components: { Timeline, Progress, Labels },
  props: {
    countSteps: {
      type: Number,
      default: 0
    },
    simulationStep: {
      type: Number,
      default: 0
    },
    labels: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      cursorXPosition: 0,
      cursorStep: 0
    }
  }
}
</script>
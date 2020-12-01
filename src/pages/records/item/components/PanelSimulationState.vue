<template>
  <v-container
      :style="{border: '1px solid #efefef', height: '100%'}"
      class="pa-4 text-center d-flex flex-column justify-center">
    <h3>Simulation state</h3>
    <div class="text-center">
      <ProcessStateButtons
          :state="item.simulationState"
          :has-paused-btn="true"
          @stop="$emit('changeProcessState', 'NOT_STARTED')"
          @play="$emit('changeProcessState', 'IN_PROGRESS')"
          @pause="$emit('changeProcessState', 'PAUSED')"
          :x-large="true"/>
      <div class="text-caption my-3">
        <div class="red--text font-weight-bold text-h4">{{ item.simulationStep }}</div>
        Current step
      </div>
      <SimulationProgressBar
          :count-steps="item.recordStep"
          :simulation-step="item.simulationStep"
          :labels="item.labels"
          @changeStep="(step) => $emit('changeStep', step)"
      />
    </div>
  </v-container>
</template>
<script>
import ProcessStateButtons from "@/pages/records/common/ProcessStateButtons";
import SimulationProgressBar from '@/pages/records/item/components/simulation-progress-bar/SimulationProgressBar';

export default {
  components: { ProcessStateButtons, SimulationProgressBar },
  props: ['item']
}
</script>
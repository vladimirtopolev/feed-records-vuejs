<template>
  <v-container :style="{border: '1px solid #efefef'}" class="pa-4 text-center d-flex flex-column justify-center">
    <h3>Record state</h3>
    <div class="text-center">
      <ProcessStateButtons
          :state="item.recordState"
          @stop="$emit('changeProcessState', 'NOT_STARTED')"
          @play="$emit('changeProcessState', 'IN_PROGRESS')"
          :x-large="true"/>
      <div class="text-caption">
        <div class="red--text font-weight-bold text-h4">{{ item.recordStep }}</div>
        Recorded steps
      </div>
    </div>
  </v-container>
</template>
<script>
import ProcessStateButtons from "@/pages/records/common/ProcessStateButtons";

export default {
  components: { ProcessStateButtons },
  props: ['item']
}
</script>
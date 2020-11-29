<template>
  <div>
    <div class="d-flex align-stretch grey" :style="{height: '30px'}">
      <div v-for="i in countSteps"
           :key="i"
           :style="{height: '30px', width: '100%'}"
      >
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <div
                v-bind="attrs"
                v-on="on"
                :class="{green: i<=simulationStep, grey: i>simulationStep}"
                :style="{width:'100%', height: '100%'}"
            />
          </template>
          <span>{{ i }}</span>
        </v-tooltip>
      </div>
    </div>

    <div class="d-flex grey--text">
      <div :style="{width: '100%'}" class="text-left caption">0</div>
      <div :style="{width: '100%'}" class="text-right caption">{{ countSteps }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    countSteps: {
      type: Number,
      default: 0
    },
    simulationStep: {
      type: Number,
      default: 0
    }
  }
}
</script>
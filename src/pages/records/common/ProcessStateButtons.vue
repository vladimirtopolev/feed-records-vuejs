<template>
  <div>
    <v-btn
        icon
        color="green"
        small
        :x-large="xLarge"
        :disabled="isPlayBtnDisabled"
        @click="$emit('play')"
    >
      <v-icon>mdi-play</v-icon>
    </v-btn>
    <v-btn
        v-if="hasPausedBtn"
        icon
        color="green"
        small
        :x-large="xLarge"
        :disabled="isPauseBtnDisable"
        @click="$emit('pause')"
    >
      <v-icon>mdi-pause</v-icon>
    </v-btn>
    <v-btn
        icon
        color="red"
        small
        :x-large="xLarge"
        :disabled="isStopBtnDisable"
        @click="$emit('stop')"
    >
      <v-icon>mdi-stop</v-icon>
    </v-btn>
  </div>
</template>
<script>
export default {
  props: {
    state: String,
    xLarge: {
      type: Boolean,
      default: false
    },
    hasPausedBtn: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isPlayBtnDisabled() {
      return this.state === 'IN_PROGRESS' || this.state === 'NOT_AVAILABLE';
    },
    isStopBtnDisable() {
      return this.state === 'NOT_STARTED' || this.state === 'NOT_AVAILABLE';
    },
    isPauseBtnDisable() {
      return this.state === 'PAUSED' || this.state === 'NOT_STARTED' || this.state === 'NOT_AVAILABLE'
    }
  }
}

</script>
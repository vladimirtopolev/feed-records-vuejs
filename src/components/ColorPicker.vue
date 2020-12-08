<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <span class="pickedColor"
            :style="{background: internalColor}"
            v-bind="attrs"
            v-on="on"
      />
    </template>
    <v-color-picker
        dot-size="25"
        flat
        swatches-max-height="200"
        :swatches="swatches"
        :show-swatches="true"
        :hide-canvas="true"
        mode="rgba"
        v-model="internalColor"
        @input="$emit('input', internalColor)"
    ></v-color-picker>
  </v-menu>
</template>
<script>
export default {
  props: ['value'],
  data() {
    return {
      internalColor: 'rgba(0,0,0)',
      swatches: [
        ['#FF0000', '#AA0000', '#550000'],
        ['#FFFF00', '#AAAA00', '#555500'],
        ['#00FF00', '#00AA00', '#005500'],
        ['#00FFFF', '#00AAAA', '#005555'],
        ['#0000FF', '#0000AA', '#000055'],
      ],
    }
  },
  watch: {
    value() {
      this.internalColor = this.value;
    }
  },
  mounted() {
    this.internalColor = this.value;
  }
}
</script>
<style>
.pickedColor {
  display: inline-block;
  width: 20px;
  height: 20px;
}
</style>
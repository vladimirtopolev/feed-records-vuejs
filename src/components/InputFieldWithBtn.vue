<template>
  <div class="d-flex align-center">
    <slot v-bind:value="value" v-if="!isEditMode">
      {{ value }}
    </slot>
    <v-text-field
        v-if="isEditMode"
        v-model="internalValue"/>
    <v-btn
        v-if="!isEditMode"
        rounded
        x-small
        class="mx-5"
        @click="toggleState">
      Edit
    </v-btn>
    <v-btn
        v-if="isEditMode"
        rounded
        x-small
        class="mx-2"
        @click="onSave"
    >
      Save
    </v-btn>
    <v-btn
        v-if="isEditMode"
        rounded
        x-small
        class="mx-2"
        @click="toggleState"
    >
      Cancel
    </v-btn>
  </div>
</template>
<script>
export default {
  props: ['value'],
  data() {
    return {
      internalValue: '',
      isEditMode: false
    }
  },
  methods: {
    onSave(){
      this.$emit('save', this.internalValue);
      this.isEditMode = false;
    },
    toggleState() {
      if (!this.isEditMode) {
        this.internalValue = this.value;
      }
      this.isEditMode = !this.isEditMode
    }
  }
}
</script>
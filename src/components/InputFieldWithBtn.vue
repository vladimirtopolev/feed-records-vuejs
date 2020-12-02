<template>
  <div class="d-flex align-center">
    <slot v-bind:value="value" v-if="!isEditMode">
      {{ value }}
    </slot>
    <v-text-field
        dense
        hide-details
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
      <slot name="saveBtn">Save</slot>
    </v-btn>
    <v-btn
        v-if="isEditMode"
        rounded
        x-small
        class="mx-2"
        @click="toggleState"
    >
      <slot name="cancelBtn"> Cancel</slot>
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
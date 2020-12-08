<template>
  <v-card-actions>
    <v-spacer></v-spacer>
    <v-btn
        color="primary"
        text
        @click="closeDialog"
    >
      {{ $t('form.cancel') }}
    </v-btn>
    <v-btn
        v-if="createStrategy === 0"
        color="primary"
        text
        @click="createItem"
    >
      {{ $t('form.create') }}
    </v-btn>
    <v-btn
        v-if="createStrategy === 1 && step > 0"
        color="primary"
        text
        @click="onPrevStep"
    >
      {{ $t('form.prevStep') }}
    </v-btn>
    <v-btn
        v-if="createStrategy === 1 && step < maxSteps"
        color="primary"
        text
        :disabled="step===1 && !pattern"
        @click="onNextStep"
    >
      {{ $t('form.nextStep') }}
    </v-btn>
    <v-btn
        v-if="step===2"
        color="primary"
        text
        @click="createItem"
    >
      {{ $t('form.create') }}
    </v-btn>
  </v-card-actions>
</template>
<script>
export default {
  props: ['createStrategy', 'step', 'dialog', 'maxSteps', 'pattern'],
  methods: {
    changeStep(newStep) {
      this.$emit('update:step', newStep)
    },
    closeDialog() {
      this.$emit('update:dialog', false)
      this.$emit('resetModal');
    },
    onNextStep() {
      this.changeStep(this.step + 1)
    },
    onPrevStep() {
      this.changeStep(this.step - 1)
    },
    createItem() {
      this.$emit('createItem')
    }
  }
}
</script>
<template>
  <v-row
      class="justify-center"
      :style="{minHeight: '105px'}"
      v-if="this.item.simulationState !== 'NOT_AVAILABLE'">
    <div class="text-caption my-3 d-flex flex-column justify-center">
      <div class="red--text font-weight-bold text-h4">{{ item.simulationStep }}</div>
      <div>Current step</div>
      <div v-if="currentLabel">{{ currentLabel.label }}</div>
    </div>

    <div class="d-flex flex-column mx-4 justify-center" v-if="currentLabel">
      <EditLabelBtn
          btn-title="Edit label"
          :label="currentLabel"
          @saveLabel="onLabelChange"
      />
      <v-btn x-small class="ma-1" @click="onLabelDelete">Delete label</v-btn>
    </div>
    <div class="d-flex flex-column mx-4 justify-center" v-if="!currentLabel">
      <EditLabelBtn
          btn-title="Add label"
          :label="{step: this.item.simulationStep, label: ''}"
          @saveLabel="onLabelChange"
      />
    </div>
  </v-row>
</template>
<script>
import { mapActions } from 'vuex';
import EditLabelBtn from "@/pages/records/item/components/EditLabelBtn";
import { DOMAIN_NAME } from '@/store/records';

export default {
  components: { EditLabelBtn },
  props: {
    item: Object
  },
  methods: {
    ...mapActions(DOMAIN_NAME, ['editRecordLabel', 'deleteRecordLabel']),
    onLabelChange(label) {
      this.editRecordLabel({ label, recordId: this.item.id });
    },
    onLabelDelete() {
      this.deleteRecordLabel({ label: this.currentLabel, recordId: this.item.id })
    }
  },
  computed: {
    currentLabel() {
      return this.item.labels.find(label => label.step === this.item.simulationStep)
    }
  }
}
</script>
<template>
  <v-container class="my-4" v-if="item">
    <v-btn
        rounded
        link
        class="my-4"
        to="/records">
      Back to list
    </v-btn>

    <InputFieldWithBtn
        :value="item.name"
        @save="(val) => onChangeItemField('name', val)"
        v-slot:default="{value}"
    >
      <h1>{{ value }}</h1>
    </InputFieldWithBtn>


    <v-row class="align-stretch">
      <v-col cols="2" class="d-flex justify-center">
        <PanelRecordState
            :item="item"
            @changeProcessState="(state)=> onChangeItemField('recordState', state)"
        />
      </v-col>
      <v-col>
        <PanelSimulationState
            :item="item"
            @changeProcessState="(state)=> onChangeItemField('simulationState', state)"
            @changeStep="(step)=>onChangeItemField('simulationStep', step)"
        />
      </v-col>
    </v-row>

    <FeedsMetaTable :item="item"/>
  </v-container>
</template>
<script>
import { createNamespacedHelpers } from 'vuex';
import FeedsMetaTable from './components/FeedsMetaTable';

import { DOMAIN_NAME } from '@/store/records';
import PanelRecordState from "@/pages/records/item/components/PanelRecordState";
import PanelSimulationState from "@/pages/records/item/components/PanelSimulationState";
import InputFieldWithBtn from "@/components/InputFieldWithBtn";

const { mapActions, mapState } = createNamespacedHelpers(DOMAIN_NAME);

export default {
  components: { PanelRecordState, PanelSimulationState, FeedsMetaTable, InputFieldWithBtn },
  methods: {
    ...mapActions(['getItem', 'editItem']),
    onChangeItemField(fieldName, newValue) {
      console.log('hhh', fieldName, newValue)
      this.editItem({ ...this.item, [fieldName]: newValue });
    }
  },
  data() {
    return {
      interval: null,
      isEdit: false,
      title: ''
    }
  },
  computed: {
    ...mapState({
      item: s => s.targetItem
    })
  },
  mounted() {
    this.getItem(this.$route.params.id);
    this.interval = setInterval(() => {
      this.getItem(this.$route.params.id);
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  }
}

</script>
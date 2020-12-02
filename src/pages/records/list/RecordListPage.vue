<template>
  <v-container>
    <v-tabs
        v-model="tab"
        align-with-title
    >
      <v-tab :key="0">Record</v-tab>
      <v-tab :key="1">Patterns</v-tab>
      <v-tab :key="2">Labels</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item :key="0">
        <RecordsTab/>
      </v-tab-item>
      <v-tab-item :key="1">
        <PatternTab/>
      </v-tab-item>
      <v-tab-item :key="2">
        <LabelsTab/>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>
<script>
import RecordsTab from '@/pages/records/list/components/tabs/RecordsTab'
import PatternTab from '@/pages/records/list/components/tabs/PatternTabs'
import LabelsTab from '@/pages/records/list/components/tabs/LabelsTab'
export default {
  components: { RecordsTab, PatternTab, LabelsTab },
  data() {
    return {
      tab: 0
    }
  }
}
</script>
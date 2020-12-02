<template>
  <v-container>
    <v-tabs
        v-model="tab"
        align-with-title
    >
      <v-tab :key="0">Record</v-tab>
      <v-tab :key="1">Patterns</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item :key="0">
        <RecordsTab/>
      </v-tab-item>
      <v-tab-item :key="1">
        <PatternTabs/>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>
<script>
import RecordsTab from '@/pages/records/list/components/tabs/RecordsTab'
import PatternTabs from '@/pages/records/list/components/tabs/PatternTabs'

export default {
  components: { RecordsTab, PatternTabs },
  data() {
    return {
      tab: 0
    }
  }
}
</script>
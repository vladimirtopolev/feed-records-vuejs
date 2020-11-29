<template>
  <v-simple-table class="my-4" dense>
    <template v-slot:default>
      <TableHeader/>
      <TableContent :items="items"/>
    </template>
  </v-simple-table>
</template>
<script>
import TableContent from './FeedsMetaTableContent';
import TableHeader from './FeedsMetaTableHeader';

export default {
  props: ['items'],
  components: { TableContent, TableHeader }
}
</script>
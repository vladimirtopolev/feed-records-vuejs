<template>
  <v-container :style="{border: '1px solid #efefef'}" class="elevation-2 my-2 pa-6">
    <EditFeedMetaBtn
        :feed-meta="{fileName: '', feedUrl: ''}"
        @save="(feedMeta) => editFeedMeta({recordId: item.id, feedMeta})">
      <template v-slot:default="{on, attrs}">
        <v-btn
            rounded
            v-bind="attrs"
            v-on="on"
        >
          Create feed meta
        </v-btn>
      </template>
    </EditFeedMetaBtn>
    <v-simple-table class="mt-4" dense>
      <template v-slot:default>
        <TableHeader/>
        <TableContent :item="item"/>
      </template>
    </v-simple-table>
  </v-container>
</template>
<script>
import { createNamespacedHelpers } from 'vuex';
import { DOMAIN_NAME } from '@/store/records';
import EditFeedMetaBtn from "@/pages/records/item/components/EditFeedMetaBtn";
import TableContent from './FeedsMetaTableContent';
import TableHeader from './FeedsMetaTableHeader';

const { mapActions } = createNamespacedHelpers(DOMAIN_NAME);

export default {
  props: ['item'],
  components: { TableContent, TableHeader, EditFeedMetaBtn },
  methods: {
    ...mapActions(['editFeedMeta'])
  }
}
</script>
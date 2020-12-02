<template>
  <tbody>
  <tr
      v-for="feedMeta in item.feedsMeta"
      :key="feedMeta.fileName"
  >
    <td>
      {{ feedMeta.fileName }}
    </td>
    <td>
      {{ feedMeta.feedUrl }}
    </td>
    <td class="text-center">
      <EditFeedMetaBtn
          :feed-meta="feedMeta"
          @save="(feedMeta) => editFeedMeta({feedMeta, recordId: item.id})"
      >
        <template v-slot:default="{attrs, on}">
          <v-btn
              icon
              color="cyan"
              class="ma-1"
              v-bind="attrs"
              v-on="on"
          >
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </template>
      </EditFeedMetaBtn>
      <v-btn
          icon
          color="red"
      >
        <v-icon dark @click="deleteFeedMeta({recordId: item.id, feedMeta: feedMeta})">
          mdi-delete-forever
        </v-icon>
      </v-btn>
    </td>
  </tr>
  </tbody>
</template>
<script>
import { createNamespacedHelpers } from 'vuex';
import { DOMAIN_NAME } from '@/store/records';
import EditFeedMetaBtn from "@/pages/records/item/components/EditFeedMetaBtn";

const { mapActions } = createNamespacedHelpers(DOMAIN_NAME);

export default {
  components: { EditFeedMetaBtn },
  props: ['item'],
  methods: {
    ...mapActions(['deleteFeedMeta', 'editFeedMeta']),
    onProcessChangeState(item, field, newState) {
      this.$emit('editItem', { ...item, [field]: newState })
    }
  }
}
</script>
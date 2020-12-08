<template>
  <div>
    <v-container class="my-4">
      <CreateRecordModal/>
      <v-simple-table class="my-4">
        <template v-slot:default>
          <TableHeader/>
          <TableContent
              :items="items"
              @deleteItem="onDeleteItem"
              @editItem="editItem"
          />
        </template>
      </v-simple-table>
    </v-container>
    <v-container>
      <v-pagination
          class="ma-4"
          v-model="page"
          :length="countPages"
      />
    </v-container>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex';
import { DOMAIN_NAME } from '@/store/records';
import TableHeader from '../record-list-table/TableHeader';
import TableContent from '../record-list-table/TableContent';
import CreateRecordModal from '../create-record-modal/CreateRecordModal';

const { mapState, mapActions } = createNamespacedHelpers(DOMAIN_NAME)

export default {
  components: { TableHeader, TableContent, CreateRecordModal },
  data() {
    return {
      page: 1,
      interval: null
    }
  },
  methods: {
    ...mapActions(['getItems', 'deleteItem', 'editItem']),
    onDeleteItem(item) {
      this.deleteItem(item)
          .then(() => {
            this.getItems({ offset: this.offset, limit: this.limit })
          })
    }
  },
  computed: {
    ...mapState({
      items: s => s.items,
      count: s => s.count,
      offset: s => s.offset,
      limit: s => s.limit
    }),
    countPages() {
      return Math.ceil(this.count / this.limit);
    }
  },
  watch: {
    page() {
      this.getItems({
        offset: (this.page - 1) * this.limit,
        limit: this.limit
      })
    }
  },
  mounted() {
    this.getItems();
    this.interval = setInterval(() => this.getItems(), 1000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  }
}
</script>
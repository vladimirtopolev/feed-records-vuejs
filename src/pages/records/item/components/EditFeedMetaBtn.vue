<template>

    <v-dialog
        v-model="dialog"
        width="500"
    >
      <template v-slot:activator="events">
        <slot v-bind="events"></slot>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          Feed meta editor
        </v-card-title>

        <v-card-text>
          <v-text-field
              v-model="fileName"
              label="FileName"
          />
          <v-text-field
              v-model="feedUrl"
              label="FeedUrl"
          />
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="primary"
              text
              @click="dialog = false"
          >
            Cancel
          </v-btn>
          <v-btn
              color="primary"
              text
              @click="onSaveFeedMeta"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>
<script>
export default {
  props: ['feedMeta'],
  data() {
    return {
      dialog: false,
      fileName: '',
      feedUrl: ''
    }
  },
  watch: {
    dialog() {
      this.fileName = this.feedMeta.fileName.slice();
      this.feedUrl = this.feedMeta.feedUrl.slice();
    }
  },
  methods: {
    onSaveFeedMeta() {
      this.dialog = false;
      const meta = Object.assign({ fileName: this.fileName, feedUrl: this.feedUrl },
      this.feedMeta.id ? {id: this.feedMeta.id}: {});
      this.$emit('save', meta);
    }
  }
}
</script>
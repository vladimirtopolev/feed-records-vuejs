<template>
  <div class="text-center">
    <v-dialog
        v-model="dialog"
        width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            x-small
            class="ma-1"
            v-bind="attrs"
            v-on="on"
        >
          {{ btnTitle }}
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          Label editor
        </v-card-title>

        <v-card-text>
          <div class="my-3">{{ label.step }}</div>
          <v-text-field
              v-model="title"
              label="Label text"
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
              @click="onSaveLabel"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  props: ['btnTitle', 'label'],
  data() {
    return {
      dialog: false,
      title: ''
    }
  },
  watch:{
    dialog(){
      this.title = this.label.label.slice();
    }
  },
  methods: {
    onSaveLabel() {
      this.dialog = false;
      this.$emit('saveLabel', { step: this.label.step, label: this.title });
    }
  }
}
</script>
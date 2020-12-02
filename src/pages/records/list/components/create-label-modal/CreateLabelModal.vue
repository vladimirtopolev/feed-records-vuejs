<template>
  <div>
    <v-dialog
        v-model="dialog"
        width="800"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            rounded
            v-bind="attrs"
            v-on="on"
        >
          Create label
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2">
          Create label
        </v-card-title>
        <v-card-text>
          <v-text-field v-model="name" label="Label text"/>
          <ColorPicker v-model="color"/>
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn @click="onSave">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import ColorPicker from "@/components/ColorPicker";

const LABEL_PATTERN = {
  name: '',
  color: 'rgba(0, 0, 0, 1)'
}
export default {
  components: { ColorPicker },
  data() {
    return {
      dialog: false,
      color: LABEL_PATTERN.color,
      name: LABEL_PATTERN.name
    }
  },
  watch: {
    dialog() {
      if (this.dialog === false) {
        this.label = {color: LABEL_PATTERN.color, name: LABEL_PATTERN.name}
      }
    }
  },
  methods: {
    onSave() {
      const { color, name } = this;
      this.$emit('save', { color, name });
      this.dialog = false;
    }
  }
}
</script>
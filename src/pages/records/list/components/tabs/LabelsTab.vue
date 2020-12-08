<template>
  <v-container>

    <v-col>
      <CreateLabelModal @save="(label)=>createItem(label)"/>
    </v-col>
    <div class="d-flex flex-wrap">
      <v-col
          cols="3"
          v-for="item in items"
          :key="item.id">
        <v-card>
          <v-card-text>
            <div>
              <InputFieldWithBtn
                  :value="item.name"
                  @save="(val) => changeItemField(item, 'name', val)">
                <template v-slot:cancelBtn>
                  <v-icon x-small>mdi-close</v-icon>
                </template>
                <template v-slot:saveBtn>
                  <v-icon x-small>mdi-check</v-icon>
                </template>
              </InputFieldWithBtn>
            </div>
            <div class="mt-1">
              <ColorPicker
                  :value="item.color"
                  @input="(val) => changeItemField(item, 'color', val)"/>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn
                x-small
                color="red"
                class="white--text"
                @click="deleteItem(item)"
            >
              <v-icon size="x-small" class="mr-1">mdi-close</v-icon>
              Delete
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

    </div>
  </v-container>
</template>
<script>
import { createNamespacedHelpers } from 'vuex';
import { DOMAIN_NAME } from '@/store/labels'
import ColorPicker from "@/components/ColorPicker";
import InputFieldWithBtn from "@/components/InputFieldWithBtn";
import CreateLabelModal from "@/pages/records/list/components/create-label-modal/CreateLabelModal";

const { mapActions, mapState } = createNamespacedHelpers(DOMAIN_NAME);

export default {
  components: { ColorPicker, InputFieldWithBtn, CreateLabelModal },
  methods: {
    ...mapActions(['getItems', 'editItem', 'deleteItem', 'createItem']),
    changeItemField(item, fieldName, newValue) {
      console.log(newValue);
      this.editItem({ ...item, [fieldName]: newValue });
    }
  },
  computed: {
    ...mapState({
      items: s => s.items
    })
  },
  mounted() {
    this.getItems();
  }
}
</script>
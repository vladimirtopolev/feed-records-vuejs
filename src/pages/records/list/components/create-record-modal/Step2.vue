<template>
  <v-sheet
      height="100%"
      tile
  >
    <v-row
        class="fill-height"
        align="center"
        justify="center"
    >
      <div class="display-3">
        <v-select
            :items="items"
            item-text="name"
            return-object
            v-model="pattern"
            @input="$emit('input', pattern)"
            label="Choose pattern"
        />
      </div>
    </v-row>
  </v-sheet>

</template>

<script>
import { DOMAIN_NAME } from '@/store/patterns'
import { createNamespacedHelpers } from 'vuex';

const { mapState } = createNamespacedHelpers(DOMAIN_NAME);

export default {
  props: ['value'],
  watch: {
    value() {
      this.pattern = this.value;
    }
  },
  data() {
    return {
      pattern: null
    }
  },
  computed: {
    ...mapState({
      items: s => s.items
    }),
  },
  mounted() {
    console.log('MOUNTED')
    this.$store.dispatch(`${DOMAIN_NAME}/getItems`)
  }
}
</script>
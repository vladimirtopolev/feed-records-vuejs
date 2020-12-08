<template>
  <div>
    <v-dialog
        v-model="dialog"
        width="800"
        @click:outside="resetModal"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            rounded
            v-bind="attrs"
            v-on="on"
        >
          {{ $t('recordModule.createNewRecordSetModal_btn') }}
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2">
          {{ $t('recordModule.createNewRecordSetModal_title') }}
        </v-card-title>

        <v-carousel
            light
            v-model="step"
            height="500"
            :hide-delimiters="true"
            :show-arrows="false"
        >
          <v-carousel-item>
            <Step1
                :name.sync="name"
                :createStrategy.sync="createStrategy"
            />
          </v-carousel-item>
          <v-carousel-item>
            <Step2 v-model="pattern"/>
          </v-carousel-item>
          <v-carousel-item>
            <Step3
                :pattern="pattern"
                @changeFeedsMeta="onChangeFeedsMeta"
            />
          </v-carousel-item>
        </v-carousel>

        <v-divider></v-divider>

        <ModalActionButtons
            :createStrategy="createStrategy"
            :step.sync="step"
            :pattern="pattern"
            :dialog.sync="dialog"
            :maxSteps="2"
            @resetModal="resetModal"
            @createItem="onCreateItem"
        />
      </v-card>
    </v-dialog>
    <v-overlay :value="isLoading" :z-index="1000" :opacity="0.8">
      <v-progress-circular
          indeterminate
          color="amber"
      />
    </v-overlay>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import { DOMAIN_NAME } from '@/store/records'
import ModalActionButtons from './ModalActionButtons';
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const { mapActions, mapState } = createNamespacedHelpers(DOMAIN_NAME);

export default {
  components: { Step1, Step2, Step3, ModalActionButtons },
  data() {
    return {
      isLoading: false,
      dialog: false,
      name: '',
      step: 0,
      createStrategy: 0,
      pattern: null,
      feedsMeta: []
    }
  },
  computed: {
    ...mapState({
      createdItem: s => s.targetItem
    })
  },
  methods: {
    ...mapActions(['createItem']),
    resetModal() {
      this.name = '';
      this.step = 0;
      this.createStrategy = 0;
      this.pattern = null
    },
    onChangeFeedsMeta(feedsMeta) {
      this.feedsMeta = feedsMeta;
    },
    onCreateItem() {
      let creatingItem = {
        name: this.name
      }
      if (this.createStrategy === 1) {
        creatingItem.feedsMeta = this.feedsMeta;
      }
      this.isLoading = true;
      this.createItem(creatingItem)
          .then(() => {
            this.$router.push({ name: 'recordItem', params: { id: this.createdItem.id } })
          });
    }
  }
}
</script>
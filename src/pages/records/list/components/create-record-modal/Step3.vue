<template>
  <v-sheet
      height="100%"
      tile
  >
    <v-container>
      <h4 class="my-2">Set template variables for pattern {{ pattern.name }}</h4>
      <v-row
          class="fill-height"
          align="center"
          justify="flex-start"
      >
        <v-col
            cols="12"
            sm="6"
            md="4"
            v-for="variable in variables"
            :key="variable.name"
        >
          <v-text-field
              dense
              :label="variable.key"
              :value="variable.value"
              @input="(newVal) => onChange(variable, newVal)"
          />
        </v-col>
      </v-row>
      <PreviewFilledPattern :handledFeeds="handledFeeds"/>
    </v-container>
  </v-sheet>
</template>
<script>
import PreviewFilledPattern from './PreviewFilledPattern';
import { v4 } from 'uuid';

export default {
  components: { PreviewFilledPattern },
  props: ['pattern'],
  data() {
    return {
      variables: [],
      handledFeeds: []
    }
  },
  methods: {
    initPatternVariables() {
      this.variables.splice(0);
      this.pattern.variables.map((variable, i) => {
        this.variables.splice(i, 0, { ...variable, value: '' })
      });
      this.handledFeeds.splice(0);
    },
    onChange(variable, newVal) {
      variable.value = newVal;
      this.fillPatternFeeds();
    },
    fillPatternFeeds() {
      const variables = this.variables;
      this.handledFeeds = this.pattern.feedsMeta.map((feed) => {
        let feedUrl = feed.feedUrl;
        let fileName = feed.fileName;
        variables.map(({ key }, i) => {
          const value = variables[i].value;
          const placeholder = '${' + key + '}';
          feedUrl = feedUrl.replaceAll(placeholder, value);
          fileName = fileName.replaceAll(placeholder, value);
        });
        return { fileName, feedUrl, id: v4() };
      });
      this.$emit('changeFeedsMeta', this.handledFeeds);
    }
  },
  watch: {
    pattern() {
      this.initPatternVariables();
    }
  },
  beforeMount() {
    this.initPatternVariables();
  }
}
</script>
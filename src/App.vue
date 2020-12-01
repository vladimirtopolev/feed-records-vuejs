<template>
  <PageLayout/>
</template>

<script>
import PageLayout from '@/components/layout/PageLayout';

export default {
  name: 'App',

  components: {
    PageLayout
  },
  beforeMount() {
    this.$store.dispatch('initUser');
  }
};
</script>

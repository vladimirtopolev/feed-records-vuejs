<template>
  <v-container class="justify-center align-center d-flex flex-column" :style="{height: '100%'}">
    <div class="text-h4 ma-6">TestSystem</div>
    <v-sheet
        color="white"
        elevation="4"
        height="230"
        width="400"
        class="pa-6"
    >
      <v-text-field
          label="Username/Email"
          v-model="identifier"
      />
      <v-text-field
          label="Password"
          type="password"
          v-model="password"
      />
      <v-btn @click="onLogin">Login</v-btn>
    </v-sheet>

  </v-container>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      identifier: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['login']),
    onLogin() {
      const { identifier, password } = this;
      this.login({ identifier, password })
          .then(() => {
            this.$router.push({ name: 'recordList' })
          });
    }
  }
}
</script>
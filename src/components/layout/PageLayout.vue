<template>
  <v-app>
    <v-app-bar
        app
        dark
    >
      <v-layout row justify-center>
        <v-toolbar dark class="px-3">
          <v-toolbar-title class="d-flex">
            <v-img
                alt="Vuetify Logo"
                class="shrink mr-4"
                contain
                src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
                transition="scale-transition"
                width="40"
            />
            <v-img
                alt="Vuetify Name"
                class="shrink mt-1 hidden-sm-and-down"
                contain
                min-width="100"
                src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
                width="100"
            />
          </v-toolbar-title>
          <v-toolbar-items color="rgb(25, 118, 210)" class="mx-4">
            <v-btn to="/records">Records</v-btn>
          </v-toolbar-items>
          <v-toolbar-items class="align-center justify-end flex-grow-1">
            <v-select
                v-model="locale"
                hide-details="auto"
                prepend-icon="mdi-web"
                :style="{flex: 'unset', maxWidth: '110px'}"
                dense
                solo
                :flat="true"
                :items="$i18n.availableLocales"
                @input="onChangeLocale"
                outlined
            />
          </v-toolbar-items>
        </v-toolbar>
      </v-layout>

    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      locale: 'en'
    }
  },
  methods: {
    onChangeLocale() {
      this.$i18n.locale = this.locale
    }
  }
}
</script>
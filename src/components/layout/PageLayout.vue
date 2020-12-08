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
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-avatar
                    color="red"
                    v-show="user && user.firstName"
                    size="40"
                    class="mx-4 px-4"
                    v-bind="attrs"
                    v-on="on"
                >
                  <span class="white--text headline">{{ getProfileAbbr() }}</span>
                </v-avatar>
              </template>
              <v-list dense>
                <v-list-item-group>
                  <v-list-item dense :inactive="true" :key="0">
                    <v-list-item-content>
                      <v-list-item-title @click="onLogout">Logout</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-menu>

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
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      locale: 'en'
    }
  },
  computed: {
    ...mapState({
      user: s => s.auth.user
    })
  },
  watch: {
    user(val) {
      console.log('CHANGES USER IN PAGE LAYOUT', this.user, val)
    }
  },
  methods: {
    ...mapActions(['logout']),
    onChangeLocale() {
      this.$i18n.locale = this.locale
    },
    onLogout() {
      this.logout()
          .then(() => {
            this.$router.push('/login')
          })
    },
    getProfileAbbr() {
      const { user } = this;
      const firstName = user && user.firstName ? user.firstName.charAt(0) : '';
      const lastName = user && user.lastName ? user.lastName.charAt(0) : '';
      const profile = firstName + lastName;
      return profile === '' ? 'U' : profile;
    }
  },
}
</script>
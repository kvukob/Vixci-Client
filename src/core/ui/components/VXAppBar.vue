<template>
  <v-app-bar absolute app>
    <div class="mr-1 ml-5 text-overline">Vixci</div>
    <v-icon>mdi-dots-vertical</v-icon>
    <v-btn to="/app"> Dashboard </v-btn>
    <v-spacer />
    <v-btn icon>
      <v-icon>mdi-account</v-icon>
      <v-menu activator="parent">
        <v-list class="d-flex flex-column">
          <v-list-subheader>General</v-list-subheader>
          <v-btn :to="{ name: 'app-settings' }" prepend-icon="mdi-cog"
            >Settings</v-btn
          >
          <v-list-subheader>Community</v-list-subheader>
          <v-btn to="/fre" prepend-icon="mdi-account-group">Friends</v-btn>
          <v-btn to="/gr" prepend-icon="mdi-home-group">Groups</v-btn>
          <v-divider class="ma-2" />
          <v-btn prepend-icon="mdi-logout" @click="logout()">Logout</v-btn>
        </v-list>
      </v-menu>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { useAccountStore } from "@/core/account/store";
export default {
  name: "VXAppBar",

  data: () => ({}),

  methods: {
    async logout() {
      const accountStore = useAccountStore();
      accountStore.setIsLoggedIn(false);
      accountStore.setToken("");
      await this.$router.push("/");
    },
  },
};
</script>

<template>
  <v-app-bar absolute app>
    <v-btn to="/">Home</v-btn>
    <v-btn>
      Community
      <v-menu activator="parent">
        <v-list>
          <v-btn to="/fre">Friends</v-btn>
          <v-btn to="/gr">Groups</v-btn>
        </v-list>
      </v-menu>
    </v-btn>
    <v-spacer />
    <v-btn to="/login">Login</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "VXAppBar",
};
</script>

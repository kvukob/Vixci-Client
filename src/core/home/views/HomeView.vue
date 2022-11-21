<template>
  <v-row>
    <v-col>
      <v-sheet>
        <span class="text-h4">Welcome to Vixci</span>
        <br />
        <v-btn color="primary" :to="{ name: 'login' }">Login</v-btn>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  components: {},
});
</script>

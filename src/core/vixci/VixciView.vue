<template>
  <v-container fluid>
    <VXAppBar />
    <router-view />
  </v-container>
</template>

<script>
import VXAppBar from "@/core/ui/components/VXAppBar";
export default {
  name: "VixciView",
  components: { VXAppBar },
};
</script>

<style scoped></style>

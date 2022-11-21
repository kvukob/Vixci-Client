<template>
  <VXCard title="Account" icon="mdi-account">
    <v-list>
      <v-list-item>
        <v-list-item-title>Email</v-list-item-title>
        <v-list-item-subtitle>kvukob@gmail.com</v-list-item-subtitle>
        <template v-slot:append>
          <v-btn color="primary" variant="tonal">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </template>
      </v-list-item>
      <v-list-item>
        <v-list-item-title>Password</v-list-item-title>
        <template v-slot:append>
          <v-btn color="primary" variant="tonal">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </template>
      </v-list-item>
    </v-list>
  </VXCard>
</template>

<script>
import VXCard from "@/core/ui/components/VXCard";
export default {
  name: "SettingsAccountCard",
  components: { VXCard },
};
</script>

<style scoped></style>

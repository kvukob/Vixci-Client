<template>
  <div>
    <v-row class="d-flex flex-column align-center">
      <v-col cols="6">
        <SettingsAccountCard />
      </v-col>
      <v-col cols="6">
        <SettingsDangerCard />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SettingsAccountCard from "@/core/settings/components/SettingsAccountCard";
import SettingsDangerCard from "@/core/settings/components/SettingsDangerCard";
export default {
  name: "SettingsView",
  components: { SettingsDangerCard, SettingsAccountCard },
};
</script>

<style scoped></style>

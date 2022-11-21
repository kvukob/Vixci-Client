<template>
  <VXCard title="Danger Area" icon="mdi-alert-octagram-outline">
    <v-list>
      <v-list-item>
        <v-list-item-title> Account Deletion </v-list-item-title>
        <v-alert class="ma-5" variant="tonal" color="warning">
          <span>
            Deleting your account is <strong>permanent</strong> and cannot be
            undone. We delete all personal data - there will be no record of you
            ever being here.
          </span>
          <v-divider class="ma-5" />
          <div class="d-flex justify-end">
            <v-btn color="error" variant="outlined">Delete Account</v-btn>
          </div>
        </v-alert>
      </v-list-item>
    </v-list>
  </VXCard>
</template>

<script>
import VXCard from "@/core/ui/components/VXCard";
export default {
  name: "SettingsDangerCard",
  components: { VXCard },
  data: () => ({}),

  methods: {},
};
</script>

<style scoped></style>

<template>
  <v-card>
    <v-card-title class="d-flex align-center justify-space-between">
      {{ title }}
      <v-avatar color="secondary" variant="text">
        <v-icon>{{ icon }}</v-icon>
      </v-avatar>
    </v-card-title>
    <slot />
  </v-card>
</template>

<script>
export default {
  name: "VXCard",

  props: {
    title: String,
    icon: String,
  },
};
</script>

<style scoped></style>

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

// Vuetify
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify, ThemeDefinition } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@/variables.scss";
const myCustomLightTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: "#1a1a1a",
    surface: "#252422",
    primary: "#03DAC6",
    secondary: "#FFE0B5",
    error: "#FE5F55",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
};

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "myCustomLightTheme",
    themes: {
      myCustomLightTheme,
    },
  },
  defaults: {
    VCard: {
      flat: "true",
    },
    VTextField: {
      density: "compact",
      variant: "outlined",
    },
    VBtn: {
      variant: "tonal",
    },
  },
});

createApp(App).use(createPinia()).use(router).use(vuetify).mount("#app");

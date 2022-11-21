<template>
  <div class="center">
    <v-sheet class="pa-5" width="320" color="transparent">
      <div class="d-flex flex-column justify-center align-center mb-5">
        <v-icon size="64" color="secondary">mdi-account</v-icon>
        <span class="text-h4">Login</span>
      </div>
      <v-form ref="form" v-model="form.validForm">
        <label class="text-overline">Email</label>
        <v-text-field
          color="primary"
          prepend-icon="mdi-email-outline"
          type="email"
          v-model="form.user.email"
        />
        <label class="text-overline">Password</label>
        <v-text-field
          color="primary"
          prepend-icon="mdi-lock-outline"
          type="password"
          v-model="form.user.password"
        />
        <v-divider thickness="0" class="mt-4" />
        <v-alert
          color="error"
          variant="outlined"
          v-if="form.errorMsg"
          class="mb-5 mt-5"
        >
          <template v-slot:prepend>
            <v-icon>mdi-exclamation</v-icon>
          </template>
          {{ form.errorMsg }}
        </v-alert>
        <v-btn block color="primary" variant="tonal" @click="login">
          Login
        </v-btn>
      </v-form>
      <v-divider class="ma-5" />
      <v-btn block variant="text" class="text-subtitle-2" to="sign-up">
        Need an account? Sign up!
      </v-btn>
      <v-btn block variant="plain" class="text-subtitle-2">
        Forgot your password?
      </v-btn>
    </v-sheet>
  </div>
</template>

<script>
import fetcher from "@/util/fetcher";
import routes from "@/util/fetcher/routes";
import { useAccountStore } from "@/core/account/store";

export default {
  name: "AccountLoginView",

  data: () => ({
    accountStore: useAccountStore(),
    form: {
      user: {
        email: "",
        password: "",
      },
      errorMsg: "",
      validForm: false,
    },
  }),

  methods: {
    async login() {
      let request = {
        email: this.form.user.email,
        password: this.form.user.password,
      };
      let response = await fetcher.postData(routes.account.login, request);
      if (response.success) {
        this.accountStore.setIsLoggedIn(true);
        this.accountStore.setToken(response.data.token);
        await this.$router.push("/app");
      } else if (!response.success) {
        this.form.errorMsg = response.message;
      }
    },
  },
};
</script>

<style scoped>
.center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>

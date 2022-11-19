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
        <v-btn block color="primary" variant="tonal" @click="login">
          Login
        </v-btn>
      </v-form>
      <v-divider class="ma-5" />
      <v-btn block variant="text" class="text-subtitle-2" to="signup">
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

export default {
  name: "AccountLoginView",

  data: () => ({
    form: {
      user: {
        email: "",
        password: "",
      },
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
      console.log(response);
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

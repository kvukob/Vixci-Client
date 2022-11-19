<template>
  <div class="center">
    <v-sheet class="pa-5" width="320" color="transparent" v-if="form.showForm">
      <div class="d-flex flex-column justify-center align-center mb-5">
        <v-icon size="64" color="secondary">mdi-account</v-icon>
        <span class="text-h4">Sign up</span>
      </div>
      <v-form ref="form" v-model="form.validForm">
        <label class="text-overline">Email</label>
        <v-text-field
          color="primary"
          type="email"
          v-model="form.user.email"
          :rules="emailRules"
        >
          <template v-slot:prepend>
            <v-icon :color="emailIconColor"> mdi-email-outline </v-icon>
          </template>
        </v-text-field>
        <v-divider thickness="0" class="mt-4" />
        <v-btn
          block
          color="primary"
          variant="tonal"
          @click="signUp"
          :disabled="!form.validForm"
          :loading="form.loading"
        >
          Sign Up
        </v-btn>
      </v-form>
      <v-divider class="ma-5" />
      <v-btn block variant="text" class="text-subtitle-2" to="/login">
        Back to Login
      </v-btn>
    </v-sheet>
    <v-sheet class="pa-5" width="320" color="transparent" v-if="!form.showForm">
      <div class="d-flex flex-column justify-center align-center mb-5">
        <v-icon size="64" color="secondary">mdi-check</v-icon>
        <span class="text-h4">Almost There!</span>
        <span class="text-center text-h5 mt-5">{{ form.message }}</span>
      </div>
    </v-sheet>
  </div>
</template>

<script>
import fetcher from "@/util/fetcher";
import routes from "@/util/fetcher/routes";
export default {
  name: "AccountSignUpView",

  data: () => ({
    form: {
      user: {
        email: "",
      },
      showForm: true,
      validForm: false,
      loading: false,
      message: "",
    },
  }),

  computed: {
    emailRules() {
      return [
        (v) => !!v || "Required",
        (v) =>
          (!!v && !v) ||
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid",
      ];
    },
    emailIconColor() {
      let pass = false;
      this.emailRules.forEach((r) => {
        pass = r(this.form.user.email);
      });
      return pass === true ? "success" : "";
    },
  },

  methods: {
    async signUp() {
      this.$refs.form.validate();
      this.form.loading = true;
      let request = {
        email: this.form.user.email,
      };
      let response = await fetcher.postData(routes.account.signUp, request);

      this.form.message = response.message;
      this.form.showForm = false;
      this.form.loading = false;
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

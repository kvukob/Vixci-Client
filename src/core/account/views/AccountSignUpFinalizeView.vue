<template>
  <div class="center">
    <v-sheet class="pa-5" width="320" color="transparent" v-if="form.showForm">
      <div class="d-flex flex-column justify-center align-center mb-5">
        <v-icon size="64" color="secondary">mdi-lock-outline</v-icon>
        <span class="text-center text-h4"> Choose Your Password </span>
      </div>
      <v-form ref="form" v-model="form.validForm">
        <label class="text-overline">Password</label>
        <v-text-field
          color="primary"
          type="password"
          v-model="form.user.password"
          :rules="passwordRules"
        >
          <template v-slot:prepend>
            <v-icon :color="passwordIconColor">mdi-lock-outline</v-icon>
          </template>
        </v-text-field>
        <label class="text-overline">Confirm Password</label>
        <v-text-field
          color="primary"
          type="password"
          v-model="form.user.confirmPassword"
          :rules="confirmPasswordRules"
        >
          <template v-slot:prepend>
            <v-icon :color="confirmPasswordIconColor">mdi-lock-outline</v-icon>
          </template>
        </v-text-field>
        <v-divider thickness="0" class="mt-4" />
        <v-btn
          block
          color="primary"
          variant="tonal"
          @click="signUp"
          :disabled="!form.validForm"
        >
          Finish
        </v-btn>
      </v-form>
    </v-sheet>
    <v-sheet class="pa-5" width="320" color="transparent" v-if="!form.showForm">
      <div class="d-flex flex-column justify-center align-center mb-5">
        <v-icon size="64" color="secondary">mdi-check</v-icon>
        <span class="text-h4">You're all set!</span>
        <v-divider class="ma-5" />
        <v-btn block variant="text" class="text-subtitle-2" to="/login">
          Back to Login
        </v-btn>
      </div>
    </v-sheet>
  </div>
</template>

<script>
import fetcher from "@/util/fetcher";
import routes from "@/util/fetcher/routes";
export default {
  name: "AccountSignUpFinalizeView",

  data: () => ({
    form: {
      user: {
        password: "",
        confirmPassword: "",
      },
      showForm: true,
      validForm: false,
    },
  }),

  computed: {
    code() {
      return this.$route.params.code;
    },
    passwordRules() {
      return [
        (v) => !!v || "Required",
        (v) => v.length >= 8 || "Minimum length of 8 characters",
      ];
    },
    confirmPasswordRules() {
      return [
        (v) => !!v || "Required",
        (v) => this.form.user.password === v || "Passwords must match",
      ];
    },
    passwordIconColor() {
      let pass = false;
      this.passwordRules.forEach((r) => {
        pass = r(this.form.user.password);
      });
      return pass === true ? "success" : "";
    },
    confirmPasswordIconColor() {
      if (this.form.user.confirmPassword.length) {
        let pass = false;
        this.confirmPasswordRules.forEach((r) => {
          pass = r(this.form.user.confirmPassword);
        });
        return pass === true ? "success" : "";
      }
      return "";
    },
  },

  methods: {
    async signUp() {
      this.$refs.form.validate();
      let request = {
        code: this.code,
        password: this.form.user.password,
      };
      let response = await fetcher.postData(
        routes.account.signUpFinalize,
        request
      );
      if (response.success) {
        this.form.showForm = false;
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

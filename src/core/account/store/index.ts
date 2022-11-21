import { defineStore } from "pinia";

export const useAccountStore = defineStore("account", {
  state: () => ({
    isLoggedIn: false,
    token: "",
  }),
  getters: {
    getIsLoggedIn: (state) => state.isLoggedIn,
    getToken: (state) => state.token,
  },
  actions: {
    setIsLoggedIn(flag: boolean) {
      this.isLoggedIn = flag;
    },
    setToken(token: string) {
      this.token = token;
    },
  },
});

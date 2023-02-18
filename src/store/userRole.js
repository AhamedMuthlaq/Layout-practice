import { defineStore } from "pinia";

export const userRoleStore = defineStore("userRoleStore", {
  state: () => ({
    role: null,
    adminEmail: "admin@gmail.com",
  }),
  getters: {
    role() {
      return this.role;
    },
    adminEmail() {
      return this.adminEmail;
    },
    isAdmin() {
      return this.role === "admin";
    },
  },
  actions: {
    setRole(role) {
      this.role = role;
    },
  },
});

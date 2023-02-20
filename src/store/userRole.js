import { defineStore } from "pinia";

export const userRoleStore = defineStore("userRoleStore", {
  state: () => {
    return {
      role: null,
      adminEmail: "admin@gmail.com",
    };
  },
  getters: {
    getRole() {
      return this.role;
    },
    getAdminEmail() {
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

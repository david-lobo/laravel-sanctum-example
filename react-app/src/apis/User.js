import Api from "./Api";
import Csrf from "./Csrf";

const User = {
  async register(form) {
    await Csrf.getCookie();

    return Api.post("/register", form);
  },

  async forgotPassword(form) {
    await Csrf.getCookie();

    return Api.post("/forgot-password", form);
  },

  async resetPassword(form) {
    await Csrf.getCookie();

    return Api.post("/reset-password", form);
  },

  async login(form) {
    await Csrf.getCookie();
    
    return Api.post("/login", form);
  },

  async logout() {
    
    await Csrf.getCookie();

    return Api.post("/logout");
  },

  async auth() {
    return Api.get("/user");
  }
};

export default User;

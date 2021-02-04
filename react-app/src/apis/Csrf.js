import Cookie from "js-cookie";
import Web from  './Web';

const Csrf = {
  getCookie() {
    let token = Cookie.get("XSRF-TOKEN");

    if (token) {
      return new Promise(resolve => {
        resolve(token);
      });
    }

    return Web.get("/sanctum/csrf-cookie");
  },
  removeCookie() {
    Cookie.remove('XSRF-TOKEN');
  }
};

export default Csrf;

import Cookies from "js-cookie";

const token = {
  set(token, expiresTime) {
    Cookies.set("access_token", token, { expires: expiresTime });
  },
  get() {
    Cookies.get("access_token");
  },
  remove() {
    Cookies.remove('access_token')
  }
};

export default token;

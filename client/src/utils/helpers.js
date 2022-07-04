import jwtDecode from "jwt-decode";
import api from "utils/api";

const isLoggedIn = () => {
  const token = window.localStorage.getItem("token");

  if (token) {
    const decodedToken = jwtDecode(token);
    if (decodedToken.exp * 1000 < Date.now()) {
      return false;
    }

    api.setAuthorizationHeader(token);

    return true;
  }
  return false;
};

export default { isLoggedIn };

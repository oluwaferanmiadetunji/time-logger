import axios from "axios";
import { toast } from "react-toast";
import constants from "utils/constant";

const setAuthorizationHeader = (payload) => {
  const token = `Bearer ${payload}`;
  localStorage.setItem("token", token);
  axios.defaults.headers.common.Authorization = token;
};

const createNewUser = async (payload) => {
  try {
    await axios.post(constants.API_ROUTES.SIGNUP, payload);
    toast.success("Account created successfully");

    setTimeout(() => {
      window.location.href = constants.ROUTES.SIGNIN;
    }, 1000);
  } catch (error) {
    toast.error(error.response.data.message || "Error creating account!");
  }
};

const signin = async (payload) => {
  try {
    const response = await axios.post(constants.API_ROUTES.SIGNIN, payload);
    toast.success("Login successful");

    setAuthorizationHeader(response.data.access_token);

    window.location.href = constants.ROUTES.DASHBOARD;
  } catch (error) {
    toast.error(error.response.data.message || "Invalid credentials!");
  }
};

const logout = async () => {
  window.localStorage.removeItem("token");
  window.location.href = constants.ROUTES.SIGNIN;
};

export default { createNewUser, signin, setAuthorizationHeader, logout };

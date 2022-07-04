import axios from "axios";
import { toast } from "react-toast";

const createNewUser = async ({ email, password, name }) => {
  try {
    await axios.post("/user", { email, name, password });
    toast.success("Account created successfully");
    setTimeout(() => {
      window.location.href = "/authentication/sign-in";
    }, 1000);
  } catch (error) {
    toast.error("Error creating account!");
  }
};

export default { createNewUser };

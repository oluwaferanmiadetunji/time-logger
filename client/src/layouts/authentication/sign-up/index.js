import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiInput from "components/SuiInput";
import SuiButton from "components/SuiButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";
import Socials from "layouts/authentication/components/Socials";
import Separator from "layouts/authentication/components/Separator";

// Images
import curved6 from "assets/images/curved-images/curved14.jpg";
import { toast } from "react-toast";
import api from "utils/api";
import CircularProgress from "@mui/material/CircularProgress";

function SignUp() {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    await api.createNewUser(state);
    toast.success("Form submitted");
    setLoading(false);
  };

  return (
    <BasicLayout title="Welcome!" description="" image={curved6}>
      <Card>
        <SuiBox p={3} mb={1} textAlign="center">
          <SuiTypography variant="h5" fontWeight="medium">
            Register with
          </SuiTypography>
        </SuiBox>
        <SuiBox mb={2}>
          <Socials />
        </SuiBox>
        <Separator />
        <SuiBox pt={2} pb={3} px={3}>
          <SuiBox component="form" role="form">
            <SuiBox mb={2}>
              <SuiInput
                placeholder="Name"
                name="name"
                value={state.name}
                onChange={handleChange}
                required
              />
            </SuiBox>
            <SuiBox mb={2}>
              <SuiInput
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                required
              />
            </SuiBox>
            <SuiBox mb={2}>
              <SuiInput
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                required
              />
            </SuiBox>

            <SuiBox mt={4} mb={1}>
              <SuiButton
                variant="gradient"
                color="dark"
                fullWidth
                onClick={handleSubmit}
                disabled={!state.name || !state.email || !state.password || loading}
              >
                {loading ? <CircularProgress color="success" size={20} /> : "sign up"}
              </SuiButton>
            </SuiBox>
            <SuiBox mt={3} textAlign="center">
              <SuiTypography variant="button" color="text" fontWeight="regular">
                Already have an account?&nbsp;
                <SuiTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="dark"
                  fontWeight="bold"
                  textGradient
                >
                  Sign in
                </SuiTypography>
              </SuiTypography>
            </SuiBox>
          </SuiBox>
        </SuiBox>
      </Card>
    </BasicLayout>
  );
}

export default SignUp;

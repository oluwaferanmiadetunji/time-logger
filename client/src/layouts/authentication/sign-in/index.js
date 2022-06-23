// react-router-dom components
import { Link } from "react-router-dom";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiInput from "components/SuiInput";
import SuiButton from "components/SuiButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import curved6 from "assets/images/curved-images/curved14.jpg";

function SignIn() {
  return (
    <CoverLayout
      title="Welcome back"
      description="Enter your email and password to sign in"
      image={curved6}
      color="dark"
    >
      <SuiBox component="form" role="form">
        <SuiBox mb={2}>
          <SuiBox mb={1} ml={0.5}>
            <SuiTypography
              component="label"
              variant="caption"
              fontWeight="bold"
            >
              Email
            </SuiTypography>
          </SuiBox>
          <SuiInput type="email" placeholder="Email" />
        </SuiBox>
        <SuiBox mb={2}>
          <SuiBox mb={1} ml={0.5}>
            <SuiTypography
              component="label"
              variant="caption"
              fontWeight="bold"
            >
              Password
            </SuiTypography>
          </SuiBox>
          <SuiInput type="password" placeholder="Password" />
        </SuiBox>

        <SuiBox mt={4} mb={1}>
          <SuiButton variant="gradient" color="dark" fullWidth>
            sign in
          </SuiButton>
        </SuiBox>
        <SuiBox mt={3} textAlign="center">
          <SuiTypography variant="button" color="text" fontWeight="regular">
            Don&apos;t have an account?{" "}
            <SuiTypography
              component={Link}
              to="/authentication/sign-up"
              variant="button"
              color="dark"
              fontWeight="medium"
              textGradient
            >
              Sign up
            </SuiTypography>
          </SuiTypography>
        </SuiBox>
      </SuiBox>
    </CoverLayout>
  );
}

export default SignIn;

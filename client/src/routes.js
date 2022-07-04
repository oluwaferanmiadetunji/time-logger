import { lazy } from "react";

// Soft UI Dashboard React icons
import Shop from "examples/Icons/Shop";
import Document from "examples/Icons/Document";
import SpaceShip from "examples/Icons/SpaceShip";
import CustomerSupport from "examples/Icons/CustomerSupport";
import constants from "utils/constant";
import { AuthRoute, ProtectedRoute } from "components/routes";

const Dashboard = lazy(() => import("layouts/dashboard"));
const Profile = lazy(() => import("layouts/profile"));
const SignIn = lazy(() => import("layouts/authentication/sign-in"));
const SignUp = lazy(() => import("layouts/authentication/sign-up"));

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: constants.ROUTES.DASHBOARD,
    icon: <Shop size="12px" />,
    component: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    noCollapse: true,
    show: true,
  },

  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    route: constants.ROUTES.PROFILE,
    icon: <CustomerSupport size="12px" />,
    component: (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    ),
    noCollapse: true,
    show: true,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    route: constants.ROUTES.SIGNIN,
    icon: <Document size="12px" />,
    component: (
      <AuthRoute>
        <SignIn />
      </AuthRoute>
    ),
    noCollapse: true,
    show: false,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    route: constants.ROUTES.SIGNUP,
    icon: <SpaceShip size="12px" />,
    component: (
      <AuthRoute>
        <SignUp />
      </AuthRoute>
    ),
    noCollapse: true,
    show: false,
  },
];

export default routes;

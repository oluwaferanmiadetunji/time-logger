/* eslint-disable react/prop-types */
import helpers from "utils/helpers";
import { Navigate } from "react-router-dom";
import constants from "utils/constant";

function RequireAuth({ children }) {
  return helpers.isLoggedIn() ? <Navigate to={constants.ROUTES.DASHBOARD} replace /> : children;
}

export default RequireAuth;

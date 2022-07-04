/* eslint-disable react/prop-types */
import helpers from "utils/helpers";
import { Navigate } from "react-router-dom";
import constants from "utils/constant";

function RequireAuth({ children }) {
  return helpers.isLoggedIn() ? children : <Navigate to={constants.ROUTES.SIGNIN} replace />;
}

export default RequireAuth;

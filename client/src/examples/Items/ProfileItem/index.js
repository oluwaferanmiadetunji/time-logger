import { forwardRef } from "react";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import MenuItem from "@mui/material/MenuItem";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import LogoutIcon from "@mui/icons-material/Logout";

// custom styles for the ProfileItem
import { menuItem } from "examples/Items/ProfileItem/styles";

const ProfileItem = forwardRef(({ color, title, ...rest }, ref) => (
  <MenuItem {...rest} ref={ref} sx={(theme) => menuItem(theme)}>
    <LogoutIcon sx={{ mr: 2 }} />

    <SuiBox>
      <SuiTypography variant="button" textTransform="capitalize" fontWeight="regular">
        {title}
      </SuiTypography>
    </SuiBox>
  </MenuItem>
));

// Setting default values for the props of ProfileItem
ProfileItem.defaultProps = {
  color: "dark",
};

// Typechecking props for the ProfileItem
ProfileItem.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),

  title: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProfileItem;

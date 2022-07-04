import SuiTypography from "components/SuiTypography";

// Images
import logoXD from "assets/images/small-logos/logo-xd.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";

export default function data() {
  return {
    columns: [
      { name: "S/N", align: "center" },
      { name: "projects", align: "left" },
      { name: "company", align: "left" },
      { name: "time spent", align: "center" },
    ],

    rows: [
      {
        "S/N": (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            1
          </SuiTypography>
        ),
        projects: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            Analytics Node Server
          </SuiTypography>
        ),
        company: [logoXD, "Soft UI XD Version"],

        "time spent": (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            2 hours
          </SuiTypography>
        ),
      },
      {
        "S/N": (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            2
          </SuiTypography>
        ),
        projects: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            Analytics Node Server
          </SuiTypography>
        ),
        company: [logoAtlassian, "Add Progress Track"],

        "time spent": (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            2 hours
          </SuiTypography>
        ),
      },
      {
        "S/N": (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            3
          </SuiTypography>
        ),
        projects: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            Analytics Node Server
          </SuiTypography>
        ),
        company: [logoSlack, "Fix Platform Errors"],

        "time spent": (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            2 hours
          </SuiTypography>
        ),
      },
    ],
  };
}

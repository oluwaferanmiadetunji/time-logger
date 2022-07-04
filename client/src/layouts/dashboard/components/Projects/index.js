// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard Materail-UI example components
import Table from "examples/Tables/Table";

// Data
import data from "layouts/dashboard/components/Projects/data";

function Projects() {
  const { columns, rows } = data();

  return (
    <Card>
      <SuiBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <SuiBox>
          <SuiTypography variant="h6" gutterBottom>
            Projects
            <SuiTypography variant="button" fontWeight="regular" color="text">
              &nbsp;<strong>(30) </strong>
            </SuiTypography>
          </SuiTypography>
        </SuiBox>

        <SuiBox>
          <SuiTypography variant="button" fontWeight="regular" color="text">
            See all
          </SuiTypography>
        </SuiBox>
      </SuiBox>
      <SuiBox
        sx={{
          "& .MuiTableRow-root:not(:last-child)": {
            "& td": {
              borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                `${borderWidth[1]} solid ${borderColor}`,
            },
          },
        }}
      >
        <Table columns={columns} rows={rows} />
      </SuiBox>
    </Card>
  );
}

export default Projects;

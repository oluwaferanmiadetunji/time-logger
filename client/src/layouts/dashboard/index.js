// @mui material components
import Grid from "@mui/material/Grid";
// import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
// import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
// import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";

// // Soft UI Dashboard React base styles
// import typography from "assets/theme/base/typography";

import Projects from "layouts/dashboard/components/Projects";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import SummarizeIcon from "@mui/icons-material/Summarize";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
// import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";

function Dashboard() {
  // const { size } = typography;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox py={3}>
        <SuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Time spent today" }}
                count="1 hour"
                percentage={{ color: "success", text: "+55%" }}
                icon={{ color: "dark", component: <AccessTimeIcon /> }}
              />
            </Grid>

            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Today's projects" }}
                count="3"
                percentage={{ color: "success", text: "+3%" }}
                icon={{ color: "dark", component: <AccountTreeIcon /> }}
              />
            </Grid>

            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Time spent overall" }}
                count="10 hours"
                icon={{ color: "dark", component: <AccessTimeFilledIcon /> }}
              />
            </Grid>

            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Total projects" }}
                count="2,300"
                icon={{ color: "dark", component: <SummarizeIcon /> }}
              />
            </Grid>
          </Grid>
        </SuiBox>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={12}>
            <Projects />
          </Grid>
        </Grid>

        {/* <SuiBox mb={3} sx={{ mt: 2 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={12}>
              <GradientLineChart
                title="Sales Overview"
                description={
                  <SuiBox display="flex" alignItems="center">
                    <SuiBox fontSize={size.lg} color="success" mb={0.3} mr={0.5} lineHeight={0}>
                      <Icon className="font-bold">arrow_upward</Icon>
                    </SuiBox>
                    <SuiTypography variant="button" color="text" fontWeight="medium">
                      4% more{" "}
                      <SuiTypography variant="button" color="text" fontWeight="regular">
                        in 2021
                      </SuiTypography>
                    </SuiTypography>
                  </SuiBox>
                }
                height="20.25rem"
                chart={gradientLineChartData}
              />
            </Grid>
          </Grid>
        </SuiBox> */}
      </SuiBox>
    </DashboardLayout>
  );
}

export default Dashboard;

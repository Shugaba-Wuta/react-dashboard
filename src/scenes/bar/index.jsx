import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {
  return (
    <Box m={"20px"}>
      <Header title="BAR CHART" subtitle="A Bar Chart"></Header>
      <Box height={"75vh"}>
        <BarChart></BarChart>
      </Box>
    </Box>
  );
};

export default Bar;

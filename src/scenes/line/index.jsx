import { Box } from "@mui/material";
import LineChart from "../../components/LineChart";
import Header from "../../components/Header";

const Pie = () => {
  return (
    <Box m={"20px"}>
      <Header title="LINE CHART" subtitle="A Line Chart"></Header>
      <Box height={"75vh"}>
        <LineChart></LineChart>
      </Box>
    </Box>
  );
};
export default Pie;

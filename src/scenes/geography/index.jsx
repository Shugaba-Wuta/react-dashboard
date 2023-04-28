import { Box } from "@mui/material";
import GeoChart from "../../components/GeoChart";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m={"20px"}>
      <Header title="GEOGRAPHY CHART" subtitle="A Geography Chart"></Header>
      <Box height={"75vh"} border={`2px solid ${colors.primary[100]}`}>
        <GeoChart></GeoChart>
      </Box>
    </Box>
  );
};
export default Geography;

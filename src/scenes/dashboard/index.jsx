import React from "react";
import Header from "../../components/Header";
import { Box } from "@mui/material";

function Dashboard() {
  return (
    <Box m={"20px"}>
      <Box
        display={"flex"}
        flexDirection={"row"}
        // justifyContent={"space-between"}
        // alignItems={"center"}
      >
        <Header title={"DASHBOARD"} subtitle={"Welcome back"}></Header>
      </Box>
    </Box>
  );
}

export default Dashboard;

import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";

import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "NAME",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    { field: "email", headerName: "EMAIL", flex: 1 },
    {
      field: "age",
      headerName: "AGE",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    { field: "phone", headerName: "PHONE NUMBER", flex: 1 },
    {
      field: "access",
      headerName: "ACCESS",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width={"60%"}
            display={"flex"}
            justifyContent={"center"}
            // m={"0 auto"}
            p={"5px"}
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[700]
                : colors.greenAccent[800]
            }
            borderRadius={"4px"}
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}

            <Typography
              color={colors.gray[100]}
              sx={{ ml: "5px" }}
              fontWeight={"bold"}
            >
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <Box m={"20px"}>
      <Header title={"TEAM"} subtitle={"Managing Team Members"}></Header>
      <Box
        mt={"40px"}
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },

          "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: "bold",
          },
          "& .MuiDataGrid-cell": {
            // color: colors.greenAccent[300],
          },
          "& .name-column--cell": {
            color: colors.greenAccent[100],
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            // borderTop: "none",
            fontWeight: "bold",
          },
        }}
      >
        <DataGrid rows={mockDataTeam} columns={columns}></DataGrid>
      </Box>
    </Box>
  );
};
export default Team;

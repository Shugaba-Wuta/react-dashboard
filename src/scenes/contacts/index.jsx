import React from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "REGISTRAR ID", flex: 1 },
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
    { field: "address", headerName: "ADDRESS", flex: 1 },
    { field: "city", headerName: "CITY", flex: 1 },
    { field: "zipCode", headerName: "ZIP CODE", flex: 1 },
  ];

  return (
    <Box m={"20px"}>
      <Header
        title="CONTACTS"
        subtitle="List of Contacts for Future Reference"
      ></Header>
      <Box
        mt="40px"
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
            fontWeight: "bold",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.gray[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
        ></DataGrid>
      </Box>
    </Box>
  );
};
export default Contacts;

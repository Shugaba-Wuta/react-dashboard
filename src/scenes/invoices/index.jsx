import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "name",
      headerName: "NAME",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    { field: "email", headerName: "EMAIL", flex: 1 },
    {
      field: "cost",
      headerName: "COST",
      type: "number",
      headerAlign: "left",
      align: "left",
      renderCell: (data) => {
        return <Typography>{data.row.cost}</Typography>;
      },
    },

    { field: "phone", headerName: "PHONE NUMBER", flex: 1 },
    { field: "date", headerName: "DATE", type: "string" },
  ];

  return (
    <Box m={"20px"}>
      <Header title="INVOICES" subtitle="Invoice Balances"></Header>
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
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={mockDataInvoices}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
        ></DataGrid>
      </Box>
    </Box>
  );
};
export default Invoices;

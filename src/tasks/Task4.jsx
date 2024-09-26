import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import initialData from "./data"; // Importing data from external file
import { colors } from "@mui/material";

const columns = [
  {
    field: "customer",
    headerName: "Customer",
    width: 200,
    renderCell: (params) => (
      <span style={{ color: "#007BFF", textShadow: "0px 0px 3px rgba(0, 123, 255, 0.5)" }}>
        {params.value}
      </span>
    ),
  },
  { field: "lastSeen", headerName: "Last seen", width: 150 },
  {
    field: "orders",
    headerName: "Orders",
    width: 100,
    type: "number",
  },
  {
    field: "totalSpent",
    headerName: "Total spent",
    width: 150,
   
  },
  { field: "latestPurchase", headerName: "Latest purchase", width: 200 },
  { field: "news", headerName: "News", width: 100, type: "boolean" },
  { field: "segments", headerName: "Segments", width: 150 },
];

const Task4 = () => {
  const [data, setData] = useState(initialData);

  // Custom row class for the last row
  const getRowClassName = (params) => {
    if (params.indexRelativeToCurrentPage === data.length - 1) {
      return "last-row"; // Apply custom class to the last row
    }
    return "";
  };

  return (
    <div
      style={{ height: "600px", width: "90%" }}
      className="flex justify-center mx-auto -mt-8"
    >
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[5, 10, 15]}
        checkboxSelection
        disableSelectionOnClick
        sortingOrder={["asc", "desc"]}
        getRowClassName={getRowClassName} 
        sx={{
          backgroundColor: "#f8f9fa", // Light background for the grid
          borderRadius: '8px',
          boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: "#f8f9fa", 
          },
          "& .MuiTablePagination-selectLabel, & .MuiTablePagination-input": {
            color: "#007BFF", 
          },
          "& .MuiDataGrid-cell": {
            borderBottomColor: '#e9ecef', // Light border for cell separation
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#007BFF", // Blue background for headers
            color: "#333333", // Dark gray text for better visibility
            fontWeight: 'bold', // Make headers bold
          },
          "& .MuiDataGrid-cell:hover": {
            backgroundColor: "#e7f1ff", // Light hover effect for cells
          },
        }}
      />
    </div>
  );
};

export default Task4;

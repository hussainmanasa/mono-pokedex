import React from "react";
import { DataGrid, DataGridProps, GridColDef } from "@mui/x-data-grid";

const Table = ({
  rows,
  columns,
  pageSize,
  onRowClick,
}: Partial<DataGridProps>) => {
  return (
    <div style={{ height: "500px", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        rowsPerPageOptions={[10]}
        onRowClick={onRowClick}
      />
    </div>
  );
};

export default Table;

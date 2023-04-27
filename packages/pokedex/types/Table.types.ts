import { GridColDef } from "@mui/x-data-grid";

export type RowData = { name: string; url: string };

export type TableProps = {
  rows: RowData[];
  column: GridColDef<any | any | any>[];
  pageSize: number;
  rowsPerPageOptions: number[];
  count: number;
  onRowClick: ({ row }: { row: RowData }) => void;
  getRowId: (row: RowData) => string | number;
};

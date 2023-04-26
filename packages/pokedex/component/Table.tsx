import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Pagination from "@mui/material/Pagination";
import { getPokemonList, selectPokemonCount } from "../store/pokemonListSlice";
import { useDispatch, useSelector } from "react-redux";

const PaginationNode = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectPokemonCount);

  const onPageChangeHandler = async (event: any, pageNumber: any) => {
    dispatch<any>(getPokemonList(pageNumber));
  };

  return (
    <div data-testid="data-pagination">
      <Pagination
        count={Math.floor(count / 20)}
        style={{ padding: 20, justifyContent: "center", display: "flex" }}
        onChange={(event, pageNumber) => onPageChangeHandler(event, pageNumber)}
        color="primary"
      />
    </div>
  );
};

type RowData = { name: string; url: string };

type Props = {
  rows: RowData[];
  column: GridColDef<any | any | any>[];
  pageSize: number;
  rowsPerPageOptions: number[];
  count: number;
  onRowClick: ({ row }: { row: RowData }) => void;
  getRowId: (row: RowData) => string | number;
};

const Table = ({ rows, column, pageSize, onRowClick, getRowId }: Props) => {
  return (
    <div style={{ padding: 10, margin: 10 }}>
      <div data-testid="data-table" style={{ height: "700px", width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={column}
          pageSize={pageSize}
          rowsPerPageOptions={[10]}
          onRowClick={(row: any) => onRowClick(row)}
          getRowId={(row: RowData) => getRowId(row)}
          components={{
            Footer: PaginationNode,
          }}
        />
      </div>
    </div>
  );
};

export default Table;

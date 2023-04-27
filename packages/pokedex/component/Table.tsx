import Pagination from "@mui/material/Pagination";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonList, selectPokemonCount } from "../store/pokemonListSlice";
import styles from "./Table.module.css";
import { RowData, TableProps } from "../types/Table.types";

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

const Table = ({
  rows,
  column,
  pageSize,
  onRowClick,
  getRowId,
}: TableProps) => {
  return (
    <div className={styles.dataTable}>
      <div style={{ height: "700px", width: "100%" }}>
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

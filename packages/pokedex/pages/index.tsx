import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import {
  getPokemonList,
  selectPokemonCount,
  selectPokemonListData,
} from "../store/pokemonListSlice";
import { wrapper } from "../store/store";
import Table from "../component/Table";
import { RowData } from "../types/Table.types";

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Pokemon Name",
    headerClassName: "row-header",
    width: 300,
    colSpan: 12,
    renderCell: (params) => {
      return (
        <div
          style={{
            width: "100%",
            padding: "0.5rem",
            cursor: "pointer",
            textTransform: "capitalize",
          }}
        >
          {params?.value}
        </div>
      );
    },
  },
];

export default function Home() {
  const router = useRouter();
  const pokemonList = useSelector(selectPokemonListData);
  const count = useSelector(selectPokemonCount);

  const handleRowClick = ({ row }: { row: RowData }) => {
    router.push(`/${row?.name}`);
  };
  return (
    <div>
      {pokemonList && pokemonList?.length && (
        <Table
          count={count}
          rows={pokemonList}
          column={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          onRowClick={handleRowClick}
          getRowId={(row: any) => row.name}
        />
      )}
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({}) => {
      await store.dispatch(getPokemonList(0));
      return {
        props: {},
      };
    }
);

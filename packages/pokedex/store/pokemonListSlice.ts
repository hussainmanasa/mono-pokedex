import { createSlice } from "@reduxjs/toolkit";
import { AppState, AppThunk } from "./store";
import { HYDRATE } from "next-redux-wrapper";
import { fetchPokemonList } from "pokedex-utilities";
import { RowData } from "../types/Table.types";

const initialState: { data: RowData[]; count: number; allData: RowData[][] } = {
  data: [],
  allData: [],
  count: 0,
};
// Actual Slice
export const pokemonListSlice = createSlice({
  name: "pokemon/list",
  initialState,
  reducers: {
    setPokemonList(state, action) {
      state.data = action.payload;
    },
    setAllData(state, action) {
      state.allData = action.payload;
    },
    setCount(state, action) {
      state.count = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: any) => {
      return {
        ...state,
        ...action?.payload?.pokemon,
      };
    });
  },
});

export const { setPokemonList, setAllData, setCount } =
  pokemonListSlice.actions;
export default pokemonListSlice.reducer;

//selectors
export const selectPokemonListData = (state: AppState) => state?.pokemon?.data;
export const selectPokemonAllData = (state: AppState) =>
  state?.pokemon?.allData;
export const selectPokemonCount = (state: AppState) => state?.pokemon?.count;

// Thunk
export const getPokemonList =
  (page: any): AppThunk =>
  async (dispatch, getState) => {
    try {
      const allData = getState()?.pokemon?.allData as RowData[][];
      if (page >= 1 && allData[page - 1]) {
        dispatch(setPokemonList(allData[page - 1]));
      } else {
        const { results, count } = await fetchPokemonList(page);
        const temp = [...allData, results];
        if (count !== getState()?.pokemon?.count) {
          dispatch(setCount(count));
        }
        dispatch(setAllData(temp));
        dispatch(setPokemonList(results));
      }
    } catch (e) {
      dispatch(setPokemonList([{ name: "Error", ulr: "404 Not Found" }]));
    }
  };

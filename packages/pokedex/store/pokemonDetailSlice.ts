import { createSlice } from "@reduxjs/toolkit";
import { AppState, AppThunk } from "./store";
import { HYDRATE } from "next-redux-wrapper";
import { PokemonData } from "../pages/[name]";
import { fetchPokemonData } from "pokedex-utilities";

const initialState: { data: PokemonData | null } = { data: null };

// Actual Slice
export const pokemonDetailSlice = createSlice({
  name: "pokemon/detail",
  initialState,
  reducers: {
    setPokemonDetail(state, action) {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: any) => {
      return {
        ...state,
        ...action?.payload?.pokemonDetail,
      };
    });
  },
});

export const { setPokemonDetail } = pokemonDetailSlice.actions;
export default pokemonDetailSlice.reducer;

//selectors
export const selectPokemonDetail = (state: AppState) =>
  state?.pokemonDetail?.data;

// Middleware
export const fetchPokemonDetail =
  (name: string): AppThunk =>
  async (dispatch) => {
    try {
      const res = await fetchPokemonData(name);
      return dispatch(setPokemonDetail(res));
    } catch {
      dispatch(setPokemonDetail(null));
    }
  };

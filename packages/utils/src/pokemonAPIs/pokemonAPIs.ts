import { fetchAPI } from "../helper";

const baseUrl = "https://pokeapi.co/api/v2/pokemon";
export const fetchPokemonList = (page: number = 0, limit: number = 10) => {
  return fetchAPI(`${baseUrl}?offset=${page * limit}&limit=${limit}`);
};

export const fetchPokemonData = (id: string | number) => {
  return fetchAPI(`${baseUrl}/${id}`);
};

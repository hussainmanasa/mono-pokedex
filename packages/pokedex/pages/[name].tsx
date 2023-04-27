import { GetStaticProps, GetStaticPaths } from "next";
import { wrapper } from "../store/store";
import {
  fetchPokemonDetail,
  selectPokemonDetail,
} from "../store/pokemonDetailSlice";
import { useSelector } from "react-redux";
import { Card } from "pokedex-components";
import { fetchPokemonList } from "pokedex-utilities";
import { RowData } from "../types/Table.types";
import { PokemonData } from "../types/Pokemon.types";

const PokemonDetail = () => {
  const data = useSelector(selectPokemonDetail) as PokemonData;
  return (
    <div>
      {data && (
        <Card
          name={data?.name}
          height={data?.height}
          weight={data?.weight}
          location={data?.location_area_encounters}
          images={data?.sprites}
        />
      )}
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await fetchPokemonList();
  const paths = data?.results?.map((pokemon: RowData) => ({
    params: { name: pokemon?.name },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    const data: any = await store.dispatch(
      fetchPokemonDetail(context?.params?.name as string)
    );
    if (!data) {
      return {
        props: {},
        notFound: true,
      };
    }
    return {
      props: {},
    };
  }
);

export default PokemonDetail;

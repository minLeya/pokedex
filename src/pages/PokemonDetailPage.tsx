import { useParams } from "react-router-dom";
import { usePokemonDetail } from "../hooks/usePokemonDetail";

export const PokemonDetailPage = () => {
  const { id } = useParams();
  const { pokemon, loading, error } = usePokemonDetail(Number(id));

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!pokemon) return <div>Pokemon not found</div>;

  return(
    <div>
      <h1>{pokemon.name}</h1>
      <img src="{pokemon.image}" alt="{pokemon.name}" />
    </div>
  )
};

import { Link, useParams } from "react-router-dom";
import { usePokemonDetail } from "../hooks/usePokemonDetail";
import { PokemonDetail } from "../components/pokemon/PokemonDetail";

export const PokemonDetailPage = () => {
  const { id } = useParams();
  const { pokemon, loading, error } = usePokemonDetail(Number(id));

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        Error: {error}
      </div>
    );
  }

  if (!pokemon) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        Pokemon not found :(
      </div>
    );
  }

  return (
    <div>
      <div className="mt-6 ml-6">
        <Link
          to="/"
          className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-full text-white "
        >
          Back to Pokédex
        </Link>
      </div>

      <PokemonDetail pokemon={pokemon} />
    </div>
  );
};
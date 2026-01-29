import { useEffect, useState } from "react";
import { PokemonCard } from "./PokemonCard";
import { LoadMoreButton } from "../ui/LoadMoreButton";
import { usePokemon } from "../../hooks/usePokemon";
import { type Pokemon } from "../../types";

export const PokemonGrid = () => {
  const [offset, setOffset] = useState(1);
  const [allPokemons, setAllPokemons] = useState<Pokemon[]>([]);
  const limit = 15;

  const { pokemons: currentPokemons, loading, error } = usePokemon(limit, (offset - 1) * limit);

  useEffect(() => {
    if(currentPokemons.length > 0) {
      setAllPokemons(prev => [...prev, ...currentPokemons]);
    }
  }, [currentPokemons]);

  const handleLoadMore = () => {
    setOffset((prev) => prev + 1);
  };

  if (loading && allPokemons.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-xl">Loading Pokémon...</div>
      </div>
    );
  }

  if (error) {
    <div className="text-center py-12">
      <div className="text-red-500 text-xl mb-4">Error: {error}</div>
      <button
        onClick={() => setOffset(1)}
        className="px-6 py-2 bg-red-500 text-white rounded-lg"
      >
        Try Again
      </button>
    </div>;
  }

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-14">
        {allPokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>

      <div className="flex justify-center mb-8">
        <LoadMoreButton
          onClick={handleLoadMore}
          isLoading={loading && offset > 1}
        />
      </div>
    </div>
  );
};

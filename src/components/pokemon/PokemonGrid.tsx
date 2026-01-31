import { useState } from "react";
import { PokemonCard } from "./PokemonCard";
import { usePokemon } from "../../hooks/usePokemon";

export const PokemonGrid = () => {
  const [page, setPage] = useState(1);
  const limit = 15;

  const { pokemons, loading, error } = usePokemon(limit, (page - 1) * limit);

  const handlePrevious = () => {
    if (page > 1) {
      setPage(prev => prev - 1);
    }
  };

  const handleNext = () => {
    setPage(prev => prev + 1);
  };

  if (loading) {
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
        onClick={() => setPage(1)}
        className="px-6 py-2 bg-red-500 text-white rounded-lg"
      >
        Try Again
      </button>
    </div>;
  }

  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-14">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      

      <div className="flex justify-center items-center gap-6 mb-8 p-4">
        <button
          onClick={handlePrevious}
          disabled={page === 1}
          className="px-5 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          ←
        </button>
        
        <div className="flex items-center gap-4">
          <span className="text-lg font-medium text-gray-700">
            Page {page}
          </span>
        </div>
        
        <button
          onClick={handleNext}
          className="px-5 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
        >
          →
        </button>
      </div>
    </div>
  );
};
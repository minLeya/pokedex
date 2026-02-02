import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAllPokemons } from "../../hooks/useAllPokemons";
import { type Pokemon } from "../../types";

export const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);
  const [showResults, setShowResults] = useState(false);
  
  const navigate = useNavigate();
  
  const { allPokemons: pokemons, loading } = useAllPokemons();

  useEffect(() => {
    if (!query.trim()) {
      setFilteredPokemons([]);
      setShowResults(false);
      return;
    }

    const searchTerm = query.toLowerCase();
    const filtered = pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchTerm) ||
      pokemon.id.toString().includes(searchTerm)
    );

    setFilteredPokemons(filtered.slice(0, 8));
    setShowResults(filtered.length > 0);
  }, [query, pokemons]);

  const handleSelect = (id: number) => {
    navigate(`/pokemon/${id}`);
    setQuery("");
    setShowResults(false);
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search Pokémon by name or ID..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => query && setShowResults(true)}
        className="w-full px-4 py-2 border border-gray-300 bg-gray-50 rounded-lg focus:outline-none"
      />

      {showResults && filteredPokemons.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
          {filteredPokemons.map((pokemon) => (
            <button
              key={pokemon.id}
              onClick={() => handleSelect(pokemon.id)}
              className="w-full px-4 py-3 hover:bg-red-50 flex items-center border-b last:border-b-0"
            >
              <span className="text-gray-500 mr-3">
                #{pokemon.id.toString().padStart(4, "0")}
              </span>
              <span className="font-medium capitalize">{pokemon.name}</span>
            </button>
          ))}
        </div>
      )}

      {loading && query && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border rounded-lg p-4 text-center">
          Loading Pokémon database...
        </div>
      )}

      {showResults && query && filteredPokemons.length === 0 && !loading && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border rounded-lg p-4 text-center">
          No Pokémon found for "{query}"
        </div>
      )}
    </div>
  );
};
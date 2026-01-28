import { useState } from "react";
import { PokemonCard } from "./PokemonCard";
import { type Pokemon } from "../../types";
import { LoadMoreButton } from "../ui/LoadMoreButton";

/* temporary */
const mockPokemons: Pokemon[] = [
  {
    id: 1,
    name: "bulbasaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    types: ["grass", "poison"],
  },
  {
    id: 4,
    name: "charmander",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    types: ["fire"],
  },
  {
    id: 7,
    name: "squirtle",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    types: ["water"],
  },
  {
    id: 25,
    name: "pikachu",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    types: ["electric"],
  },
  {
    id: 133,
    name: "eevee",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png",
    types: ["normal"],
  },
  {
    id: 39,
    name: "jigglypuff",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png",
    types: ["normal", "fairy"],
  },
  {
    id: 54,
    name: "psyduck",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png",
    types: ["water"],
  },
  {
    id: 94,
    name: "gengar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png",
    types: ["ghost", "poison"],
  },
  {
    id: 143,
    name: "snorlax",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png",
    types: ["normal"],
  },
  {
    id: 150,
    name: "mewtwo",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png",
    types: ["psychic"],
  },
  {
    id: 151,
    name: "mew",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
    types: ["psychic"],
  },
  {
    id: 6,
    name: "charizard",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
    types: ["fire", "flying"],
  },
  {
    id: 9,
    name: "blastoise",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
    types: ["water"],
  },
  {
    id: 3,
    name: "venusaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
    types: ["grass", "poison"],
  },
  {
    id: 65,
    name: "alakazam",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png",
    types: ["psychic"],
  },
  {
    id: 149,
    name: "dragonite",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png",
    types: ["dragon", "flying"],
  },
    {
    id: 151,
    name: "mew",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
    types: ["psychic"],
  },
  {
    id: 6,
    name: "charizard",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
    types: ["fire", "flying"],
  },
  {
    id: 9,
    name: "blastoise",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
    types: ["water"],
  },
  {
    id: 3,
    name: "venusaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
    types: ["grass", "poison"],
  },
  {
    id: 65,
    name: "alakazam",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png",
    types: ["psychic"],
  },
  {
    id: 149,
    name: "dragonite",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png",
    types: ["dragon", "flying"],
  },
];

interface PokemonGridProps {
  pokemons: Pokemon[];
}

export const PokemonGrid = () => {
  const [visibleCount, setVisibleCount] = useState(10);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 10);
      setIsLoading(false);
    }, 500);
  };

  const visiblePokemons = mockPokemons.slice(0, visibleCount);
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-14">
        {visiblePokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>

      {visibleCount < mockPokemons.length && (
        <div className="flex justify-center mb-8">
          <LoadMoreButton
            onClick={handleLoadMore}
            isLoading={isLoading}/>
        </div>
      )}
    </div>
  );
};

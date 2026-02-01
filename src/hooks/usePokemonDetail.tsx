import { useState, useEffect } from "react";
import { type PokemonDetail } from "../types";

const POKEAPI_URL = "https://pokeapi.co/api/v2";

export const usePokemonDetail = (id: number) => {
  const [pokemon, setPokemon] = useState<PokemonDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      try {
        setLoading(true);
        // 1. fetch main data
        const response = await fetch(`${POKEAPI_URL}/pokemon/${id}`);
        // 2. get main data
        const data = await response.json();

        // 1.1 fetch description
        const speciesResponse = await fetch(`${POKEAPI_URL}/pokemon-species/${id}`);
        // 2.2 get description
        const speciesData = await speciesResponse.json();

        const englishEntry = speciesData.flavor_text_entries.find(
          (entry: any) => entry.language.name === "en"
        );
        const description = englishEntry?.flavor_text || "No description available";

        // 3. convert to pokemon detail
        const pokemonDetail = {
          id: data.id,
          name: data.name,
          image: data.sprites.other["official-artwork"].front_default,
          types: data.types.map((typeInfo: any) => typeInfo.type.name),
          height: data.height,
          weight: data.weight,
          description: description.replace(/\n/g, ' '),
          stats: {
            hp: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            defense: data.stats[2].base_stat,
            specialAttack: data.stats[3].base_stat,
            specialDefense: data.stats[4].base_stat,
            speed: data.stats[5].base_stat,
          },
        };
        // 4. setpokemon
        setPokemon(pokemonDetail);
        setError(null);
      } catch (error) {
        setError("Failed to fetch Pokémon details");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    if (id) {
      fetchPokemonDetail();
    }
  }, [id]);

  return { pokemon, loading, error };
};

import { useState, useEffect } from "react";
import { type Pokemon } from "../types";

const POKEAPI_URL = "https://pokeapi.co/api/v2";

export const usePokemon = (limit: number, offset: number) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `${POKEAPI_URL}/pokemon?limit=${limit}&offset=${offset}`
        );
        const data = await response.json();

        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon : any) => {
            const detailResponse = await fetch(pokemon.url);
            const detailData = await detailResponse.json();
            
            return {
              id: detailData.id,
              name: detailData.name,
              image: detailData.sprites.other['official-artwork'].front_default,
              types: detailData.types.map((typeInfo: any) => typeInfo.type.name),
            };
          })
        );

        setPokemons(pokemonDetails);
        setError(null);
      } catch(err) {
        setError("Failed to fetch Pokémon");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPokemons();
  }, [limit, offset]);

  return {pokemons, loading, error};
};

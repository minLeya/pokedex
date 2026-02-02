import { useState, useEffect } from "react";
import { type Pokemon } from "../types";

const POKEAPI_URL = "https://pokeapi.co/api/v2";

export const useAllPokemons = () => {
  const [allPokemons, setAllPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const fetchAllPokemons = async () => {
      try {
        setLoading(true);

        const countResponse = await fetch(`${POKEAPI_URL}/pokemon`);
        const countData = await countResponse.json();
        const total = countData.count; 
        setTotalCount(total);

        const response = await fetch(`${POKEAPI_URL}/pokemon?limit=${total}`);
        const data = await response.json();

        const pokemonList = data.results.map((pokemon: any, index: number) => ({
          id: index + 1,
          name: pokemon.name,
          image: "",
          types: [],
        }));

        setAllPokemons(pokemonList);
        setError(null);
      } catch (err) {
        setError("Failed to load Pokémon database");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllPokemons();
  }, []);

  return { allPokemons, loading, error, totalCount };
};
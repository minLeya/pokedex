import { type Pokemon } from "../../types";

interface PokemonCardProps {
  pokemon: Pokemon;
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <div className="bg-white rounded-3xl border border-black flex flex-col justify-center items-center gap-4 p-3 hover:shadow-xl transition-shadow cursor-pointer">
      <div className="text-gray-500 text-sm">
        #{pokemon.id.toString().padStart(3, "0")}
      </div>

      <img
        src={pokemon.image}
        alt={pokemon.name}
        className="w-32 h-32 object-contain"
      />

      <div className="text-lg font-bold capitalize text-center">{pokemon.name}</div>

      <div className="flex gap-2">
        {pokemon.types.map((type) => (
          <span
            key={type}
            className="bg-blue-400 text-shadow-white px-3 pb-1 rounded-full text-sm"
          >
			{type}
		  </span>
        ))}
      </div>
    </div>
  );
};

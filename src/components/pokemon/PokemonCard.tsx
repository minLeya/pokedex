import { type Pokemon } from "../../types";
import { getTypeStyle } from "../../utils/typeColors";
import { Link } from "react-router-dom";

interface PokemonCardProps {
  pokemon: Pokemon;
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <Link to={`/pokemon/${pokemon.id}`}>
      <div className="bg-white rounded-3xl border border-black flex flex-col justify-center items-center gap-4 p-3 hover:shadow-2xl transition-shadow cursor-pointer">
        <div className="text-gray-500 text-sm">
          #{pokemon.id.toString().padStart(3, "0")}
        </div>

        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="w-32 h-32 object-contain"
        />

        <div className="text-lg font-bold capitalize text-center">
          {pokemon.name}
        </div>

        <div className="flex gap-2">
          {pokemon.types.map((type) => {
            const style = getTypeStyle(type);
            return (
              <span
                key={type}
                className={`${style.bg} ${style.text} p-1 px-3 rounded-full text-sm`}
              >
                {type}
              </span>
            );
          })}
        </div>
      </div>
    </Link>
  );
};

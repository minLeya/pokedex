import { type PokemonDetail as PokemonDetailType } from "../../types";
import { getTypeStyle } from "../../utils/typeColors";

interface PokemonDetailProps {
  pokemon: PokemonDetailType;
}

export const PokemonDetail = ({ pokemon }: PokemonDetailProps) => {
  const heightInMeters = (pokemon.height / 10).toFixed(1);
  const weightInKg = (pokemon.weight / 10).toFixed(1);
  return (
    <div className="max-w-4xl mx-auto p-10">
      <div className="flex flex-col uppercase text-center mb-4">
        <div className="text-3xl font-semibold">{pokemon.name}</div>
        <div className="text-gray-400 text-lg">
          #{pokemon.id.toString().padStart(4, "0")}
        </div>
      </div>
      <div className="flex justify-center mb-6">
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="w-32 h-32
            sm:w-48 sm:h-48
            md:w-55 md:h-55
            lg:w-60 lg:h-60  
            xl:w-80 xl:h-80  
            object-contain"
        />
      </div>
      <div className="flex justify-center gap-3 mb-8">
        {pokemon.types.map((type) => {
          const style = getTypeStyle(type);
          return (
            <span
              key={type}
              className={`${style.bg} ${style.text} px-4 py-1 rounded-full text-lg`}
            >
              {type}
            </span>
          );
        })}
      </div>
      <div className="text-center text-gray-700 mb-8">
        <div className="text-lg">
          <span className="font-semibold">Height:</span> {heightInMeters} m
          <span className="mx-4">•</span>
          <span className="font-semibold">Weight:</span> {weightInKg} kg
        </div>
      </div>
      {pokemon.description && (
        <div className="bg-gray-100 p-6 rounded-xl mb-8">
          <h2 className="text-xl font-bold mb-3">Description</h2>
          <p className="text-gray-700">{pokemon.description}</p>
        </div>
      )}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">Base Stats</h2>
        <div className="space-y-4">
          {Object.entries(pokemon.stats).map(([statName, value]) => (
            <div key={statName} className="flex item-center">
              <div className="w-34 font-medium capitalize">
                {statName.replace(/([A-Z])/g, " $1")}
              </div>
              <div className="flex-1">
                <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-red-500"
                    style={{ width: `${Math.min(value, 100)}%` }}
                  ></div>
                </div>
              </div>
              <div className="w-12 text-right font-semibold">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

import { useState } from "react";
import { PokemonGrid } from "../components/pokemon/PokemonGrid";
import { TypeFilter } from "../components/filters/TypeFilter";

export const HomePage = () => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const handleTypeToggle = (type: string) => {
    setSelectedTypes(prev => prev.includes(type) ?
      prev.filter(t => t !== type) : [...prev, type]);
  }

  return (
    <div>
      <TypeFilter selectedTypes={selectedTypes} onTypeToggle={handleTypeToggle} />
      <PokemonGrid selectedTypes={selectedTypes}/>
    </div>
  );
};
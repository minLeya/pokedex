import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { getTypeStyle } from "../../utils/typeColors";

interface TypeFilterProps {
  selectedTypes: string[];
  onTypeToggle: (type: string) => void;
}

export const TypeFilter = ({ selectedTypes, onTypeToggle }: TypeFilterProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const types = [
    "normal",
    "fire",
    "water",
    "grass",
    "electric",
    "ice",
    "fighting",
    "poison",
    "ground",
    "flying",
    "psychic",
    "bug",
    "rock",
    "ghost",
    "dark",
    "dragon",
    "steel",
    "fairy",
  ];

  return (
    <div className="m-13 mt-4 border border-gray-300 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <span className="font-semibold text-gray-800">Filter by Type</span>
          {selectedTypes.length > 0 && (
            <span className="px-2 py-1 text-xs bg-red-500 text-white rounded-full">
              {selectedTypes.length} selected
            </span>
          )}
        </div>
        {isOpen ? (
          <ChevronUp className="h-5 w-5" />
        ) : (
          <ChevronDown className="h-5 w-5" />
        )}
      </button>

      {isOpen && (
        <div className="p-4 bg-white">
          <div className="flex flex-wrap gap-2">
            {types.map((type) => {
              const style = getTypeStyle(type);
              return (
                <button
                  key={type}
                  onClick={() => onTypeToggle(type)}
                  className={`
                    px-3 py-1.5 rounded-full text-sm font-medium capitalize
                    transition-all duration-150
                    ${style.bg} ${style.text}
                    ${
                      selectedTypes.includes(type)
                        ? "ring-2 ring-black ring-offset-1"
                        : "opacity-90 hover:opacity-100"
                    }
                  `}
                >
                  {type}
                </button>
              );
            })}
          </div>

          {selectedTypes.length > 0 && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <button
                onClick={() => selectedTypes.forEach((t) => onTypeToggle(t))}
                className="text-sm text-red-500 hover:text-red-700 font-medium"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export const typeStyle = {
  fire: {bg: "bg-red-500", text: "text-white"},
  water: { bg: "bg-blue-500", text: "text-white" },
  electric: { bg: "bg-yellow-400", text: "text-black" },
  grass: {bg: "bg-green-500", text: "text-white"},
  psychic: {bg: "bg-pink-500", text: "text-white"},
  ice: {bg: "bg-cyan-300", text: "text-black"},
  dragon: {bg: "bg-indigo-600", text: "text-white"},
  dark: {bg: "bg-gray-800", text: "text-white"},
  fairy: {bg: "bg-pink-300", text: "text-black"},
  normal: {bg: "bg-gray-400", text: "text-white"},
  fighting: {bg: "bg-red-700", text: "text-white"},
  flying: {bg: "bg-indigo-300", text: "text-white"},
  poison: {bg: "bg-purple-500", text: "text-white"},
  ground: {bg: "bg-yellow-600", text: "text-black"},
  rock: {bg: "bg-yellow-800", text: "text-white"},
  bug: {bg: "bg-lime-500", text: "text-white"},
  ghost: {bg: "bg-purple-700", text: "text-white"},
  steel: {bg: "bg-gray-500", text: "text-white"},
};

export const getTypeStyle = (type: string): {bg: string, text: string} => {
  if (type in typeStyle) {
    return typeStyle[type as keyof typeof typeStyle];
  }
  return {bg: "bg-gray-300", text: "text-black"};
};
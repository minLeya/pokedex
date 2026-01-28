interface LoadMoreButtonProps {
  onClick: () => void;
  isLoading?: boolean;
}

export const LoadMoreButton = ({
  onClick,
  isLoading = false,
}: LoadMoreButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className="px-8 py-3 bg-red-500 text-white rounded-2xl hover:bg-red-600 disabled:bg-gray-400 transition-colors"
    >
      {isLoading ? "Loading..." : "Load More Pokémon"}
    </button>
  );
};

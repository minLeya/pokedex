import { Link } from "react-router-dom";
import { SearchBar } from "../ui/SearchBar";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-red-500 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white">
              Poké<span className="text-gray-900 text-2xl">dex</span>
            </span>
          </Link>

          <div className="flex-1 max-w-lg mx-4">
            <SearchBar />
          </div>

          <div className="flex items-center">
            <Link
              to="/"
              className="px-4 py-2 text-white hover:text-gray-900 font-xl font-semibold"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
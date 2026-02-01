import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <header className="bg-red-500 text-white p-4">
      <div className="container mx-auto">
        <Link to="/">
          <h1 className="text-2xl font-bold">Pokédex</h1>
        </Link>
      </div>
    </header>
  );
};
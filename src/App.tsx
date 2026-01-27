import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { PokemonDetailPage } from "./pages/PokemonDetailPage";
import { Layout } from "./components/layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/pokemon/:id" element={<PokemonDetailPage />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonListPage from "./containers/PokemonListPage";
import PokemonDetailsPage from "./containers/PokemonDetailsPage";
import NotFoundPage from "./containers/NotFoundPage";

function App() {
  return (
    <BrowserRouter basename="/pokedex">
      <Routes>
        <Route path="/" element={<PokemonListPage />} />
        <Route path="/pokemon/:name" element={<PokemonDetailsPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pokedex from "./pages/Pokedex";
import Pokemon from "./pages/Pokemon";
import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="pokedex/:name" element={<Pokemon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

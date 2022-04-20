import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../api/api";
import "../styles/pokedex.css";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchPokemons() {
      const response = await fetch(`${BASE_URL}?limit=151`);
      const json = await response.json();
      setPokemons(json.results);
    }
    fetchPokemons();
  }, []);

  return (
    <div className="container">
      <div className="pokedex">
        <h1>Pokedex Lucas</h1>
        <input
          id="pokemon"
          name="pokemon"
          placeholder="Digite o nome de um pokemon"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="pokedex-pokemon">
          <ul>
            {pokemons &&
              pokemons
                .filter((pokemon) => {
                  if (search === "") {
                    return pokemon;
                  } else if (
                    pokemon.name.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return pokemon;
                  }
                })
                .map((pokemon) => (
                  <Link to={`/pokedex/${pokemon.name}`}>
                    <li key={pokemon.name}>{pokemon.name}</li>
                  </Link>
                ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pokedex;

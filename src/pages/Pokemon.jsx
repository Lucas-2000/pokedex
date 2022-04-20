import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BASE_URL } from "../api/api";
import "../styles/pokemon.css";

const Pokemon = () => {
  const params = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch(`${BASE_URL}/${params.name}`);
      const json = await response.json();
      setPokemon(json);
    }
    fetchPokemon();
  }, []);

  if (pokemon === null) return null;
  return (
    <div className="container">
      <div className="container-pokemon">
        <h1>{pokemon.name}</h1>
        <div>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
        <div>
          <h2>Altura</h2>
          <span>{pokemon.height / 100}m</span>
          <h2>Peso</h2>
          <span>{pokemon.weight / 100}kg</span>
          <h2>Habilidades</h2>
          <div className="habilities">
            {pokemon.abilities.map((pokeAbility) => (
              <ul>
                <li key={pokemon.name}>{pokeAbility.ability.name}</li>
              </ul>
            ))}
          </div>
          <h2>Tipo</h2>
          {pokemon.types.map((pokeType) => (
            <ul>
              <li key={pokemon.name}>{pokeType.type.name}</li>
            </ul>
          ))}
        </div>
        <Link to="/" className="back">
          Voltar
        </Link>
      </div>
    </div>
  );
};

export default Pokemon;

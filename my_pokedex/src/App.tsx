import { ChangeEvent, useEffect, useState } from "react";
import React from "react";
import { AuthProvider } from "./context/AuthContext";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import pokeballImage from "./assets/pokeball.png";

import Pokemon from "./interfaces";
import Pokedex from "./pages/Pokedex";
import findMethod from "./controller/find";
import getAllMethod from "./controller/getAll";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import "./App.css";

function App() {
  const [activeIcons, setActiveIcons] = useState<string[]>([]);
  const [pokemonName, setPokemonName] = useState<string>("");
  const [hasFetchedData, setHasFetchedData] = useState(false);
  const [hasPokemons, setHasPokemons] = useState(false);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const currentPath = window.location.pathname;

  const handlePokemonName = (event: ChangeEvent<HTMLInputElement>) => {
    setPokemonName(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await findMethod(
        pokemonName,
        activeIcons,
        setHasPokemons,
        setPokemons
      );
      console.log(response);
    } catch (error) {
      console.error("Erro ao enviar POST:", error);
    }
  };

  useEffect(() => {
    if (hasFetchedData === false && currentPath === "/") {
      try {
        setHasFetchedData(true);
        getAllMethod(setHasPokemons, setPokemons);
      } catch (e) {
        console.log("Error ", e);
      }
    }
  }, [pokemons]);

  return (
    <>
      <header>
        <div>
          <a className="pokeball-a" href="/">
            <img src={pokeballImage} className="pokeball-icon" />
          </a>
          <a href="/" className="nav-title">
            my_pokedex
          </a>
        </div>
        <div>
          <i>developed by hHanzou</i>
        </div>
      </header>

      <Router>
        <Routes>
          <AuthProvider>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route
              path="/"
              element={
                <Pokedex
                  pokemons={pokemons}
                  activeIcons={activeIcons}
                  pokemonName={pokemonName}
                  hasPokemons={hasPokemons}
                  setActiveIcons={setActiveIcons}
                  handlePokemonName={handlePokemonName}
                  handleSubmit={handleSubmit}
                />
              }
            />
          </AuthProvider>
        </Routes>
      </Router>
    </>
  );
}

export default App;

// import { useState } from "react";
import pokeballImage from "./assets/pokeball.png";
import SearchForm from "./components/SearchField";

import "./App.css";
import { ChangeEvent, useState } from "react";

function App() {
  const [activeIcons, setActiveIcons] = useState<string[]>([]);
  const [pokemonName, setPokemonName] = useState<string>("");
  const [pokemons, setPokemons] = useState({});
  const handlePokemonName = (event: ChangeEvent<HTMLInputElement>) => {
    setPokemonName(event.target.value);
  };

  const dragonite = {
    id: "149",
    name: "Dragonite",
    img: "http://img.pokemondb.net/artwork/dragonite.jpg",
    type: ["Dragon", "Flying"],
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await postFind();
      console.log(response);
    } catch (error) {
      console.error("Erro ao enviar POST:", error);
    }
  };

  const postFind = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/find", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: pokemonName, type: activeIcons }),
      });

      if (!res.ok) {
        throw new Error("Erro ao fazer POST");
      }

      const dataJson = await res.json();
      await setPokemons(dataJson);
      console.log(dataJson);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <>
      <header>
        <div>
          <a href="/">
            <img
              width="38"
              height="38"
              src={pokeballImage}
              className="pokeball-icon"
            />
          </a>
          <a href="/" className="nav-title">
            my_pokedex
          </a>
        </div>
      </header>
      <main>
        <section className="search-section">
          <SearchForm
            activeIcons={activeIcons}
            pokemonName={pokemonName}
            setActiveIcons={setActiveIcons}
            handleSubmit={handleSubmit}
            handlePokemonName={handlePokemonName}
          ></SearchForm>
        </section>
        <div className="container-cards">
          <div className="card"></div>
        </div>
      </main>
    </>
  );
}

export default App;

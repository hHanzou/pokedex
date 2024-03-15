import { ChangeEvent, useEffect, useState } from "react";
import React from "react";
import pokeballImage from "./assets/pokeball.png";
import Pokemon from "./interfaces";
import PokedexContent from "./pages/Pokedex";
import "./App.css";

function App() {
  const [activeIcons, setActiveIcons] = useState<string[]>([]);
  const [pokemonName, setPokemonName] = useState<string>("");
  const [hasFetchedData, setHasFetchedData] = useState(false);
  const [hasPokemons, setHasPokemons] = useState(false);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const handlePokemonName = (event: ChangeEvent<HTMLInputElement>) => {
    setPokemonName(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await postFind("find");
      console.log(response);
    } catch (error) {
      console.error("Erro ao enviar POST:", error);
    }
  };

  const postFind = async (req: string) => {
    if (pokemonName === "" && activeIcons.length === 0) {
      req = "getall";
    }
    if (req === "find") {
      try {
        const res = await fetch("http://localhost:3000/api/find", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: pokemonName, type: activeIcons }),
        });

        if (!res.ok) {
          setHasPokemons(false);
          throw new Error("Erro ao fazer POST");
        }

        setHasPokemons(true);
        const dataJson = await res.json();
        await setPokemons(dataJson);
        console.log(dataJson);
      } catch (err) {
        setHasPokemons(false);
        console.error("Error:", err);
      }
    } else if (req === "getall") {
      try {
        const res = await fetch("http://localhost:3000/api/getall", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}),
        });

        if (!res.ok) {
          setHasPokemons(false);
          throw new Error("Erro ao fazer POST");
        }

        setHasPokemons(true);
        const dataJson = await res.json();
        await setPokemons(dataJson);
        console.log(dataJson);
      } catch (err) {
        setHasPokemons(false);
        console.error("Error:", err);
      }
    }
  };

  useEffect(() => {
    if (hasFetchedData === false) {
      try {
        setHasFetchedData(true);
        postFind("getall");
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
      <PokedexContent
        pokemons={pokemons}
        hasPokemons={hasPokemons}
        pokemonName={pokemonName}
        activeIcons={activeIcons}
        setActiveIcons={setActiveIcons}
        handlePokemonName={handlePokemonName}
        handleSubmit={handleSubmit}
      ></PokedexContent>
    </>
  );
}

export default App;

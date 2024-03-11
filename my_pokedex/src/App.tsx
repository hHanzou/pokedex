import { ChangeEvent, useEffect, useState } from "react";
import React from "react";
import pokeballImage from "./assets/pokeball.png";
import SearchForm from "./components/SearchField";
import Card from "./components/Card";
import "./App.css";

interface Pokemon {
  name: string;
  img: string;
  id: string;
  type: string[];
}

function App() {
  const [activeIcons, setActiveIcons] = useState<string[]>([]);
  const [pokemonName, setPokemonName] = useState<string>("");
  const [hasFetchedData, setHasFetchedData] = useState(false);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const displayTypesWithColor = (type: string[]): React.ReactNode[] => {
    return type.map((t, index) => (
      <React.Fragment key={t.toLowerCase()}>
        <i className={`${t.toLowerCase()}-color`}>{t}</i>
        {index < type.length - 1 && ", "}
      </React.Fragment>
    ));
  };

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
          throw new Error("Erro ao fazer POST");
        }

        const dataJson = await res.json();
        await setPokemons(dataJson);
        console.log(dataJson);
      } catch (err) {
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
          throw new Error("Erro ao fazer POST");
        }

        const dataJson = await res.json();
        await setPokemons(dataJson);
        console.log(dataJson);
      } catch (err) {
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
  });

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
        <div>
          <i>developed by hHanzou</i>
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
          {pokemons.map(
            (pokemon: {
              name: string;
              img: string;
              id: string;
              type: string[];
            }) => (
              <Card
                displayTypesWithColor={displayTypesWithColor}
                pokemon={pokemon}
              ></Card>
            )
          )}
        </div>
      </main>
    </>
  );
}

export default App;

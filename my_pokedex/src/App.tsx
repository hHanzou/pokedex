// import { useState } from "react";
import { useMutation } from "react-query";
import pokeballImage from "./assets/pokeball.png";
import IconType from "./components/icons";

import "./App.css";

interface JsonData {
  // Defina a estrutura do seu objeto de dados
  name: string;
  type: string[];
}

const postData = async (data: JsonData) => {
  const response = await fetch("sua_url_api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Adicione headers adicionais, se necessário
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Erro ao fazer a solicitação POST");
  }

  return response.json();
};

const { mutate } = useMutation(postData);

function App() {
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
          <form action="">
            <div className="types-area">
              <div>
                <input type="hidden" name="bug" id="" />
                <IconType type="bug"></IconType>
                bug
              </div>
              <div>
                <input type="hidden" name="drangon" id="" />
                <IconType type="dragon"></IconType>
                dragon
              </div>
              <div>
                <input type="hidden" name="fighter" id="" />
                <IconType type="fighter"></IconType>
                fighter
              </div>
              <div>
                <input type="hidden" name="fire" id="" />
                <IconType type="fire"></IconType>
                fire
              </div>
              <div>
                <input type="hidden" name="flying" id="" />
                <IconType type="flying"></IconType>
                flying
              </div>
              <div>
                <input type="hidden" name="ghost" id="" />
                <IconType type="ghost"></IconType>
                ghost
              </div>
              <div>
                <input type="hidden" name="grass" id="" />
                <IconType type="grass"></IconType>
                grass
              </div>
              <div>
                <input type="hidden" name="ground" id="" />
                <IconType type="ground"></IconType>
                ground
              </div>
              <div>
                <input type="hidden" name="ice" id="" />
                <IconType type="ice"></IconType>
                ice
              </div>
              <div>
                <input type="hidden" name="normal" id="" />
                <IconType type="normal"></IconType>
                normal
              </div>
              <div>
                <input type="hidden" name="poison" id="" />
                <IconType type="poison"></IconType>
                poison
              </div>
              <div>
                <input type="hidden" name="psycho" id="" />
                <IconType type="psycho"></IconType>
                psycho
              </div>
              <div>
                <input type="hidden" name="rock" id="" />
                <IconType type="rock"></IconType>
                rock
              </div>
              <div>
                <input type="hidden" name="electric" id="" />
                <IconType type="electric"></IconType>
                electric
              </div>
              <div>
                <input type="hidden" name="water" id="" />
                <IconType type="water"></IconType>
                water
              </div>
            </div>
            <div className="input-area">
              <input type="text" placeholder="Name" />
              <button>Find</button>
            </div>
          </form>
        </section>
        <div className="container-cards"></div>
      </main>
    </>
  );
}

export default App;

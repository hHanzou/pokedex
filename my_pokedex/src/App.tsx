// import { useState } from "react";
import pokeballImage from "./assets/pokeball.png";
import NormalIcon from "./components/icons/normal";

import "./App.css";

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
          <NormalIcon />
        </section>
        <div className="container-cards"></div>
      </main>
    </>
  );
}

export default App;

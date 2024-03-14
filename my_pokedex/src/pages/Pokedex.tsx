import React, { ChangeEvent } from "react";
import Pokemon from "../interfaces";
import SearchForm from "../components/SearchField";
import Card from "../components/Card";

interface PokedexProps {
  pokemons: Pokemon[];
  activeIcons: string[];
  pokemonName: string;
  setActiveIcons: React.Dispatch<React.SetStateAction<string[]>>;
  handlePokemonName: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent) => Promise<void>;
}

const displayTypesWithColor = (type: string[]): React.ReactNode[] => {
  return type.map((t, index) => (
    <React.Fragment key={t.toLowerCase()}>
      <i className={`${t.toLowerCase()}-color`}>{t}</i>
      {index < type.length - 1 && ", "}
    </React.Fragment>
  ));
};

const PokedexContent: React.FC<PokedexProps> = ({
  pokemons,
  activeIcons,
  pokemonName,
  setActiveIcons,
  handleSubmit,
  handlePokemonName,
}) => {
  return (
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
              key={pokemon.id}
              displayTypesWithColor={displayTypesWithColor}
              pokemon={pokemon}
            ></Card>
          )
        )}
      </div>
    </main>
  );
};

export default PokedexContent;

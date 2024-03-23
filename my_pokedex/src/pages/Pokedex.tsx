import React, {
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import Pokemon from "../interfaces";
import SearchForm from "../components/SearchField";
import Card from "../components/Card";
import pikachu404 from "../assets/pikachu-crying.gif";
import findMethod from "../controller/find";
import getAllMethod from "../controller/getAll";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const displayTypesWithColor = (type: string[]): React.ReactNode[] => {
  return type.map((t, index) => (
    <React.Fragment key={t.toLowerCase()}>
      <i className={`${t.toLowerCase()}-color`}>{t}</i>
      {index < type.length - 1 && ", "}
    </React.Fragment>
  ));
};

const PokedexContent: React.FC = () => {
  const navigate = useNavigate();
  const [hasFetchedData, setHasFetchedData] = useState(false);
  const currentPath = window.location.pathname;
  const [activeIcons, setActiveIcons] = useState<string[]>([]);
  const [pokemonName, setPokemonName] = useState<string>("");
  const [hasPokemons, setHasPokemons] = useState(false);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const { authenticated } = useContext(AuthContext);

  const handlePokemonName = (event: ChangeEvent<HTMLInputElement>) => {
    setPokemonName(event.target.value);
  };

  useEffect(
    function redirectIfNoAuth() {
      if (!authenticated) {
        navigate("/login");
      }
    },
    [authenticated]
  );

  const findTrigger = useCallback(async () => {
    try {
      console.log(activeIcons);
      console.log(pokemonName);
      await findMethod(pokemonName, activeIcons, setHasPokemons, setPokemons);
    } catch (error) {
      console.error("Erro ao enviar POST:", error);
    }
  }, [activeIcons, pokemonName, setHasPokemons, setPokemons]);

  useEffect(() => {
    if (hasFetchedData === true) findTrigger();
  }, [activeIcons, pokemonName, setHasPokemons, setPokemons]);

  useEffect(
    function getAllWhenPageLoads() {
      if (hasFetchedData === false && currentPath === "/") {
        try {
          setHasFetchedData(true);
          getAllMethod(setHasPokemons, setPokemons);
        } catch (e) {
          console.log("Error ", e);
        }
      }
    },
    [pokemons]
  );

  if (authenticated) {
    return (
      <main>
        <section className="search-section">
          <SearchForm
            activeIcons={activeIcons}
            pokemonName={pokemonName}
            setActiveIcons={setActiveIcons}
            handlePokemonName={handlePokemonName}
          ></SearchForm>
        </section>
        <div className="container-cards">
          {hasPokemons ? (
            pokemons.map(
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
            )
          ) : (
            <div className="pikachu404">
              <h2>No pokemons :(</h2>
              <img src={pikachu404} alt="pikachu404" />
            </div>
          )}
        </div>
      </main>
    );
  }
};

export default PokedexContent;

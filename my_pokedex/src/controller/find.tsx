import axios from "axios";
import getAllMethod from "./getAll";

const findMethod = async (
  pokemonName: string,
  activeIcons: string[],
  setHasPokemons: (value: React.SetStateAction<boolean>) => void,
  setPokemons: (value: React.SetStateAction<any[]>) => void
) => {
  if (pokemonName === "" && activeIcons.length === 0) {
    getAllMethod(setHasPokemons, setPokemons);
  }
  try {
    const response = await axios.post("http://localhost:3000/api/find", {
      name: pokemonName,
      type: activeIcons,
    });

    if (response.status !== 200) {
      setHasPokemons(false);
      throw new Error("Erro ao fazer POST");
    }

    setHasPokemons(true);
    const dataJson = response.data;
    setPokemons(dataJson);
    console.log(dataJson);
  } catch (err) {
    setHasPokemons(false);
    console.error("Error:", err);
  }
};

export default findMethod;

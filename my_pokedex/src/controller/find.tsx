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
};

export default findMethod;

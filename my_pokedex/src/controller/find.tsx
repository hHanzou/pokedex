import getAllMethod from "./getAll";

const findMethod = async (
  pokemonName: string,
  activeIcons: string[],
  setHasPokemons: (value: React.SetStateAction<boolean>) => void,
  setPokemons: (value: React.SetStateAction<any[]>) => void
) => {
  console.log("caiu aqui");
  if (pokemonName === "" && activeIcons.length === 0) {
    console.log("getall");
    return getAllMethod(setHasPokemons, setPokemons);
  }
  try {
    console.log("caiu aqui2");
    const res = await fetch("http://localhost:3000/api/find", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: pokemonName, type: activeIcons }),
    });
    console.log("passou");

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

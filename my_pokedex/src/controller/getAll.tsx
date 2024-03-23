const getAllMethod = async (
  setHasPokemons: (value: React.SetStateAction<boolean>) => void,
  setPokemons: (value: React.SetStateAction<any[]>) => void
) => {
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
};

export default getAllMethod;

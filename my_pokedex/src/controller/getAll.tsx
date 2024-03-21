import axios from "axios";

const getAllMethod = async (
  setHasPokemons: (value: React.SetStateAction<boolean>) => void,
  setPokemons: (value: React.SetStateAction<any[]>) => void
) => {
  try {
    const response = await axios.post("http://localhost:3000/api/getall", {});

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

export default getAllMethod;

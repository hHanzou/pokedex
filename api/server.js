// Importando os módulos necessários
const express = require("express");
const mongoose = require("mongoose");

// Configurando o express
const app = express();
const PORT = 3000;

app.use(express.json());

function capitalize(str) {
  // Verifica se a string não está vazia
  if (str.length === 0) {
    return str;
  }

  // Retorna a string com a primeira letra em maiúscula e o restante inalterado
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Conectando-se ao banco de dados MongoDB
mongoose.connect("mongodb://localhost:27017/pokedex_db", {});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Erro de conexão ao MongoDB:"));
db.once("open", () => {
  console.log("Conectado ao banco de dados MongoDB.");
});

const Schema = mongoose.Schema;
const pokemonSchema = new Schema({
  id: String,
  name: String,
  img: String,
  type: Array,
});

// Criando um modelo baseado no esquema e especificando a coleção
const Pokemon = mongoose.model("Pokemon", pokemonSchema, "pokemons");

// Rota para lidar com pedidos POST
app.post("/api/find", async (req, res) => {
  let data = req.body;
  //TYPE AND NAME
  if (data.name != null && data.type != null) {
    data.name = capitalize(data.name);
    data.type.forEach((t, i) => {
      data.type[i] = capitalize(t);
    });
    const regex = new RegExp(`^${data.name}`);
    try {
      const pokemon = await Pokemon.find(
        { name: regex, type: data.type },
        { _id: 0, stats: 0, moves: 0, damages: 0, misc: 0 }
      );

      if (!pokemon) {
        return res.status(404).json({ message: "Pokemon não encontrado." });
      }

      res.json(pokemon);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  //ONLY NAME
  else if (data.name != null) {
    data.name = capitalize(data.name);
    const regex = new RegExp(`^${data.name}`);
    try {
      const pokemon = await Pokemon.find(
        { name: regex },
        { _id: 0, stats: 0, moves: 0, damages: 0, misc: 0 }
      );

      if (!pokemon) {
        return res.status(404).json({ message: "Pokemon não encontrado." });
      }

      res.json(pokemon);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  //ONLY TYPE
  else if (data.type != null) {
    data.type.forEach((t, i) => {
      data.type[i] = capitalize(t);
    });
    console.log(data.type);
    try {
      const pokemon = await Pokemon.find(
        { type: data.type },
        { _id: 0, stats: 0, moves: 0, damages: 0, misc: 0 }
      );

      if (!pokemon) {
        return res.status(404).json({ message: "Pokemon não encontrado." });
      }

      res.json(pokemon);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
});

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

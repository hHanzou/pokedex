// Importando os módulos necessários
const express = require("express");
const mongoose = require("mongoose");

// Configurando o express
const app = express();
const PORT = 3000;

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

// Rota GET que busca todos os dados do MongoDB e os serve como resposta
app.get("/api/pokemons/get/", async (req, res) => {
  try {
    const pokemons = await Pokemon.find(
      {},
      { _id: 0, stats: 0, moves: 0, damages: 0, misc: 0 }
    );
    res.json(pokemons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Rota GET que busca pelo nome
app.get("/api/pokemons/get/:name", async (req, res) => {
  const nomePokemon = req.params.name;

  try {
    const pokemon = await Pokemon.findOne(
      { name: nomePokemon[0].toUpperCase() + nomePokemon.substring(1) },
      { _id: 0, stats: 0, moves: 0, damages: 0, misc: 0 }
    );

    if (!pokemon) {
      return res.status(404).json({ message: "Pokemon não encontrado." });
    }

    res.json(pokemon);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Rota GET que busca pelos tipos especificos
app.get("/api/pokemons/get/type/:type", async (req, res) => {
  const types = req.params.type
    .split("+")
    .map((type) => type.charAt(0).toUpperCase() + type.slice(1));

  console.log(types);

  try {
    const pokemon = await Pokemon.find(
      { type: types },
      { _id: 0, stats: 0, moves: 0, damages: 0, misc: 0 }
    );

    if (!pokemon) {
      return res.status(404).json({ message: "Pokemon não encontrado." });
    }

    res.json(pokemon);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

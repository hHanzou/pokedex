// Importando os módulos necessários
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

// Configurando o express
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

function capitalize(str) {
  // Verifica se a string não está vazia
  if (str.length === 0) {
    return str;
  }

  // Retorna a string com a primeira letra em maiúscula e o restante inalterado
  return str.charAt(0).toUpperCase() + str.slice(1);
}

//env config

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

// Conectando-se ao banco de dados MongoDB
mongoose
  .connect(
    `mongodb+srv://${dbUser}:${dbPassword}@cluster0.bixs4ht.mongodb.net/pokedex_db`,
    {}
  )
  .then(() => {
    // Iniciando o servidor
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => console.log(err));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Erro de conexão ao MongoDB:"));
db.once("open", () => {
  console.log("Conectado ao banco de dados MongoDB.");
});

// Models
const Trainer = require("./models/Trainer");
const Pokemon = require("./models/Pokemon");

// register
app.post("/auth/register", async (req, res) => {
  const { name, email, password, passwordConfirm } = req.body;
  // validations
  if (!name || name === "") {
    return res.status(422).json({ msg: "field 'name' is required" });
  }
  if (!email || email === "") {
    return res.status(422).json({ msg: "field 'email' is required" });
  }
  if (!password || password === "") {
    return res.status(422).json({ msg: "field 'password' is required" });
  }
  if (!passwordConfirm || passwordConfirm === "") {
    return res
      .status(422)
      .json({ msg: "field 'password confirm' is required" });
  }
  if (password.length < 8) {
    return res.status(422).json({ msg: "password lenght must be at least 8" });
  }
  if (password !== passwordConfirm) {
    return res
      .status(422)
      .json({ msg: "password and password_confirm does not match" });
  }
  // check if Trainer exists
  const trainerExists = await Trainer.findOne({ email: email });

  if (trainerExists) {
    return res.status(422).json({ msg: "email is already in use" });
  }

  // create password
  const salt = await bcrypt.genSalt(12);
  const passwordHash = await bcrypt.hash(password, salt);

  //create trainer
  const trainer = new Trainer({
    name,
    email,
    password: passwordHash,
    pokemons_caught: [],
    pokemons_wishlist: [],
  });

  try {
    await trainer.save();
    res.status(201).json({ msg: "user created successfully" });
  } catch (err) {
    res.status(422).json({ msg: "server error: " + err });
  }
});

// return all pokemons
app.post("/api/getall", async (req, res) => {
  try {
    const pokemon = await Pokemon.find(
      {},
      { _id: 0, stats: 0, moves: 0, damages: 0, misc: 0 }
    );

    if (!pokemon) {
      return res.status(404).json({ message: "No Pokemons :(" });
    }

    res.json(pokemon);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Rota para lidar com pedidos POST
app.post("/api/find", async (req, res) => {
  let data = req.body;
  console.log(data);
  //TYPE AND NAME
  if (
    data.name != null &&
    data.name != "" &&
    data.type != null &&
    data.type.length > 0
  ) {
    data.name = capitalize(data.name);
    data.type.forEach((t, i) => {
      data.type[i] = capitalize(t);
    });
    const regex = new RegExp(`^${data.name}`);
    try {
      const pokemon = await Pokemon.find(
        { name: regex, type: { $all: data.type } },
        { _id: 0, stats: 0, moves: 0, damages: 0, misc: 0 }
      );

      if (!pokemon || pokemon.length == 0) {
        return res.status(404).json({ message: "No pokemons :(" });
      }

      return res.json(pokemon);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  //ONLY NAME
  else if (data.name != null && data.name != "") {
    data.name = capitalize(data.name);
    const regex = new RegExp(`^${data.name}`);
    try {
      const pokemon = await Pokemon.find(
        { name: regex },
        { _id: 0, stats: 0, moves: 0, damages: 0, misc: 0 }
      );

      if (!pokemon || pokemon.length == 0) {
        return res.status(404).json({ message: "No pokemons :(" });
      }

      return res.json(pokemon);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  //ONLY TYPE
  else if (data.type != null && data.type.length > 0) {
    data.type.forEach((t, i) => {
      data.type[i] = capitalize(t);
    });
    console.log(data.type);
    try {
      const pokemon = await Pokemon.find(
        { type: { $all: data.type } },
        { _id: 0, stats: 0, moves: 0, damages: 0, misc: 0 }
      );

      if (!pokemon || pokemon.length == 0) {
        return res.status(404).json({ message: "No pokemons :(" });
      }
      // console.log(pokemon);
      return res.json(pokemon);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
});
